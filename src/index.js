import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider }  from 'react-redux';
import App from './components/App';

const articlesReducer =(state = [] , action) => {
    switch(action.type){
        case 'ADD_ARTICLE':
            console.log('ADD_ARTICLE');
            console.log('action',action);
            action.payload.id=Date.now();
            const newState = [...state,action.payload];
            return newState;
         case 'EDIT_ARTICLE':
            console.log('EDIT_ARTICLE');
            console.log('action',action);
            console.log(action.payload.id);
            return state.map(article => {
                    return article.id !== action.payload.id ? article : action.payload; 

            });
         case 'DELETE_ARTICLE':
            console.log('DELETE_ARTICLE');
            console.log('action',action);
            console.log(action.payload.id);

            console.log('BEFOR : '+state.length);

            let newStat=state.filter(article => article.id !== action.payload.id);
            console.log('AFTER : '+newStat.length);

            return newStat;
        default: 
            return state;
    }

};
const store = createStore(combineReducers({articles : articlesReducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store=store;
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));