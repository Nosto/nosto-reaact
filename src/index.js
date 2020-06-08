"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.nostojs = cb => (window.nostojs.q = window.nostojs.q || []).push(cb);
window.nostojs(api => api.setAutoLoad(false));
var Product_1 = require("./components/Product");
Object.defineProperty(exports, "NostoProduct", { enumerable: true, get: function () { return Product_1.default; } });
var Category_1 = require("./components/Category");
Object.defineProperty(exports, "NostoCategory", { enumerable: true, get: function () { return Category_1.default; } });
var Search_1 = require("./components/Search");
Object.defineProperty(exports, "NostoSearch", { enumerable: true, get: function () { return Search_1.default; } });
var Order_1 = require("./components/Order");
Object.defineProperty(exports, "NostoOrder", { enumerable: true, get: function () { return Order_1.default; } });
var Home_1 = require("./components/Home");
Object.defineProperty(exports, "NostoHome", { enumerable: true, get: function () { return Home_1.default; } });
var Placement_1 = require("./components/Placement");
Object.defineProperty(exports, "NostoPlacement", { enumerable: true, get: function () { return Placement_1.default; } });
var Provider_1 = require("./components/Provider");
Object.defineProperty(exports, "NostoProvider", { enumerable: true, get: function () { return Provider_1.default; } });
var Session_1 = require("./components/Session");
Object.defineProperty(exports, "NostoSession", { enumerable: true, get: function () { return Session_1.default; } });
//# sourceMappingURL=index.js.map