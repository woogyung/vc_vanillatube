let uniqId = 0;

const View = function View (options) {
  uniqId++;

  if (!options.el || !options.el instanceof Element) {
    throw new Error('Please include `el` option to initialize gorilla view.');
  }

  this.id = uniqId;
  this.el = options.el;

  // preinit, initialize, set up model, and etc
};

View.prototype.initialize = function () {

};

View.prototype.beforeRender = function () {

};

View.prototype.render = function () {

};

View.prototype.afterRender = function () {

};

View.prototype.beforeDestroy = function () {

};

View.prototype.destroy = function () {

};

View.prototype.afterDestroy = function () {

};

export default View;
