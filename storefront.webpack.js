const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')

module.exports = () => ({
  resolve: {
    alias: {
      // './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term')
    }
  }
})
