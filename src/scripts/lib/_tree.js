import { readData } from './_ajax';
import { nodeTemplate } from './_nodes';

export function createTree(that) {
  that.tree = $('<div class="tree"></div>');
  that.element.append(that.tree);
  if (that.isAjax) {
    readData(that.settings.ajax, that.nodes);
  }
}

// export function createLevel(parent, nodes) {
//   for (let node of nodes) {
//     try {
//       if (!Array.isArray(node)) throw new Error('node is not Array');
//       if (node.children.length > 0) {
//       } else {
//       }
//     } catch (e) {
//       console.error(e);
//     }
//   }
//   let template = nodeTemplate();
// }
