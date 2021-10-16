export function readData(config, nodes) {
  $.get(config.url, config.params, function (data) {
    nodes = config.callback ? config.callback(data) : data;
  });
}
