import { defineConfig } from 'vite'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/Ag3ntAud1t/' : '/',
  plugins: [{
    name: 'github-pages-routes',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const entry = bundle['index.html']
      if (entry?.type !== 'asset') this.error('Missing application entry index.html')
      // Pages serves directory indexes for fixed routes and 404.html for run IDs.
      for (const fileName of ['new/index.html', 'history/index.html', '404.html']) {
        this.emitFile({ type: 'asset', fileName, source: entry.source })
      }
    },
  }],
}))
