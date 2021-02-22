import React, {useState} from "react";
import CheckboxTree from 'react-checkbox-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faChevronRight, faChevronDown, faPlusSquare, faMinusSquare, faFolder, faFolderOpen, faFile } from '@fortawesome/fontawesome-free-solid'
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const filterTree = (filters, data) => {
  const filterNode = (collect, node) => {
    const children = (node.children || []).reduce(filterNode, []);

    if(filters.every(filter => filter(node)) || children.length > 0) {
      collect.push({
        ...node,
        children: children.length > 0 ? children : undefined
      })
    }

    return collect;
  };

  return data ? data.reduce(filterNode, []) : [];
};

const matchesText = (filterText) => (node) => node.label.toLocaleLowerCase().indexOf(filterText.toLowerCase()) > -1;

const Tree = ({data, rootNode, filterText, checkedItems, setCheckedItems}) => {

  const [expanded, setExpanded] = useState(['root']);

  const filteredData = filterTree([matchesText(filterText)], data);;

  return (<div>
    <div>
      <CheckboxTree
        nodes={[{children: filteredData, label: rootNode, value: 'root'}]}
        checked={checkedItems}
        expanded={expanded}
        onCheck={checked => setCheckedItems( checked )}
        onExpand={expanded => setExpanded( expanded )}
        icons={{
          check: <FontAwesomeIcon className="rct-node-icon rct-icon-check" icon="check-square" />,
          uncheck: <FontAwesomeIcon className="rct-node-icon rct-icon-uncheck" icon={['fas', 'square']} />,
          halfCheck: <FontAwesomeIcon className="rct-node-icon rct-icon-half-check" icon="check-square" />,
          expandClose: <FontAwesomeIcon className="rct-node-icon rct-icon-expand-close" icon="chevron-right" />,
          expandOpen: <FontAwesomeIcon className="rct-node-icon rct-icon-expand-open" icon="chevron-down" />,
          expandAll: <FontAwesomeIcon className="rct-node-icon rct-icon-expand-all" icon="plus-square" />,
          collapseAll: <FontAwesomeIcon className="rct-node-icon rct-icon-collapse-all" icon="minus-square" />,
          parentClose: <FontAwesomeIcon className="rct-node-icon rct-icon-parent-close" icon="folder" />,
          parentOpen: <FontAwesomeIcon className="rct-node-icon rct-icon-parent-open" icon="folder-open" />,
          leaf: <FontAwesomeIcon className="rct-node-icon rct-icon-leaf-close" icon="file" />
        }}
      />
    </div>
  </div>);
};

export default Tree;
