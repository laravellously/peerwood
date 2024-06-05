import dns from 'dns'
import path from 'path'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// So that Vite will load on localhost instead of `127.0.0.1`.
// See: https://vitejs.dev/config/server-options.html#server-host.
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [redwood()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, '../node_modules/bootstrap'),
    }
  },
}

export default defineConfig(viteConfig)
