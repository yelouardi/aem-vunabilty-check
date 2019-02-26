import React from 'react';
import '../style.css';
const domaine = 'https://www.acj.airbus.com';
class ItemPath extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code : 0,
            path : props.path
        };
    }

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ code: res.express }))
        .catch(err => console.log(err));
    }
   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
   callBackendAPI = async () => {
    const response = await fetch('/express_backend?path='+domaine+this.state.path);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

     render() {
    if(this.state.code === 200){
        return (
            <div className="alert alert-danger">
            <p className="badge badge-danger">Danger : {this.state.code} </p>
            <p className="mb-0">{domaine}{this.state.path}</p>
            </div>
          );
        }
     else {
            return (
                <div className="alert alert-success">
                <p className="badge badge-success">Protected : {this.state.code} </p>
                <p className="mb-0">{domaine}{this.state.path}</p>
                </div>
              );
            }
        }
    }    
export default ItemPath;



