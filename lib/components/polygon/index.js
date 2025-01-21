"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = Polygon;
var react_1 = __importDefault(require("react"));
function Polygon(_a) {
    var sides = _a.sides, size = _a.size, _b = _a.fill, fill = _b === void 0 ? "#3498db" : _b, _c = _a.stroke, stroke = _c === void 0 ? "#2c3e50" : _c, _d = _a.strokeWidth, strokeWidth = _d === void 0 ? 2 : _d;
    if (sides < 3) {
        return react_1.default.createElement("p", null, "A polygon must have at least 3 sides.");
    }
    var points = Array.from({ length: sides }, function (_, i) {
        var angle = (2 * Math.PI * i) / sides; // Angle for each vertex
        var x = size + size * Math.cos(angle);
        var y = size + size * Math.sin(angle);
        return "".concat(x, ",").concat(y);
    }).join(" ");
    return (react_1.default.createElement("svg", { width: size * 2, height: size * 2, viewBox: "0 0 ".concat(size * 2, " ").concat(size * 2), xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("polygon", { points: points, fill: fill, stroke: stroke, strokeWidth: strokeWidth, transform: "rotate(".concat(90, " ").concat(size, " ").concat(size, ")") })));
}
;
