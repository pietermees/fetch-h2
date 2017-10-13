'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const body_1 = require("./lib/body");
exports.Body = body_1.Body;
exports.JsonBody = body_1.JsonBody;
const headers_1 = require("./lib/headers");
exports.Headers = headers_1.Headers;
const request_1 = require("./lib/request");
exports.Request = request_1.Request;
const response_1 = require("./lib/response");
exports.Response = response_1.Response;
const core_1 = require("./lib/core");
exports.AbortError = core_1.AbortError;
const context_1 = require("./lib/context");
const defaultContext = new context_1.Context();
const fetch = defaultContext.fetch.bind(defaultContext);
exports.fetch = fetch;
const disconnect = defaultContext.disconnect.bind(defaultContext);
exports.disconnect = disconnect;
const disconnectAll = defaultContext.disconnectAll.bind(defaultContext);
exports.disconnectAll = disconnectAll;
function context(opts) {
    return new context_1.Context(opts);
}
exports.context = context;
//# sourceMappingURL=index.js.map