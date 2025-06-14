# TODO List

## ESLint Issues

### TypeScript Type Issues

- [ ] Replace `any` types with proper TypeScript types in:
  - `figma-plugin/code.ts`
  - `scripts/extract-figma-styles.ts`
  - `src/services/figma.service.ts`

### Console Statements

- [ ] Remove or replace console statements with proper logging in:
  - `figma-plugin/code.ts`
  - `scripts/extract-figma-styles.ts`
  - `src/server/index.ts`

### Unused Variables

- [ ] Remove or use unused variables:
  - `isApplyingCodeChanges` in `figma-plugin/code.ts`
  - `propsTextNode` in `figma-plugin/code.ts`
  - `rgbToHex` in `figma-plugin/code.ts`
  - `property` in `scripts/extract-figma-styles.ts`

### Import Issues

- [ ] Fix require statements in `src/tests/mcp.test.ts`:
  - Replace `require` with `import` statements

## Component Generation

- [ ] Improve component story generation to include proper variants
- [ ] Add proper TypeScript types for component props
- [ ] Implement proper style extraction from Figma
- [ ] Add unit tests for generated components

## Documentation

- [ ] Add documentation for component usage
- [ ] Create style guide for the design system
- [ ] Document the extraction process
- [ ] Add examples of component usage

## Testing

- [ ] Set up proper testing environment
- [ ] Add unit tests for services
- [ ] Add integration tests for the API
- [ ] Add visual regression tests for components

## Performance

- [ ] Optimize Figma API calls
- [ ] Improve component generation performance
- [ ] Add caching for Figma data

## Security

- [ ] Review token handling
- [ ] Add proper error handling for API calls
- [ ] Implement rate limiting for API calls
