import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DisplayService extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', services: []};
     }
     componentDidMount(){
       axios.get('/api/services')
       .then(response => {
         this.setState({ services: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }

     handleDelete(id){
       console.log('sadasdsd');
     axios.delete(`api/services/${id}`,{
     }).then( response => { 
      this.setState({});
      this.props.history.push('/');
     }).catch(err=> console.log(err));
     this.componentDidMount();
   }
               


  render(){
    return (
      <div>
        <h1>Services</h1>


        <div className="row">
          <Link to="/create" className="btn btn-primary col-md-3 m-2 btn-sm mr-2">Add</Link> 
        </div><br />


        <table className="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Service Title</td>
                <td>Service Body</td>
                <td>Service Image</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              {
                this.state.services !==null ? this.state.services.map( service => (
                  <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.title}</td>
                <td>{service.body}</td>
                <td>{service.image}</td>
                <td>
                  <button  className="btn btn-primary" onClick={() => this.handleDelete(service.id)}>delete</button>
                  <Link to={"/edit/"+service.id} className="btn btn-primary col-md-3 m-2 btn-sm mr-2">edit</Link>
                </td>
           
            </tr>
                )) 
                :null
              }
              
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayService;