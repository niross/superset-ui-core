"use strict";

exports.__esModule = true;
exports.defineSharedModule = defineSharedModule;
exports.defineSharedModules = defineSharedModules;
exports.reset = reset;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/** The type of an imported module. Don't fully understand this, yet. */

/**
 * This is where packages are stored. We use window, because it plays well with Webpack.
 * To avoid
 * Have to amend the type of window, because window's usual type doesn't describe these fields.
 */
var modulePromises = {};

var withNamespace = function withNamespace(name) {
  return "__superset__/" + name;
};
/**
 * Dependency management using global variables, because for the life of me
 * I can't figure out how to hook into UMD from a dynamically imported package.
 *
 * This defines a dynamically imported js module that can be used to import from
 * multiple different plugins.
 *
 * When importing a common module (such as react or lodash or superset-ui)
 * from a plugin, the plugin's build config will be able to
 * reference these globals instead of rebuilding them.
 *
 * @param name the module's name (should match name in package.json)
 * @param promise the promise resulting from a call to `import(name)`
 */


function defineSharedModule(_x, _x2) {
  return _defineSharedModule.apply(this, arguments);
}
/**
 * Define multiple shared modules at once, using a map of name -> `import(name)`
 *
 * @see defineSharedModule
 * @param moduleMap
 */


function _defineSharedModule() {
  _defineSharedModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name, fetchModule) {
    var moduleKey, modulePromise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // this field on window is used by dynamic plugins to reference the module
            moduleKey = withNamespace(name);

            if (!(!window[moduleKey] && !modulePromises[name])) {
              _context.next = 7;
              break;
            }

            // if the module has not been loaded, load it
            modulePromise = fetchModule();
            modulePromises[name] = modulePromise; // wait for the module to load, and attach the result to window
            // so that it can be referenced by plugins

            _context.next = 6;
            return modulePromise;

          case 6:
            window[moduleKey] = _context.sent;

          case 7:
            return _context.abrupt("return", modulePromises[name]);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _defineSharedModule.apply(this, arguments);
}

function defineSharedModules(_x3) {
  return _defineSharedModules.apply(this, arguments);
} // only exposed for tests


function _defineSharedModules() {
  _defineSharedModules = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(moduleMap) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Promise.all(Object.entries(moduleMap).map(function (_ref) {
              var name = _ref[0],
                  fetchModule = _ref[1];
              return defineSharedModule(name, fetchModule);
            })));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _defineSharedModules.apply(this, arguments);
}

function reset() {
  Object.keys(modulePromises).forEach(function (key) {
    delete window[withNamespace(key)];
    delete modulePromises[key];
  });
}