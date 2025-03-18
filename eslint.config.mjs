import eslintConfig from '@k4i/eslint-config';
/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [...eslintConfig.base, ...eslintConfig.typescript, ...eslintConfig.prettier];
