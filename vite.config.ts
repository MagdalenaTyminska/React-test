import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		// wprowadzone zmiany
		port: 5000,
	},
	build: {
		outDir: 'build',
	},
	css: {
		devSourcemap: true,
	},
});
