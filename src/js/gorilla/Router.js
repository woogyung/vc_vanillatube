import _ from 'lodash';

function createRouteMap (routes) {
  return _.mapValues(routes, function (r) {
    if (!r.path) {
      throw new Error('[Router 생성자 함수] 설정하려는 경로의 `path`를 입력해주세요.');
    }

    return _.extend(r, {
      handlers: []
    });
  });
}

function Router (config) {
  this.routeMap = createRouteMap(config);
}

Router.prototype.validateRoute = function (routeName) {
  if (!this.routeMap[routeName]) {
    throw new Error('[Router.prototype.validateRoute] 설정되지 않은 경로입니다.');
  }
};

Router.prototype.on = function (routeName, handler) {
  this.validateRoute(routeName);
  this.routeMap[routeName].handlers.push(handler);
};

Router.prototype.set = function (routeName, data) {
  this.validateRoute(routeName);

  if (!data && typeof this.routeMap[routeName].path === 'function') {
    throw new Error('[Router.prototype.set] 변경하시려는 경로의 파라미터값이 필요합니다.');
  }

  window.history.pushState({
    name: routeName
  }, routeName, '/#' + this.routeMap[routeName].path(data));

  // 3. Calls the subscribers
  this.routeMap[routeName].handlers.forEach(function (cb) {
    cb(data);
  });
};

export default Router;
