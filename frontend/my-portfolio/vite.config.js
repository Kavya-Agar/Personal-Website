import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Copy CNAME to dist/
function copyCNAME() {
  return {
    name: 'copy-cname',
    closeBundle: () => {
      const cnamePath = resolve(__dirname, 'CNAME')
      const distPath = resolve(__dirname, 'dist/CNAME')
      if (fs.existsSync(cnamePath)) {
        fs.copyFileSync(cnamePath, distPath)
        console.log('✅ Copied CNAME to dist/')
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), copyCNAME()],
  base: '/', // <-- or '/' if you're deploying to a custom domain root
})
