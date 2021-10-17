export function nodeTemplate(item) {
  const template = $(
    '<div class="node">' +
      '<strong class="node__title">' +
      item.title +
      '</strong>' +
      '</div>'
  );
  if (item.text) {
    template
      .children('.node')
      .append('<p class="node__text">' + item.text + '</p>');
  }

  return template;
}
