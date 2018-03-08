import React from 'react';
import '../style.css';
class Form extends React.Component {
    state = {
        name: '',
        quantity: 0
    };

    handelSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addArticle(this.state);
        this.setState({name: '',quantity: 0});

    };
    render(){
        return(
            <div >
                <h3>{this.props.formTitle}</h3>
                <form  onSubmit={this.handelSubmit}>
                    <input type="number" className="quantity" placeholder="quantité" 
                    value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})}/>
                    <input type="text" placeholder="article" 
                    value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
                    <button type="subit" className="btn btn-primary">Ajouter</button>
                </form>
             </div>
        );
    }
    
}

export default Form ;