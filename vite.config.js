import createVuePlugin from '@vitejs/plugin-vue';
import {
    resolve,
} from 'path';
import {
    defineConfig,
} from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        console.log(id, 'id');
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                },
            },
        },
    },
    plugins: [createVuePlugin(), svgLoader()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@package': resolve(__dirname, 'package.json'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${resolve(
                        'src/styles/variables.less',
                    )}";`,
                },
                math: 'strict',
                javascriptEnabled: true,
            },
        },
    },
    server: {
        open: true,
        host: '0.0.0.0',
    },
});
