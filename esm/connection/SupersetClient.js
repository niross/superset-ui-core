import SupersetClientClass from './SupersetClientClass';
var singletonClient;

function getInstance() {
  if (!singletonClient) {
    throw new Error('You must call SupersetClient.configure(...) before calling other methods');
  }

  return singletonClient;
}

var SupersetClient = {
  configure: function configure(config) {
    singletonClient = new SupersetClientClass(config);
    return singletonClient;
  },
  reset: function reset() {
    singletonClient = undefined;
  },
  getInstance: getInstance,
  delete: function _delete(request) {
    return getInstance().delete(request);
  },
  get: function get(request) {
    return getInstance().get(request);
  },
  init: function init(force) {
    return getInstance().init(force);
  },
  isAuthenticated: function isAuthenticated() {
    return getInstance().isAuthenticated();
  },
  post: function post(request) {
    return getInstance().post(request);
  },
  put: function put(request) {
    return getInstance().put(request);
  },
  reAuthenticate: function reAuthenticate() {
    return getInstance().reAuthenticate();
  },
  request: function request(_request) {
    return getInstance().request(_request);
  }
};
export default SupersetClient;