import { ChangeSet, ValidationResult, ValidationError, ValidationWarning } from '../types/mcp';

export class SyncValidator {
  validate(changes: ChangeSet): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];

    // Validate components
    for (const change of changes.components) {
      if (change.type === 'add') {
        this.validateNewComponent(change, errors, warnings);
      } else if (change.type === 'update') {
        this.validateComponentUpdate(change, errors, warnings);
      } else if (change.type === 'delete') {
        this.validateComponentDeletion(change, errors, warnings);
      }
    }

    // Validate tokens
    for (const change of changes.tokens) {
      if (change.type === 'add') {
        this.validateNewToken(change, errors, warnings);
      } else if (change.type === 'update') {
        this.validateTokenUpdate(change, errors, warnings);
      } else if (change.type === 'delete') {
        this.validateTokenDeletion(change, errors, warnings);
      }
    }

    // Validate icons
    for (const change of changes.icons) {
      if (change.type === 'add') {
        this.validateNewIcon(change, errors, warnings);
      } else if (change.type === 'update') {
        this.validateIconUpdate(change, errors, warnings);
      } else if (change.type === 'delete') {
        this.validateIconDeletion(change, errors, warnings);
      }
    }

    // Validate images
    for (const change of changes.images) {
      if (change.type === 'add') {
        this.validateNewImage(change, errors, warnings);
      } else if (change.type === 'update') {
        this.validateImageUpdate(change, errors, warnings);
      } else if (change.type === 'delete') {
        this.validateImageDeletion(change, errors, warnings);
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
    };
  }

  private validateNewComponent(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check required fields
    if (!details.name) {
      errors.push({
        code: 'MISSING_NAME',
        message: 'Component name is required',
        path: change.path,
      });
    }

    if (!details.props) {
      errors.push({
        code: 'MISSING_PROPS',
        message: 'Component props are required',
        path: change.path,
      });
    }

    // Check naming conventions
    if (details.name && !/^[A-Z][a-zA-Z0-9]*$/.test(details.name)) {
      errors.push({
        code: 'INVALID_NAME',
        message: 'Component name must be PascalCase',
        path: change.path,
      });
    }

    // Check for duplicate props
    const propNames = new Set<string>();
    for (const prop of details.props || []) {
      if (propNames.has(prop.name)) {
        errors.push({
          code: 'DUPLICATE_PROP',
          message: `Duplicate prop name: ${prop.name}`,
          path: change.path,
        });
      }
      propNames.add(prop.name);
    }
  }

  private validateComponentUpdate(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check for breaking changes
    if (details.breakingChanges) {
      errors.push({
        code: 'BREAKING_CHANGE',
        message: 'Breaking changes detected',
        path: change.path,
      });
    }

    // Check for deprecated props
    if (details.deprecatedProps) {
      warnings.push({
        code: 'DEPRECATED_PROP',
        message: 'Using deprecated props',
        path: change.path,
      });
    }
  }

  private validateComponentDeletion(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    // Check if component is in use
    if (change.details.usageCount > 0) {
      errors.push({
        code: 'COMPONENT_IN_USE',
        message: `Component is used in ${change.details.usageCount} places`,
        path: change.path,
      });
    }
  }

  private validateNewToken(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check required fields
    if (!details.name) {
      errors.push({
        code: 'MISSING_NAME',
        message: 'Token name is required',
        path: change.path,
      });
    }

    if (!details.value) {
      errors.push({
        code: 'MISSING_VALUE',
        message: 'Token value is required',
        path: change.path,
      });
    }

    // Check naming conventions
    if (details.name && !/^[a-z][a-zA-Z0-9-]*$/.test(details.name)) {
      errors.push({
        code: 'INVALID_NAME',
        message: 'Token name must be kebab-case',
        path: change.path,
      });
    }
  }

  private validateTokenUpdate(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check for breaking changes
    if (details.breakingChanges) {
      errors.push({
        code: 'BREAKING_CHANGE',
        message: 'Breaking changes detected',
        path: change.path,
      });
    }

    // Check for deprecated tokens
    if (details.deprecated) {
      warnings.push({
        code: 'DEPRECATED_TOKEN',
        message: 'Using deprecated token',
        path: change.path,
      });
    }
  }

  private validateTokenDeletion(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    // Check if token is in use
    if (change.details.usageCount > 0) {
      errors.push({
        code: 'TOKEN_IN_USE',
        message: `Token is used in ${change.details.usageCount} places`,
        path: change.path,
      });
    }
  }

  private validateNewIcon(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check required fields
    if (!details.name) {
      errors.push({
        code: 'MISSING_NAME',
        message: 'Icon name is required',
        path: change.path,
      });
    }

    if (!details.svg) {
      errors.push({
        code: 'MISSING_SVG',
        message: 'Icon SVG is required',
        path: change.path,
      });
    }

    // Check naming conventions
    if (details.name && !/^[a-z][a-zA-Z0-9-]*$/.test(details.name)) {
      errors.push({
        code: 'INVALID_NAME',
        message: 'Icon name must be kebab-case',
        path: change.path,
      });
    }
  }

  private validateIconUpdate(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check for breaking changes
    if (details.breakingChanges) {
      errors.push({
        code: 'BREAKING_CHANGE',
        message: 'Breaking changes detected',
        path: change.path,
      });
    }

    // Check for deprecated icons
    if (details.deprecated) {
      warnings.push({
        code: 'DEPRECATED_ICON',
        message: 'Using deprecated icon',
        path: change.path,
      });
    }
  }

  private validateIconDeletion(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    // Check if icon is in use
    if (change.details.usageCount > 0) {
      errors.push({
        code: 'ICON_IN_USE',
        message: `Icon is used in ${change.details.usageCount} places`,
        path: change.path,
      });
    }
  }

  private validateNewImage(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check required fields
    if (!details.name) {
      errors.push({
        code: 'MISSING_NAME',
        message: 'Image name is required',
        path: change.path,
      });
    }

    if (!details.url) {
      errors.push({
        code: 'MISSING_URL',
        message: 'Image URL is required',
        path: change.path,
      });
    }

    // Check naming conventions
    if (details.name && !/^[a-z][a-zA-Z0-9-]*$/.test(details.name)) {
      errors.push({
        code: 'INVALID_NAME',
        message: 'Image name must be kebab-case',
        path: change.path,
      });
    }
  }

  private validateImageUpdate(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    const { details } = change;

    // Check for breaking changes
    if (details.breakingChanges) {
      errors.push({
        code: 'BREAKING_CHANGE',
        message: 'Breaking changes detected',
        path: change.path,
      });
    }

    // Check for deprecated images
    if (details.deprecated) {
      warnings.push({
        code: 'DEPRECATED_IMAGE',
        message: 'Using deprecated image',
        path: change.path,
      });
    }
  }

  private validateImageDeletion(
    change: any,
    errors: ValidationError[],
    warnings: ValidationWarning[]
  ): void {
    // Check if image is in use
    if (change.details.usageCount > 0) {
      errors.push({
        code: 'IMAGE_IN_USE',
        message: `Image is used in ${change.details.usageCount} places`,
        path: change.path,
      });
    }
  }
}
