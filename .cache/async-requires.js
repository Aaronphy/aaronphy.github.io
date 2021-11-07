// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-confirm-js": () => import("./../../../src/pages/confirm.js" /* webpackChunkName: "component---src-pages-confirm-js" */),
  "component---src-pages-react-components-unsubscribed-js": () => import("./../../../src/pages/react-components-unsubscribed.js" /* webpackChunkName: "component---src-pages-react-components-unsubscribed-js" */),
  "component---src-pages-thanks-js": () => import("./../../../src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */),
  "component---src-templates-blog-index-js": () => import("./../../../src/templates/blog-index.js" /* webpackChunkName: "component---src-templates-blog-index-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

