import { setTree } from './_tree';

export function readData(config, nodes, tree) {
  $.get(config.url, config.params)
    .done(function (data) {
      nodes = config.callback ? config.callback(data) : data;
      setTree(nodes, tree);
    })
    .fail(function (e) {
      throw new Error(e);
    });
}
