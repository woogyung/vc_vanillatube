import domify from 'domify';
import _ from 'lodash';

var elements = [];
var elementId = 0;

function View ({ template, model, parent }) {
  this.template = _.template(template);
  this.context = model;
  this.parent = parent;
  this.elementId = null;
}

View.prototype.updateContext = function (context) {
  _.assign(this.context, context);
};

View.prototype.registerEvent = function (eventName, cb) {
  const el = elements[this.elementId];
  el.addEventListener(eventName, cb);
};

View.prototype.render = function () {
  if (this.elementId === null) {
    this.elementId = elementId;
    elementId++;
  } else {
    this.parent.removeChild(elements[this.elementId]);
  }

  elements[this.elementId] = domify(this.template(this.context));

  this.parent.appendChild(elements[this.elementId]);

  return elements[this.elementId];
};

View.prototype.destroy = function () {
  if (!elements[this.elementId]) {
    throw new Error('[View 오류] 지우고자 하는 엘레먼트가 존재하지 않습니다.');
  }

  this.parent.removeChild(elements[this.elementId]);
  elements[this.elementId] = null;
};

export default View;
