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

      if (!options.parent || !options.model) {
        throw new Error('[컴포넌트 생성 오류] `parent`와 `model`이 필요합니다.');
      }

      view = new View({
        template,
        model: options.model,
        parent: options.parent
      });

      return this;
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
        view.registerEvent(ev, events[ev]);
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
