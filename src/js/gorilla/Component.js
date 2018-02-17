import _ from 'lodash';
import View from './View';

function validator (data, title) {
  if (!data) {
    throw new Error(`${title}가 존재하지 않습니다.`);
  }
}

function Component (template) {
  var view = null;

  var component = {
    create: function (options) {
      if (view) {
        return this;
      }

      if (!options.element || !options.model) {
        throw new Error('[컴포넌트 생성 오류] `element`와 `model`이 필요합니다.');
      }

      view = new View({
        template,
        model: options.model,
        element: options.element
      });

      _.extend(this, _.omit(options, [ 'element', 'model' ]));

      return this;
    },
    find: function (selector) {
      validator(view, '해당 view');
      return view.find(selector);
    },
    findAll: function (selector) {
      validator(view, '해당 view');
      return view.findAll(selector);
    },
    render: function () {
      validator(view, '해당 view');
      return view.render();
    },
    destroy: function () {
      validator(view, '해당 view');
      view.destroy();
    },
    events: function (events) {
      for (var ev in events) {
        if (typeof events[ev] === 'function') {
          view.registerEvent(ev, events[ev]);
        } else {
          view.registerEvent(ev, events[ev].handler, events[ev].selector);
        }
      }
    }
  };

  Object.defineProperties(component, {
    model: {
      set: function (model) {
        validator(view, '해당 view');
        view.updateContext(model);
      },
      enumerable: true
    }
  });

  return component;
}

export default Component;
