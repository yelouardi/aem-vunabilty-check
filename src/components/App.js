import React from 'react';
import Form from './Form';
import ListItem from './ListItem';
import {connect} from 'react-redux';
class App extends React.Component{
    state = {
        articles: []
    };

    // addArticle = (article) => {
    //     let oldrticles=this.state.articles;
    //     article.id=Date.now();
    //     let newArticles=[...oldrticles, article];
    //     this.setState({articles:newArticles});
    // };
    addArticle = (article) => {
        this.props.addArticle(article);
    } ;

    render(){
        return(


            <div className="alert alert-info">
                <h3>List des courses </h3>
                < Form className="alert alert-info" formTitle=' Ajouter Article' addArticle={this.props.addArticle}/>
                < ListItem className="alert alert-warning"  articles={this.props.articles} editArticle ={this.props.editArticle} deleteArticle ={this.props.deleteArticle} />
                </div>

        );
    }
    
}

const addArticleActionCreator = (article) => {
    return {
        type : 'ADD_ARTICLE' ,
         payload: article
    }
};
const editArticleActionCreator = (article) => {
    return {
        type : 'EDIT_ARTICLE' ,
        payload: article
    }
};
const deleteArticleActionCreator = (article) => {
    return {
        type : 'DELETE_ARTICLE' ,
        payload: article
    }
}

const mapStateToProps= (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (article)  => {
            dispatch(addArticleActionCreator(article));
        },
        editArticle: (article)  => {
            dispatch(editArticleActionCreator(article));
        },
        
        deleteArticle: (article)  => {
            dispatch(deleteArticleActionCreator(article));
        }
    }
}
//export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);