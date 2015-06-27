module.exports = {
  "apps": [
    "file-server"
  ],
  "home": __dirname,
  "root": '', // your web root path
  "pluginSearchPaths": [
    __dirname + '/plugins', // first read the local plugins
    //__dirname + '/../../fx-plugins',
    //__dirname + '/../../fx-red-plugins',
    __dirname + '/repo' + '/plugins/node_modules',  // global plugins
    __dirname + '/repo' + '/wavelets/node_modules' // global red node plugin
  ],
  "binding": {
    // add your specific binding here
  },
  "defaultPluginConfig": {
    "fx-red": {
      "flowFile": __dirname + "/.node-red/flow.json",
      "userDir": __dirname + "/.node-red",
      "nodesDir":  [
        __dirname + '/repo' + "/wavelets/node_modules"
      ],
      //"nodesDir": [
      //  __dirname + '/../../fx-red-plugins'
      //],
      "httpAdminRoot": "/editor",
      "httpNodeRoot": "/"
    },
    "fx-middleware": {
      "morgan": {
        "path": __dirname + "/logs",
        "format": "short", // combined, common, dev, short, tiny, or user defined
        "filePrefix": "access_"
      },
      "sessionStore": "memory",
      "sessionSecret": "this is a session secret",
      "multerPath": "./public/upload"
    },
    // add your specific plugin setup here
  }
};