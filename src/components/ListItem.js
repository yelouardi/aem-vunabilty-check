import React from 'react';
import ItemPath from './ItemPath';

function ListItem(props) {
    return (
      <div>
        {props.items.map(item => <ItemPath path={item.path} />)}
       </div> 
    ); 
  } 
  
  export default ListItem;
