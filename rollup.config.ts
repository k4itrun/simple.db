import { join } from 'node:path';
import { RollupOptions, OutputOptions, ModuleFormat } from 'rollup';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginTypescript from '@rollup/plugin-typescript';

const SOURCE_DIR = 'src/';
const OUTPUT_DIR = 'dist/';

const outputConfig = (format: ModuleFormat, filename: string): OutputOptions => ({
  file: `${OUTPUT_DIR}${format}/src/${filename}.${format === 'esm' ? 'js' : 'cjs'}`,
  format,
  compact: false,
});

const buildConfig: Partial<RollupOptions> = {
  input: join(SOURCE_DIR, 'simple.db.ts'),
  plugins: [rollupPluginTypescript({ tsconfig: 'tsconfig.json' }), rollupPluginCommonjs()],
  output: [outputConfig('esm', 'simple.db'), outputConfig('cjs', 'simple.db')] satisfies OutputOptions[],
};

export default buildConfig;
