"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Class representing an API interface
 * @property {string} appKey
 * @property {string} appSecret
 * @property {Venture} countryCode
 * @property {string=} accessToken
 * @property {string} gateway
 * @property {LazadaClient} client
 */


var _LazadaClient = require("../LazadaClient");

var _LazadaClient2 = _interopRequireDefault(_LazadaClient);

var _Common = require("../types/Common");

var _constants = require("../LazadaClient/constants");

var _flowRuntime = require("flow-runtime");

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Venture = _flowRuntime2.default.tdz(function () {
  return _Common.Venture;
});

var LazadaAPI = function () {

  /**
   * LazadaAPI constructor
   * @param {string} appKey
   * @param {string} appSecret
   * @param {Venture} countryCode
   * @param {string=} accessToken
   */
  function LazadaAPI(appKey, appSecret, countryCode, accessToken) {
    _classCallCheck(this, LazadaAPI);

    var _appKeyType = _flowRuntime2.default.string();

    var _appSecretType = _flowRuntime2.default.string();

    var _countryCodeType = _flowRuntime2.default.ref(Venture);

    var _accessTokenType = _flowRuntime2.default.nullable(_flowRuntime2.default.string());

    _flowRuntime2.default.param("appKey", _appKeyType).assert(appKey);

    _flowRuntime2.default.param("appSecret", _appSecretType).assert(appSecret);

    _flowRuntime2.default.param("countryCode", _countryCodeType).assert(countryCode);

    _flowRuntime2.default.param("accessToken", _accessTokenType).assert(accessToken);

    if (!appKey) {
      throw new Error("Missing appKey");
    } else {
      this._appKey = appKey;
    }
    if (!appSecret) {
      throw new Error("Missing appSecret");
    } else {
      this._appSecret = appSecret;
    }
    if (!countryCode) {
      throw new Error("Missing countryCode");
    } else {
      this._countryCode = countryCode;
    }

    switch (countryCode) {
      case _constants.VENTURE.NEPAL:
        this._gateway = _constants.GATEWAY.NEPAL;
        break;
      case _constants.VENTURE.SINGAPORE:
        this._gateway = _constants.GATEWAY.SINGAPORE;
        break;
      case _constants.VENTURE.THAILAND:
        this._gateway = _constants.GATEWAY.THAILAND;
        break;
      case _constants.VENTURE.MALAYSIA:
        this._gateway = _constants.GATEWAY.MALAYSIA;
        break;
      case _constants.VENTURE.VIETNAM:
        this._gateway = _constants.GATEWAY.VIETNAM;
        break;
      case _constants.VENTURE.PHILIPPINES:
        this._gateway = _constants.GATEWAY.PHILIPPINES;
        break;
      case _constants.VENTURE.INDONESIA:
        this._gateway = _constants.GATEWAY.INDONESIA;
        break;
      default:
        throw new Error("countryCode not supported");
      // break
    }
    this._client = _LazadaClient2.default; // new LazadaClient(appKey, appSecret, countryCode)
    this.accessToken = accessToken;
  }

  /**
   * Get instance's app key
   * @return {string}
   */


  _createClass(LazadaAPI, [{
    key: "appKey",
    get: function get() {
      return this._appKey;
    }

    /**
     * Get instance's app secret
     * @return {string}
     */

  }, {
    key: "appSecret",
    get: function get() {
      return this._appSecret;
    }

    /**
     * Get instance's access token
     * @return {string}
     */

  }, {
    key: "accessToken",
    get: function get() {
      return this._accessToken;
    }

    /**
     * Set instance's and client's access token (if given)
     * @param {string} token
     * @public
     * @return {void}
     */
    ,
    set: function set(token) {
      var _tokenType = _flowRuntime2.default.nullable(_flowRuntime2.default.string());

      _flowRuntime2.default.param("token", _tokenType).assert(token);

      if (token) {
        this._accessToken = token;
        this.client.accessToken = token;
      }
    }

    /**
     * Get instance's api location specific gateway
     * @return {string}
     */

  }, {
    key: "gateway",
    get: function get() {
      return this._gateway;
    }

    /**
     * Set instance's api location specific gateway
     * @param {string} url
     * @private
     * @return {void}
     */
    ,
    set: function set(url) {
      var _urlType = _flowRuntime2.default.string();

      _flowRuntime2.default.param("url", _urlType).assert(url);

      if (url) {
        this._gateway = url;
      }
    }

    /**
     * Get LazadaClient object
     * @return {LazadaClient}
     */

  }, {
    key: "client",
    get: function get() {
      return this._client;
    }
  }]);

  return LazadaAPI;
}();

