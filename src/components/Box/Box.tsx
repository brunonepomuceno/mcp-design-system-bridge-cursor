import React from 'react';
import styled from 'styled-components';
import { paintStyles } from '../../tokens/paintStyles';
import { textStyles as textStylesTokens } from '../../tokens/textStyles';
import { effectStyles as effectStylesTokens } from '../../tokens/effectStyles';

const BoxContainer = styled.div`
  background-color: ${paintStyles.imagePlaceholder.name};
  color: ${textStylesTokens.body.name};
  box-shadow: ${effectStylesTokens.dropShadow.name};
  padding: 20px;
  border-radius: 8px;
`;

const Box: React.FC = () => {
  return <BoxContainer>Este é um componente Box com estilos do Figma.</BoxContainer>;
};

export default Box;
