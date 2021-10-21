import { createTree } from './lib/_tree';

(function ($) {
  let pluginName = 'tree';
  let defaults = {
    treeItems: [],
    ajax: null,
    direction: 'column',
  };

  const Tree = function (element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this.init();
  };

  $.extend(Tree.prototype, {
    init: function () {
      this.isAjax = !!this.settings.ajax;
      createTree(this);
    },
  });

  $.fn[pluginName] = function (options) {
    return $(this).each(function () {
      let attrName = 'plugin_' + 'tree';
      let instance = $.data(this, attrName);
      let optionsData = $(this).data(attrName);

      if (!instance) {
        if (options === undefined && optionsData) {
          $.data(this, attrName, new Tree($(this), optionsData));
        } else if (options === undefined || typeof options === 'object') {
          $.data(this, attrName, new Tree($(this), options));
        } else {
          $.error("method '" + options + "' not attached.");
        }
      } else {
        if (instance[options]) {
          instance[options].apply(instance);
        } else if (typeof options === 'object') {
          instance.settings = $.extend({}, instance.settings, options);
        } else if (!options) {
        } else {
          $.error("The method '" + options + "' not exist.");
        }
      }
    });
  };

  $[pluginName] = Tree;
})($);

// execute plugin for instance
$('[data-plugin_tree]').each(function () {
  $(this).tree();
});
