import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

const plugins = [
  react({
      babel: {
          plugins: ['babel-plugin-macros', ['babel-plugin-styled-components', {"displayName": false}]],
      },
  },),
  ViteMinifyPlugin({})
];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: plugins,
  publicDir: 'public',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})
