const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/pages/404.js"))),
  "component---src-pages-confirm-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/pages/confirm.js"))),
  "component---src-pages-react-components-unsubscribed-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/pages/react-components-unsubscribed.js"))),
  "component---src-pages-thanks-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/pages/thanks.js"))),
  "component---src-templates-blog-index-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/templates/blog-index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/aaronphy/github/aaronphy.github.io/src/templates/blog-post.js")))
}

