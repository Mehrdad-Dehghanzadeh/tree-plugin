import { readData } from './_ajax';
import { nodeTemplate } from './_nodes';

let _tree;

export function createTree(that) {
  that.tree = $('<div class="tree"></div>');
  that.element.append(that.tree);
  _tree = that.tree;
  if (that.isAjax) {
    readData(that.settings.ajax, that.nodes);
  }
}

export function setTree(nodes) {
  try {
    if (!Array.isArray(nodes))
      throw new Error('node or nodeChild is not array');
    createRow(_tree, nodes);
  } catch (error) {
    throw new Error(error);
  }
}

function createRow(parent, nodes) {
  if (!Array.isArray(nodes)) throw new Error('node or node child is not array');
  const row = $('<div class="tree__row"></div>');
  parent.append(row);
  for (let node of nodes) {
    const nodeTemp = nodeTemplate(node);
    let columnTemplate = createColumn(nodeTemp, node.children);
    row.append(columnTemplate);

    if (node.children.length > 0) {
      createRow(columnTemplate, node.children);
    }
  }
}

function createColumn(nodeTemplate, children) {
  let length = !!children ? children.length : 0;
  const column = $('<div class="tree__column"></div>');
  if (length === 1) column.addClass('tree__column--single');
  column.append(nodeTemplate);

  return column;
}
