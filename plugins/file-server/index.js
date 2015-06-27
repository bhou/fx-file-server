module.exports = function (options, imports, register) {
  var logger = imports.logger.getLogger('file-server');

  var waveletApp = imports.waveletApp;  // waveletApp is an express app
  var express = imports.express;

  waveletApp.use(root + '/', express.static(__dirname + '/../../public'));

  // TODO: your app entry is here


  register(null, {}); // provide nothing
};