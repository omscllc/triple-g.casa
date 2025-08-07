# SCSS Refactoring Plan

## Current Issues
1. Circular import pattern (style.scss → bootstrap.scss → import.scss)
2. Empty or nearly empty files (print.scss, footer.scss)
3. Inconsistent use of variables (hardcoded "white" vs. $white variable)
4. Poor organization of variables in variables.scss
5. Basic directory structure that doesn't follow established patterns
6. Minimal use of SCSS features (mixins, functions, placeholder selectors)
7. Lack of documentation and comments

## Proposed Directory Structure (7-1 Pattern)

```
scss/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   |– _animations.scss   # Animations
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _navigation.scss   # Navigation
|   |– _header.scss       # Header component
|   |– _footer.scss       # Footer component
|
|– layout/
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header layout
|   |– _footer.scss       # Footer layout
|   |– _sidebar.scss      # Sidebar layout
|   |– _forms.scss        # Forms layout
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|
|– themes/
|   |– _default.scss      # Default theme
|   |– _admin.scss        # Admin theme
|   |– _print.scss        # Print styles
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|
`– style.scss             # Main Sass file
```

## Best Practices to Implement

### File Organization
- Use the 7-1 pattern for organizing files
- Use partial files (prefixed with underscore)
- Group related styles together

### Variables
- Organize variables by type (colors, typography, spacing, etc.)
- Use descriptive variable names
- Comment variable groups

### Mixins and Functions
- Create reusable mixins for common patterns
- Use functions for calculations
- Document parameters and usage

### Nesting
- Limit nesting to 3 levels maximum
- Use BEM naming convention consistently
- Avoid overly specific selectors

### Comments and Documentation
- Add file headers with descriptions
- Document complex code sections
- Use consistent comment style

### Import Order
- Import abstracts first (variables, mixins, functions)
- Import vendors next
- Import base styles
- Import layout components
- Import UI components
- Import page-specific styles
- Import theme styles last

## Implementation Plan
1. Create the new directory structure
2. Reorganize existing files into the new structure
3. Create new partial files for missing components
4. Refactor variables.scss into organized partials
5. Implement proper import hierarchy in style.scss
6. Add documentation and comments
7. Test compilation and functionality