module.exports = LazadaAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MYXphZGFBUEkvaW5kZXguanMiXSwibmFtZXMiOlsiTGF6YWRhQVBJIiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwiY291bnRyeUNvZGUiLCJhY2Nlc3NUb2tlbiIsIkVycm9yIiwiX2FwcEtleSIsIl9hcHBTZWNyZXQiLCJfY291bnRyeUNvZGUiLCJWRU5UVVJFIiwiTkVQQUwiLCJfZ2F0ZXdheSIsIkdBVEVXQVkiLCJTSU5HQVBPUkUiLCJUSEFJTEFORCIsIk1BTEFZU0lBIiwiVklFVE5BTSIsIlBISUxJUFBJTkVTIiwiSU5ET05FU0lBIiwiX2NsaWVudCIsIkxhemFkYUNsaWVudCIsIl9hY2Nlc3NUb2tlbiIsInRva2VuIiwiY2xpZW50IiwidXJsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFKQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQVdNQSxTOztBQVFKOzs7Ozs7O0FBT0EscUJBQ0VDLE1BREYsRUFFRUMsU0FGRixFQUdFQyxXQUhGLEVBSUVDLFdBSkYsRUFLRTtBQUFBOztBQUFBLHNCQUpNLDhCQUlOOztBQUFBLHlCQUhTLDhCQUdUOztBQUFBLDJCQUZXLGtDQUVYOztBQUFBLDJCQURXLCtCQUFHLDhCQUFILENBQ1g7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ0EsUUFBSSxDQUFDSCxNQUFMLEVBQWE7QUFDWCxZQUFNLElBQUlJLEtBQUosQ0FBVSxnQkFBVixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0MsT0FBTCxHQUFlTCxNQUFmO0FBQ0Q7QUFDRCxRQUFJLENBQUNDLFNBQUwsRUFBZ0I7QUFDZCxZQUFNLElBQUlHLEtBQUosQ0FBVSxtQkFBVixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0UsVUFBTCxHQUFrQkwsU0FBbEI7QUFDRDtBQUNELFFBQUksQ0FBQ0MsV0FBTCxFQUFrQjtBQUNoQixZQUFNLElBQUlFLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0csWUFBTCxHQUFvQkwsV0FBcEI7QUFDRDs7QUFFRCxZQUFRQSxXQUFSO0FBQ0UsV0FBS00sbUJBQVFDLEtBQWI7QUFDRSxhQUFLQyxRQUFMLEdBQWdCQyxtQkFBUUYsS0FBeEI7QUFDQTtBQUNGLFdBQUtELG1CQUFRSSxTQUFiO0FBQ0UsYUFBS0YsUUFBTCxHQUFnQkMsbUJBQVFDLFNBQXhCO0FBQ0E7QUFDRixXQUFLSixtQkFBUUssUUFBYjtBQUNFLGFBQUtILFFBQUwsR0FBZ0JDLG1CQUFRRSxRQUF4QjtBQUNBO0FBQ0YsV0FBS0wsbUJBQVFNLFFBQWI7QUFDRSxhQUFLSixRQUFMLEdBQWdCQyxtQkFBUUcsUUFBeEI7QUFDQTtBQUNGLFdBQUtOLG1CQUFRTyxPQUFiO0FBQ0UsYUFBS0wsUUFBTCxHQUFnQkMsbUJBQVFJLE9BQXhCO0FBQ0E7QUFDRixXQUFLUCxtQkFBUVEsV0FBYjtBQUNFLGFBQUtOLFFBQUwsR0FBZ0JDLG1CQUFRSyxXQUF4QjtBQUNBO0FBQ0YsV0FBS1IsbUJBQVFTLFNBQWI7QUFDRSxhQUFLUCxRQUFMLEdBQWdCQyxtQkFBUU0sU0FBeEI7QUFDQTtBQUNGO0FBQ0UsY0FBTSxJQUFJYixLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNGO0FBeEJGO0FBMEJBLFNBQUtjLE9BQUwsR0FBZUMsc0JBQWYsQ0EzQ0EsQ0EyQzZCO0FBQzdCLFNBQUtoQixXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOztBQUVEOzs7Ozs7Ozt3QkFJYTtBQUNYLGFBQU8sS0FBS0UsT0FBWjtBQUNEOztBQUVEOzs7Ozs7O3dCQUlnQjtBQUNkLGFBQU8sS0FBS0MsVUFBWjtBQUNEOztBQUVEOzs7Ozs7O3dCQUlrQjtBQUNoQixhQUFPLEtBQUtjLFlBQVo7QUFDRDs7QUFFRDs7Ozs7OztzQkFNZ0JDLEssRUFBZ0I7QUFBQSx1QkFBWCwrQkFBRyw4QkFBSCxDQUFXOztBQUFBOztBQUM5QixVQUFJQSxLQUFKLEVBQVc7QUFDVCxhQUFLRCxZQUFMLEdBQW9CQyxLQUFwQjtBQUNBLGFBQUtDLE1BQUwsQ0FBWW5CLFdBQVosR0FBMEJrQixLQUExQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7d0JBSWM7QUFDWixhQUFPLEtBQUtYLFFBQVo7QUFDRDs7QUFFRDs7Ozs7OztzQkFNWWEsRyxFQUFhO0FBQUEscUJBQVYsOEJBQVU7O0FBQUE7O0FBQ3ZCLFVBQUlBLEdBQUosRUFBUztBQUNQLGFBQUtiLFFBQUwsR0FBZ0JhLEdBQWhCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt3QkFJYTtBQUNYLGFBQU8sS0FBS0wsT0FBWjtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjFCLFNBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGF6YWRhQ2xpZW50IGZyb20gXCJzcmMvTGF6YWRhQ2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IFZlbnR1cmUgfSBmcm9tIFwic3JjL3R5cGVzL0NvbW1vblwiO1xuaW1wb3J0IHsgVkVOVFVSRSwgR0FURVdBWSB9IGZyb20gXCJzcmMvTGF6YWRhQ2xpZW50L2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhbiBBUEkgaW50ZXJmYWNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYXBwS2V5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gYXBwU2VjcmV0XG4gKiBAcHJvcGVydHkge1ZlbnR1cmV9IGNvdW50cnlDb2RlXG4gKiBAcHJvcGVydHkge3N0cmluZz19IGFjY2Vzc1Rva2VuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZ2F0ZXdheVxuICogQHByb3BlcnR5IHtMYXphZGFDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBMYXphZGFBUEkge1xuICBfYXBwS2V5OiBzdHJpbmc7XG4gIF9hcHBTZWNyZXQ6IHN0cmluZztcbiAgX2NvdW50cnlDb2RlOiBWZW50dXJlO1xuICBfYWNjZXNzVG9rZW46ID9zdHJpbmc7XG4gIF9nYXRld2F5OiBzdHJpbmc7XG4gIF9jbGllbnQ6IGFueTtcblxuICAvKipcbiAgICogTGF6YWRhQVBJIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBLZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcFNlY3JldFxuICAgKiBAcGFyYW0ge1ZlbnR1cmV9IGNvdW50cnlDb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gYWNjZXNzVG9rZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcEtleTogc3RyaW5nLFxuICAgIGFwcFNlY3JldDogc3RyaW5nLFxuICAgIGNvdW50cnlDb2RlOiBWZW50dXJlLFxuICAgIGFjY2Vzc1Rva2VuOiA/c3RyaW5nXG4gICkge1xuICAgIGlmICghYXBwS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFwcEtleVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXBwS2V5ID0gYXBwS2V5O1xuICAgIH1cbiAgICBpZiAoIWFwcFNlY3JldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhcHBTZWNyZXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcFNlY3JldCA9IGFwcFNlY3JldDtcbiAgICB9XG4gICAgaWYgKCFjb3VudHJ5Q29kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBjb3VudHJ5Q29kZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY291bnRyeUNvZGUgPSBjb3VudHJ5Q29kZTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvdW50cnlDb2RlKSB7XG4gICAgICBjYXNlIFZFTlRVUkUuTkVQQUw6XG4gICAgICAgIHRoaXMuX2dhdGV3YXkgPSBHQVRFV0FZLk5FUEFMO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVOVFVSRS5TSU5HQVBPUkU6XG4gICAgICAgIHRoaXMuX2dhdGV3YXkgPSBHQVRFV0FZLlNJTkdBUE9SRTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZFTlRVUkUuVEhBSUxBTkQ6XG4gICAgICAgIHRoaXMuX2dhdGV3YXkgPSBHQVRFV0FZLlRIQUlMQU5EO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVkVOVFVSRS5NQUxBWVNJQTpcbiAgICAgICAgdGhpcy5fZ2F0ZXdheSA9IEdBVEVXQVkuTUFMQVlTSUE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRU5UVVJFLlZJRVROQU06XG4gICAgICAgIHRoaXMuX2dhdGV3YXkgPSBHQVRFV0FZLlZJRVROQU07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBWRU5UVVJFLlBISUxJUFBJTkVTOlxuICAgICAgICB0aGlzLl9nYXRld2F5ID0gR0FURVdBWS5QSElMSVBQSU5FUztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFZFTlRVUkUuSU5ET05FU0lBOlxuICAgICAgICB0aGlzLl9nYXRld2F5ID0gR0FURVdBWS5JTkRPTkVTSUE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY291bnRyeUNvZGUgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgIC8vIGJyZWFrXG4gICAgfVxuICAgIHRoaXMuX2NsaWVudCA9IExhemFkYUNsaWVudDsgLy8gbmV3IExhemFkYUNsaWVudChhcHBLZXksIGFwcFNlY3JldCwgY291bnRyeUNvZGUpXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGFwcCBrZXlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGFwcEtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGFwcCBzZWNyZXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGFwcFNlY3JldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwU2VjcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnN0YW5jZSdzIGFjY2VzcyB0b2tlblxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgYWNjZXNzVG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbnN0YW5jZSdzIGFuZCBjbGllbnQncyBhY2Nlc3MgdG9rZW4gKGlmIGdpdmVuKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW5cbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0IGFjY2Vzc1Rva2VuKHRva2VuOiA/c3RyaW5nKSB7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLl9hY2Nlc3NUb2tlbiA9IHRva2VuO1xuICAgICAgdGhpcy5jbGllbnQuYWNjZXNzVG9rZW4gPSB0b2tlbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGluc3RhbmNlJ3MgYXBpIGxvY2F0aW9uIHNwZWNpZmljIGdhdGV3YXlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGdhdGV3YXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhdGV3YXk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGluc3RhbmNlJ3MgYXBpIGxvY2F0aW9uIHNwZWNpZmljIGdhdGV3YXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0IGdhdGV3YXkodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLl9nYXRld2F5ID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgTGF6YWRhQ2xpZW50IG9iamVjdFxuICAgKiBAcmV0dXJuIHtMYXphZGFDbGllbnR9XG4gICAqL1xuICBnZXQgY2xpZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXphZGFBUEk7XG4iXX0=