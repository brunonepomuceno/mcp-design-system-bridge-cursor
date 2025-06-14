import fs from 'fs';
import path from 'path';
import axios from 'axios';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = 'UG3aHTf3KPLN8CxPG9VmBf';
const NODE_ID = '7809-18809';

// Create axios instance with SSL verification disabled
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

interface FigmaVariable {
  id: string;
  name: string;
  key: string;
  variableCollectionId: string;
  value: any;
  description?: string;
  hiddenFromPublishing?: boolean;
  scopes?: string[];
  codeSyntax?: {
    [key: string]: string;
  };
}

interface FigmaVariableCollection {
  id: string;
  name: string;
  hiddenFromPublishing?: boolean;
  modes: {
    modeId: string;
    name: string;
  }[];
}

interface FigmaVariablesResponse {
  status: number;
  err?: string;
  variables?: FigmaVariable[];
  collections?: FigmaVariableCollection[];
}

async function checkFigmaAccess() {
  try {
    const response = await axiosInstance.get(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });
    console.log('Successfully connected to Figma file:', response.data.name);
    return true;
  } catch (error) {
    console.error('Error accessing Figma file:', error.response?.data || error.message);
    return false;
  }
}

async function getFigmaVariables(): Promise<FigmaVariablesResponse> {
  try {
    const response = await axiosInstance.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Figma variables:', error);
    throw error;
  }
}

function organizeVariablesByCollection(
  variables: FigmaVariable[],
  collections: FigmaVariableCollection[]
): { [key: string]: FigmaVariable[] } {
  const organized: { [key: string]: FigmaVariable[] } = {};

  collections.forEach(collection => {
    organized[collection.name] = variables.filter(
      variable => variable.variableCollectionId === collection.id
    );
  });

  return organized;
}

function generateTokenFile(
  collectionName: string,
  variables: FigmaVariable[],
  collection: FigmaVariableCollection
): string {
  const tokens: { [key: string]: any } = {};

  variables.forEach(variable => {
    const tokenName = variable.name
      .split('/')
      .map(part => part.trim())
      .join('.');

    tokens[tokenName] = {
      value: variable.value,
      type: typeof variable.value,
      description: variable.description,
      ...(variable.codeSyntax && { codeSyntax: variable.codeSyntax }),
    };
  });

  return JSON.stringify(
    {
      name: collectionName,
      modes: collection.modes,
      tokens,
    },
    null,
    2
  );
}

async function extractVariables() {
  try {
    console.log('Checking Figma access...');
    const hasAccess = await checkFigmaAccess();
    if (!hasAccess) {
      console.error('Could not access Figma file. Please check your access token and file key.');
      return;
    }

    console.log('Fetching Figma variables...');
    const { variables, collections } = await getFigmaVariables();

    if (!variables || !collections) {
      console.log('No variables found in the Figma file.');
      return;
    }

    const organizedVariables = organizeVariablesByCollection(variables, collections);
    const foundationDir = path.join(process.cwd(), 'src', 'foundation');

    // Create foundation directory if it doesn't exist
    if (!fs.existsSync(foundationDir)) {
      fs.mkdirSync(foundationDir, { recursive: true });
    }

    // Save each collection as a separate file
    for (const [collectionName, collectionVariables] of Object.entries(organizedVariables)) {
      const collection = collections.find(c => c.name === collectionName);
      if (!collection) continue;

      const fileName = collectionName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

      const filePath = path.join(foundationDir, `${fileName}.json`);
      const content = generateTokenFile(collectionName, collectionVariables, collection);

      fs.writeFileSync(filePath, content);
      console.log(`Saved ${collectionName} variables to ${filePath}`);
    }

    console.log('Variable extraction completed successfully!');
  } catch (error) {
    console.error('Error extracting variables:', error);
    process.exit(1);
  }
}

extractVariables();
