import { setTree } from './_tree';

export function readData(config, nodes, tree) {
  $.get(config.url, config.params, function (data) {
    nodes = config.callback ? config.callback(data) : data;
    setTree(nodes, tree);
  });
}
