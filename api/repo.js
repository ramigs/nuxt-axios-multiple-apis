export default ($axios) => (resource) => ({
  ...resource($axios)
})
