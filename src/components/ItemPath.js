import React from 'react';
import '../style.css';

class ItemPath extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code : 0,
            path : props.path
        };
    }

     render() {
        const url = 'https://www.airbus.com'+this.state.path;

        const myInit = {
            method: 'HEAD',
            mode: 'no-cors',
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        };

        const myRequest = new Request(url, myInit);
        let currentComponent = this;
        fetch(myRequest)
            .then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response);
                    currentComponent.setState({code:response.status});
                    return;
                }
                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

        if(this.state.code !==0 ){
            return (
                <div className="alert alert-danger">
                <p className="badge badge-danger">Danger : {this.state.code} </p>
                <p className="mb-0">https://www.airbus.com{this.state.path}</p>
                </div>
              );
        }else{
                return (
                    <div className="alert alert-success">
                    <p className="badge badge-success">Protected : {this.state.code}</p>
                    <p className="mb-0">https://www.airbus.com{this.state.path}</p>
                    </div> 
                  );
            }
        }
    }    
export default ItemPath;



