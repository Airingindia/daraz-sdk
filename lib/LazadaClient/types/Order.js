'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStatus = undefined;

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderStatus = exports.OrderStatus = _flowRuntime2.default.type('OrderStatus', _flowRuntime2.default.union(_flowRuntime2.default.string('unpaid'), _flowRuntime2.default.string('pending'), _flowRuntime2.default.string('packed'), _flowRuntime2.default.string('canceled'), _flowRuntime2.default.string('ready_to_ship'), _flowRuntime2.default.string('delivered'), _flowRuntime2.default.string('lost_by_3pl'), _flowRuntime2.default.string('damaged_by_3pl'), _flowRuntime2.default.string('failed_delivery'), _flowRuntime2.default.string('returned'), _flowRuntime2.default.string('shipped'), _flowRuntime2.default.string('failed')));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9MYXphZGFDbGllbnQvdHlwZXMvT3JkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdRLGtGQUNQLDRCQUFFLHNDQUFGLEVBQ0UsdUNBREYsRUFFRSxzQ0FGRixFQUdFLHdDQUhGLEVBSUUsNkNBSkYsRUFLRSx5Q0FMRixFQU1FLDJDQU5GLEVBT0UsOENBUEYsRUFRRSwrQ0FSRixFQVNFLHdDQVRGLEVBVUUsdUNBVkYsRUFXRSxzQ0FYRixDQURPIiwiZmlsZSI6Ik9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmxvd1xuICovXG4gZXhwb3J0IHR5cGUgT3JkZXJTdGF0dXMgPVxuIHwgJ3VucGFpZCdcbiB8ICdwZW5kaW5nJ1xuIHwgJ3BhY2tlZCdcbiB8ICdjYW5jZWxlZCdcbiB8ICdyZWFkeV90b19zaGlwJ1xuIHwgJ2RlbGl2ZXJlZCdcbiB8ICdsb3N0X2J5XzNwbCcgXG4gfCAnZGFtYWdlZF9ieV8zcGwnIFxuIHwgJ2ZhaWxlZF9kZWxpdmVyeScgXG4gfCAncmV0dXJuZWQnXG4gfCAnc2hpcHBlZCdcbiB8ICdmYWlsZWQnIl19