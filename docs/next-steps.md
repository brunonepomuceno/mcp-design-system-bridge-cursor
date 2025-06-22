# Next Steps

With a solid and functional base, we can now evolve the project from a proof-of-concept into a powerful development tool. Here are the recommended next steps:

### 1. Implement the Recursive Extractor (Figma -> Code)

- **What:** Currently, our `renderNode` function is recursive and can _create_ complex components in Figma from JSON. However, the reverse function, `updateComponentJson`, is still very simple and cannot extract a hierarchical structure from Figma.
- **Why:** We need to refactor `updateComponentJson` to make it recursive as well. It should be able to traverse a selected component in Figma, analyze its children, and build a JSON object in our format, completing the bidirectional synchronization cycle for complex components. **This is the most important step to make the tool truly useful.**

### 2. Improve Icon Handling

- **What:** We are currently using a text emoji ("🔍") as a placeholder for icons. The next step is to extract the actual SVG data from Figma and store it in our JSON, then render it as SVG components in React.
- **Why:** This will make our code components visually identical to those in Figma and ready for production, eliminating the need for hacks.

### 3. Automate React Component Generation

- **What:** Our React components (`button.tsx`, `search.tsx`) are still very basic. We can create a smarter code generator (in `scripts/`) that reads the JSON and generates a more functional React component, with props, state, and event handlers (e.g., turning `search.tsx` into a real `<input>`).
- **Why:** This dramatically speeds up development by creating a high-quality, ready-to-use boilerplate instead of just a static visual representation.

### 4. Enhance the Plugin UI

- **What:** The plugin's interface is still a simple dropdown. We could add an "Extraction" tab where the user could select a component in Figma and click "Extract to JSON," which would trigger our new recursive extraction function.
- **Why:** This would make the workflow for creating new components from Figma much more intuitive and faster.

**Recommendation:** Start with **Step 1**, as it completes the core functionality of our tool: the bidirectional synchronization of complex components.
