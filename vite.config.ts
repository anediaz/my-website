import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(),
    svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
        include: "**/*.svg",
    })
    ],
    test: {
        // support `describe`, `test` etc. globally, 
        // so you don't need to import them every time
        globals: true,
        // run tests in jsdom environment
        environment: "jsdom",
    },
    build: {
        sourcemap: true,
    },
})
