import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import graphqlLoader from 'vite-plugin-graphql-loader';

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      graphqlLoader(),
      sentryVitePlugin({
        org: 'bbdev',
        project: 'javascript-react',
        authToken: env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          assets: './dist/**',
        },
      }),
    ],
  };
});
