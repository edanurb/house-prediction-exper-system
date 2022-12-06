import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
// import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from "@mui/material/styles";

import  TreeItem ,{ treeItemClasses } from "@mui/lab/TreeItem";

// type StyledTreeItemProps = {
//   rootNode?: boolean;
// };

const StyledTreeItem = styled(TreeItem)(() => {
  const borderColor = "gray";

  return {
    position: "relative",
    "&:before": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      width: 32,
      left: -16,
      top: 12,
      borderBottom:
        // only display if the TreeItem is not root node
         `1px dashed ${borderColor}`
    },

    [`& .${treeItemClasses.group}`]: {
      marginLeft: 16,
      paddingLeft: 18,
      borderLeft: `1px dashed ${borderColor}`
    }
  };
});

export default function TreeViewComponent(props) {

    const renderTree = (nodes) => {
        const element=<div>
                        <div>{nodes.rule}</div>
                        {nodes.result &&  <div>{ "Result: " + nodes.result}</div>}
                      </div>
        return (
        <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={element}>
            {Array.isArray(nodes.child)
            ? nodes.child.map((node) => renderTree(node))
            : null}
        </StyledTreeItem>
        )};
  
       
    return (
        <div>
           
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                
                onNodeSelect={props.handleNodeSelect}
                
                aria-label="rich object"
            >
              {props.data != {}  ? renderTree(props.data) : <p> EMPTY TREE </p>}
             
                
            </TreeView>
      </div>
    );
   
}
