import React from 'react';
import Article from './Article';
const ListItem = (props) => {
    return(
        <div>
            {
              props.articles.map(article => <Article data={article} key={article.id} editArticle={props.editArticle} deleteArticle ={props.deleteArticle}/>)
            }

        </div>
    );
};
export default  ListItem ;
