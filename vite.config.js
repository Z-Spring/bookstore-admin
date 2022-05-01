import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api/v1/books': {
        target: 'http://localhost:8080',
        // changeOrigin:false     默认是true    true:代理服务器的ip(localhost:8080)，false:真实ip localhost:3000
        //pathRewrite 可以不用配置，因为后端接口路径包含api/v1/
        /* pathRewrite: {
          '^/api/v1/login': '/api/v1/login'
        } */
      },
      '/api/v1/login': {
        target: 'http://localhost:8080',
      }
    }
  }
})
