import 'dotenv/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...defaultExclude],
  },
  plugins: [tsConfigPaths()],
});
