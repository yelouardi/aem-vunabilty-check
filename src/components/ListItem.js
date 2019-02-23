import React from 'react';
import ItemPath from './ItemPath';

function ListItem(props) {
    return (
      <div>
        {props.items.map(c => <ItemPath path={c.path} />)}
       </div> 
    ); 
  } 
  
  export default ListItem;
