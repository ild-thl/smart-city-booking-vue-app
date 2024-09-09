module.exports = {
  devServer: {
    allowedHosts: "all",
    port: process.env.PORT || 8080,
  },
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
};
