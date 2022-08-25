// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
//!imports
var _runtime = require("regenerator-runtime/runtime");
var _modelJs = require("./model.js.js");
var _recipeViewJs = require("./views/recipeView.js.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addrecipeView = require("./views/addrecipeView");
var _addrecipeViewDefault = parcelHelpers.interopDefault(_addrecipeView);
var _config = require("./config");
// hot loeading
// if(module.hot){
//   module.hot.accept();
// }
String.prototype.toDomElement = function() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this;
    return wrapper;
};
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpiner();
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        await _modelJs.loeadRecipe(id); //in the modele
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe); // in the view
        (0, _bookmarkViewJsDefault.default).update(_modelJs.state.bookmarks);
    // console.log(model.state.bookmarks);
    } catch (err) {
        // console.error(err);
        (0, _recipeViewJsDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpiner();
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        await _modelJs.loadSearchResults(query);
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.error(err);
    }
};
const controlPagination = function(goToPage) {
    // console.log("🚀 ~ file: controller.js ~ line 68 ~ goToPage", goToPage)
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
// model.state.search.page=
};
const controlServings = function(newServings) {
    // update the recipe serings (in state)
    _modelJs.updateServings(newServings);
    // console.log(newServings);
    // update thre recipe view
    // recipeView.render(model.state.recipe);// in the view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe); // in the view
// !here
};
const controllAddBookmark = function() {
    // console.log(model.state.recipe.bookmarked);
    if (_modelJs.state.recipe.bookmarked) _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    else _modelJs.addBookmark(_modelJs.state.recipe);
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookMakrks = function() {
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controladdRecipeView = async function(newrecipe) {
    // console.log(newrecipe);
    try {
        (0, _addrecipeViewDefault.default).renderSpiner();
        await _modelJs.uploadRecipe(newrecipe);
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // addRecipeView.render(model.state.recipe)//worng
        (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
        (0, _addrecipeViewDefault.default).renderMessage();
        // change id in url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        setTimeout(()=>{
            (0, _addrecipeViewDefault.default).togglerWindow();
        }, (0, _config.MODAL_TIMEOUT_SEC) * 1000);
    // console.log(model.state.recipe);
    } catch (err) {
        (0, _addrecipeViewDefault.default).renderError();
    //! we should reset the form inthe casee of the  fail of  the uploaed and in the succes also
    }
// upload the recipe data to the api 
};
const init = function() {
    (0, _bookmarkViewJsDefault.default).addHandlerInit(controlBookMakrks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerbookmark(controllAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addrecipeViewDefault.default).addHandelUpload(controladdRecipeView);
};
init();

},{"regenerator-runtime/runtime":"dXNgZ","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarkView.js":"7YaI3","./views/addrecipeView":"7kuHF","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(module.exports);
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loeadRecipe", ()=>loeadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
// import { some } from 'core-js/core/array';
var _configJs = require("./config.js.js");
var _helpersJs = require("./helpers.js.js");
if (module.hot) module.hot.accept();
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        resultsPerPage: (0, _configJs.RESULTS_PER_PAGE),
        page: 1
    },
    bookmarks: []
};
const loeadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}/${id}?key=${(0, _configJs.API_KEY)}`);
        const { recipe  } = data.data;
        state.recipe = recipe;
        if (state.bookmarks.some((bookmark)=>bookmark.id === recipe.id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    // state.recipe=recipe
    // image_url: "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
    // ingredients: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // publisher: "My Baking Addiction"
    // servings: 4
    // source_url: "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
    // title: "Spicy Chicken and Pepper Jack Pizza"
    } catch (err) {
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        // console.log(query);
        // if(!query)return;
        state.search.query = query;
        const data = await (0, _helpersJs.getJSON)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.API_KEY)}`);
        state.search.results = data.data.recipes;
        state.search.page = 1;
    } catch (err) {
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    // page 1 => 0 -9
    // page 2 => 10 -19
    // start=(page-1)*10;
    // end=start+9;
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage, end = start + state.search.resultsPerPage;
    // slice doesnt slice the last one (end)
    // console.log(start,end);
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    // witch side effecy
    // newquatity=quantity*(newServings/Servings)
    state.recipe.ingredients.forEach((ing)=>ing.quantity *= newServings / state.recipe.servings);
    // console.log(state.recipe.ingredients);
    state.recipe.servings = newServings;
// console.log(state.recipe.servings);
};
const persistBookmarks = function() {
    // here
    localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // add bookmark
    state.bookmarks.push(recipe);
    // console.log(state.bookmarks);
    //mark currenct recips as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    // console.log(state);
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // console.log('delted');
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const uploadRecipe = async function(newrecipe) {
    // our api  data 
    /*
{publisher: 'The Pioneer Woman', ingredients: Array(13), source_url: 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/', image_url: 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg', title: 'Seafood Pasta', …}
bookmarked: false
cooking_time: 75
id: "5ed6604591c37cdc054bcc54"
image_url: "http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg"
ingredients: (13) [{{quantity: 2, unit: 'tbsps', description: 'butter'}}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
publisher: "The Pioneer Woman"
servings: 4
source_url: "http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/"
title: "Seafood Pasta"
}
*/ //our form data 
    /*
cookingTime: "23"
image: "TEST"
ingredient-1: "0.5,kg,Rice"
ingredient-2: "1,,Avocado"
ingredient-3: ",,salt"
ingredient-4: ""
ingredient-5: ""
ingredient-6: ""  
publisher: "TEST"
servings: "23"
sourceUrl: "TEST"
title: "TEST"
*/ try {
        const ingredients = Object.entries(newrecipe).filter(([el, data])=>el.startsWith("ingredient") && data !== "").map(([el, data])=>{
            // console.log(data);
            const ing = [quantity, unit, description] = data.split(",").map((el)=>el.trim());
            //  const ing=[quantity,unit,description]= data.replaceAll(' ','').split(",")
            if (ing.length !== 3) throw new Error("oops the ingredintes format is not rescepted please try again withFormat: 'Quantity,Unit,Description'");
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            publisher: newrecipe.publisher,
            source_url: newrecipe.sourceUrl,
            image_url: newrecipe.sourceUrl,
            title: newrecipe.title,
            bookmarked: true,
            // id: "5ed6604591c37cdc054bcc54 ",
            ingredients: ingredients,
            cooking_time: +newrecipe.cookingTime,
            servings: +newrecipe.servings
        };
        const responde = await (0, _helpersJs.sentJSON)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.API_KEY)}`, recipe);
        state.recipe = responde.data.recipe;
        console.log(state.recipe);
        addBookmark(state.recipe);
    // that will add some other elemnts to the state but that is not a prbolme at all
    // ([element,value])=>console.log(element,value)
    //map(entry=>console.log(entry))
    //data.replaceAll(' ','').split(","))
    // first make a table like this ingredients: (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    } catch (err) {
        console.error(err);
    // throw new Error('Opps the ingredetinds format is not recpeted please try again with this format Format:Quantity,Unit,Description')
    }
};
const init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();

},{"./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "TIMEOUTSECONDS", ()=>TIMEOUTSECONDS);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "AUTO_BOOKMARK_OWN_RECIPES", ()=>AUTO_BOOKMARK_OWN_RECIPES);
parcelHelpers.export(exports, "MODAL_TIMEOUT_SEC", ()=>MODAL_TIMEOUT_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const API_KEY = `8b1dfc78-d0c2-4665-a2ba-3bfb894677e5`;
const TIMEOUTSECONDS = 10;
const RESULTS_PER_PAGE = 10;
const AUTO_BOOKMARK_OWN_RECIPES = 1;
const MODAL_TIMEOUT_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sentJSON", ()=>sentJSON);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout((0, _configJs.TIMEOUTSECONDS))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`Opps ${data.message} , Error code ${res.status}`);
        return data;
    } catch (err) {
        // console.error(`${err} ⛔`);
        throw err;
    }
};
const sentJSON = async function(url, recipe) {
    try {
        const fetchPromoise = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        });
        const res = await Promise.race([
            fetchPromoise,
            timeout((0, _configJs.TIMEOUTSECONDS))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`Opps ${data.message} , Error code ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// console.log(Fraction);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _viewJs = require("./view.js.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// import {Fraction} from 'fractional';
var Fraction = require("fraction.js");
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElment = document.querySelector(".recipe");
    _errorMsg = "we could not find your recipete, Please try again  ";
    _simpleMsg = "";
    _gernerateMarkup() {
        return `
  <figure class="recipe__fig">
    <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>


  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
      <span class="recipe__info-text">minutes</span>

</div>

   
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>
  
      <div class="recipe__info-buttons">
        <button data-update-to="${this._data.servings - 1}" class="btn--tiny btn--update-servings btn--decrease-servings">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
          </svg>
        </button>
        <button   data-update-to="${this._data.servings + 1}" class="btn--tiny btn--update-servings btn--increase-servings">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
    <svg>
      <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
    </svg>
  </div>

  
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">

${this._data.ingredients.map(this._generateMarkupIngredient).join(" ")}

      
    </ul>
  </div>
  
  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.source_ur}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
 
  

  `;
    }
    addHandlerRender(handler) {
        // the publisher
        // const evnets=['load','hashchange']
        [
            "load",
            "hashchange"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElment.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            // console.log(btn);
            const updateTo = +btn.dataset.updateTo;
            // console.log(updateTo);
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerbookmark(handler) {
        this._parentElment.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            // console.log(this._data);
            // here
            handler();
        });
    }
    _generateMarkupIngredient(ing) {
        return ` <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : ""}
    </div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
    </li>
    `;
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"loVOp","./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","fraction.js":"k1REf"}],"loVOp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class view {
    // parnet class
    _data;
    /**
     * render the data to the html using a _gernerateMarkup() function with replacing all elments
     * @param {Object|object[]} data The data to be rendered (e.g reciped) 
     * @returns  undifinied
     */ render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        this._claer();
        this._parentElment.insertAdjacentHTML("afterbegin", this._gernerateMarkup());
    }
    /**
 * render the data to the html  using a _gernerateMarkup() function with replacing all modifed elments
 * @param {*} data 
 * @this {Object} view instance
 *@returns  undifinied
 */ update(data) {
        // if(!data || Array.isArray(data) &&  data.length===0)return this.renderError();
        // console.log(data);
        this._data = data;
        const newMarkup = this._gernerateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElments = Array.from(newDom.querySelectorAll("*"));
        const currnetElments = Array.from(this._parentElment.querySelectorAll("*"));
        newElments.forEach((newEl, i)=>{
            const curEl = currnetElments[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ``) curEl.textContent = newEl.textContent;
            // update attribues from current to new
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((atrr)=>curEl.setAttribute(atrr.name, atrr.value));
        });
    }
    renderSpiner() {
        this._claer();
        const markup = ` 
  <div class='spinner'>
  <svg>
  <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
  </svg>
  </div> 

`;
        this._parentElment.insertAdjacentElement("beforeend", markup.toDomElement());
    // console.log(markup);
    // parentEl.insertAdjacentHMTM
    // parentEl.innerHTML=+markup;
    }
    _claer() {
        this._parentElment.innerHTML = "";
    }
    renderError(message = `${this._errorMsg}`) {
        this._claer();
        const markup = ` 
  <div class="error">
  <div>
    <svg>
      <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
    </svg>
  </div>
  <p>${message}</p>
</div> 
`;
        this._parentElment.insertAdjacentElement("beforeend", markup.toDomElement());
    }
    renderMessage(message = `${this._simpleMsg}`) {
        this._claer();
        const markup = ` 
<div class="message">
<div>
  <svg>
    <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
  </svg>
</div>
<p>${message}</p>
</div>

`;
        this._parentElment.insertAdjacentElement("beforeend", markup.toDomElement());
    }
}
exports.default = view;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1REf":[function(require,module,exports) {
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <nominator>, 1 => <denominator> ]
 * [ n => <nominator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    "use strict";
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) throw Fraction["InvalidParameter"];
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) throw Fraction["DivisionByZero"];
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else factors[num] = (factors[num] || 0) + 1;
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) ;
        else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) throw Fraction["NonIntegerParameter"];
        } else switch(typeof p1){
            case "object":
                if ("d" in p1 && "n" in p1) {
                    n = p1["n"];
                    d = p1["d"];
                    if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                    n = p1[0];
                    if (1 in p1) d = p1[1];
                } else throw Fraction["InvalidParameter"];
                s = n * d;
                break;
            case "number":
                if (p1 < 0) {
                    s = p1;
                    p1 = -p1;
                }
                if (p1 % 1 === 0) n = p1;
                else if (p1 > 0) {
                    if (p1 >= 1) {
                        z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                        p1 /= z;
                    }
                    // Using Farey Sequences
                    // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                    while(B <= N && D <= N){
                        M = (A + C) / (B + D);
                        if (p1 === M) {
                            if (B + D <= N) {
                                n = A + C;
                                d = B + D;
                            } else if (D > B) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                            break;
                        } else {
                            if (p1 > M) {
                                A += C;
                                B += D;
                            } else {
                                C += A;
                                D += B;
                            }
                            if (B > N) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                        }
                    }
                    n *= z;
                } else if (isNaN(p1) || isNaN(p2)) d = n = NaN;
                break;
            case "string":
                B = p1.match(/\d+|./g);
                if (B === null) throw Fraction["InvalidParameter"];
                if (B[A] === "-") {
                    s = -1;
                    A++;
                } else if (B[A] === "+") A++;
                if (B.length === A + 1) w = assign(B[A++], s);
                else if (B[A + 1] === "." || B[A] === ".") {
                    if (B[A] !== ".") v = assign(B[A++], s);
                    A++;
                    // Check for decimal places
                    if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                        w = assign(B[A], s);
                        y = Math.pow(10, B[A].length);
                        A++;
                    }
                    // Check for repeating places
                    if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                        x = assign(B[A + 1], s);
                        z = Math.pow(10, B[A + 1].length) - 1;
                        A += 3;
                    }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                    w = assign(B[A], s);
                    y = assign(B[A + 2], 1);
                    A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                    v = assign(B[A], s);
                    w = assign(B[A + 2], s);
                    y = assign(B[A + 4], 1);
                    A += 5;
                }
                if (B.length <= A) {
                    d = y * z;
                    s = /* void */ n = x + d * v + z * w;
                    break;
                }
            default:
                throw Fraction["InvalidParameter"];
        }
        if (d === 0) throw Fraction["DivisionByZero"];
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1)if (e & 1) r = r * b % m;
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2);
        for(; d % 5 === 0; d /= 5);
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(true){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else return newFraction(P["s"] * P["n"], P["d"]);
    }
    Fraction["DivisionByZero"] = new Error("Division by Zero");
    Fraction["InvalidParameter"] = new Error("Invalid argument");
    Fraction["NonIntegerParameter"] = new Error("Parameters must be integer");
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this["s"] * this["n"], this["d"]);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], 1);
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) throw Fraction["DivisionByZero"];
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) return newFraction(0, 1);
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P["d"] === 1) {
                if (P["s"] < 0) return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
                else return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this["s"] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === "1") continue;
                if (k === "0") {
                    n = 0;
                    break;
                }
                N[k] *= P["n"];
                if (N[k] % P["d"] === 0) N[k] /= P["d"];
                else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === "1") continue;
                D[k] *= P["n"];
                if (D[k] % P["d"] === 0) D[k] /= P["d"];
                else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) return newFraction(d, n);
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return this;
            eps = eps || 0.001;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--)s = s["inverse"]()["add"](cont[k]);
                if (s["sub"](thisABS)["abs"]().valueOf() < eps) return s["mul"](this["s"]);
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ "valueOf": function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ "toFraction": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += "/";
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ "toLatex": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += "}{";
                str += d;
                str += "}";
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ "toContinued": function() {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) return res;
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1);
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ "toString": function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) return "NaN";
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this["s"] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else for(var i = dec; N && i--;){
                str += N / D | 0;
                N %= D;
                N *= 10;
            }
            return str;
        }
    };
    if (typeof define === "function" && define["amd"]) define([], function() {
        return Fraction;
    });
    else {
        Object.defineProperty(Fraction, "__esModule", {
            "value": true
        });
        Fraction["default"] = Fraction;
        Fraction["Fraction"] = Fraction;
        module["exports"] = Fraction;
    }
})(this);

},{}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector(".search");
    getQuery() {
        // console.log(this._parentEl.querySelector('.search__field').value);
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewVueJs = require("./previewVue.js.js");
var _previewVueJsDefault = parcelHelpers.interopDefault(_previewVueJs);
class ResultsView extends (0, _previewVueJsDefault.default) {
    _errorMsg = `we could not find your query , Please try again with another name `;
    _parentElment = document.querySelector(".results");
}
exports.default = new ResultsView();

},{"./previewVue.js":"9N3DA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9N3DA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class previewVue extends (0, _viewDefault.default) {
    _gernerateMarkup() {
        // console.log(el._data);
        return this._data.map(this._gernerateMarkupPreview).join(" ");
    }
    _gernerateMarkupPreview(el) {
        const id = window.location.hash.slice(1);
        // console.log("🚀 ~ file: resultsView.js ~ line 26 ~ ResultsView ~ _gernerateMarkupPreview ~ id", id)
        return `
     <li class="preview">
            <a class="preview__link ${id === el.id ? "preview__link--active" : ""}" href="#${el.id}">
              <figure class="preview__fig">
                 <img src="${el.image_url}" alt="${el.title}"/>  
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${el.title}</h4>
                <p class="preview__publisher">${el.publisher}</p>
            
              </div>
              <div class="preview__user-generated ${el.key ? "" : "hidden"}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
            </a>

          </li>
    `;
    }
}
exports.default = previewVue;

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _parentElment = document.querySelector(".pagination");
    _gernerateMarkup() {
        //SECNARIONS
        // _data contains modle.state.search objes
        // search
        // results
        // resultsPerPage
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // console.log("🚀 ~ file: paginationView.js ~ line 17 ~ PaginationView ~ _gernerateMarkup ~ numPages", numPages)
        const currentPage = this._data.page;
        // console.log("🚀 ~ file: paginationView.js ~ line 19 ~ PaginationView ~ _gernerateMarkup ~ currentPage", currentPage)
        //PAGE 1 and there are other pages
        if (currentPage === 1 && numPages > 1) return `   
     <button data-goto=" ${currentPage + 1}" class="btn--inline pagination__btn--next">
     <span>Page  ${currentPage + 1}</span>
     <svg class="search__icon">
       <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
     </svg>
   </button> 
    `;
        //other page
        if (currentPage < numPages) return `
       <button data-goto=" ${currentPage - 1}" class="btn--inline pagination__btn--prev">
       <svg class="search__icon">
         <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
       </svg>
       <span>Page ${currentPage - 1}</span>
     </button>

     <button data-goto=" ${currentPage + 1}" class="btn--inline pagination__btn--next">
     <span>Page  ${currentPage + 1}</span>
     <svg class="search__icon">
       <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
     </svg>
   </button> 
      `;
        // last page
        if (currentPage === numPages && numPages > 1) return `
     <button data-goto=" ${currentPage - 1}" class="btn--inline pagination__btn--prev">
     <svg class="search__icon">
       <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
     </svg>
     <span>Page ${currentPage - 1}</span>
   </button>
    `;
        //PAGE 1 and threre  are  not other pages
        return ``;
    }
    addHandlerClick(handler) {
        this._parentElment.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            // console.log("🚀 ~ file: paginationView.js ~ line 72 ~ PaginationView ~ this._parentElment.addEventListener ~ goToPage", goToPage)
            // console.log("🚀 ~ file: paginationView.js ~ line 71 ~ PaginationView ~ this._parentElment.addEventListener ~ btn", btn)
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewVueJs = require("./previewVue.js.js");
var _previewVueJsDefault = parcelHelpers.interopDefault(_previewVueJs);
class bookmarkView extends (0, _previewVueJsDefault.default) {
    _errorMsg = `No bookmarks yet ,Find it and bookmark it  `;
    _parentElment = document.querySelector(".bookmarks__list");
    addHandlerInit(handler) {
        window.addEventListener("load", handler);
    }
}
exports.default = new bookmarkView();

},{"./previewVue.js":"9N3DA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7kuHF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class addRecipeView extends (0, _viewDefault.default) {
    _parentElment = document.querySelector(".upload");
    _winodw = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnwOpen = document.querySelector(".nav__btn--add-recipe");
    _btnwClose = document.querySelector(".btn--close-modal");
    _simpleMsg = "Recipe was succefffully uploded ";
    _errorMsg = "opps , cannot upload because bad connection your recipe please retry again  ";
    constructor(){
        super();
        this._addHandelShowWindow();
        this._addHandelHideWindowWindow();
    }
    _gernerateMarkup() {
        return `
    <div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="pizza marocain" required name="title" type="text" />
    <label>URL</label>
    <input value="https://"  name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="https://"  name="image" type="text" />
    <label>Publisher</label>
    <input value="SOHAIB MANAH" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="23" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="23" required name="servings" type="number" />
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input
      value="0.5,kg,Rice"
      type="text"
      required
      name="ingredient-1"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 2</label>
    <input
      value="1,,Avocado"
      type="text"
      name="ingredient-2"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 3</label>
    <input
      value=",,salt"
      type="text"
      name="ingredient-3"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 4</label>
    <input
      type="text"
      name="ingredient-4"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 5</label>
    <input
      type="text"
      name="ingredient-5"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 6</label>
    <input
      type="text"
      name="ingredient-6"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="src/img/icons.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>
    `;
    }
    render() {
        this._claer();
        this._parentElment.insertAdjacentHTML("afterbegin", this._gernerateMarkup());
    }
    _showWindow() {
        this.render();
        this.togglerWindow();
    }
    _addHandelShowWindow() {
        this._btnwOpen.addEventListener("click", this._showWindow.bind(this));
    }
    addHandelUpload(handler) {
        this._parentElment.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        // console.log(this._parentElment);
        // _addHandelHideWindowWindow().bind(this);
        });
    }
    _addHandelHideWindowWindow() {
        this._btnwClose.addEventListener("click", this.togglerWindow.bind(this));
        this._overlay.addEventListener("click", this.togglerWindow.bind(this));
    }
    togglerWindow() {
        this._overlay.classList.toggle("hidden");
        this._winodw.classList.toggle("hidden");
    }
}
exports.default = new addRecipeView();

},{"./view":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire7f27")

//# sourceMappingURL=index.e37f48ea.js.map
