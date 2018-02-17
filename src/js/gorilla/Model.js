import _ from 'lodash';

function Model (options) {
  this.data = options.data;

  _.extend(this, _.omit(options, 'data'));
}

Model.prototype.find = function (predicate) {
  return _.find(this.data, predicate);
};

Model.prototype.filter = function (predicate) {
  return _.filter(this.data, predicate);
};

Model.prototype.forEach = function (iteratee) {
  _.forEach(this.data, iteratee);
};

Model.prototype.includes = function (value) {
  return _.includes(this.data, value);
};

Model.prototype.map = function (iteratee) {
  return _.map(this.data, iteratee);
};

Model.prototype.orderBy = function (iteratee) {
  return _.orderBy(this.data, iteratee);
};

Model.prototype.reduce = function (iteratee) {
  return _.reduce(this.data, iteratee);
};

Model.prototype.reject = function (predicate) {
  return _.reject(this.data, predicate);
};

Model.prototype.size = function () {
  return _.size(this.data);
};

Model.prototype.sortBy = function (iteratee) {
  return _.sortBy(this.data, iteratee);
};

export default Model;
