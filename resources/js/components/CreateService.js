import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class CreateService extends Component {
  constructor(props){
    super(props);
    this.state = {serviceTitle: '', serviceBody: '', serviceImage: '' };


    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleImagenChange = this.handleImagenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }
  handleTitleChange(e){
    this.setState({
      serviceTitle: e.target.value
    })
  }
  handleBodyChange(e){
    this.setState({
      serviceBody: e.target.value
    })
  }
  handleImagenChange(e){
    this.setState({
      serviceImage: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    axios.post('api/services/',{
      title: this.state.serviceTitle,
      body: this.state.serviceBody,
      image: this.state.serviceImage
    }).then( response => {
      this.setState({
        title:'',
        body:'',
        image:''
      })
      this.props.history.push('/');
    }).catch(err=> console.log(err));
  }


    render() {
      return (
      <div>
        <h1>Create Service</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Service Title:</label>
                <input type="text" className="form-control" onChange={this.handleTitleChange} />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service Body:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleBodyChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Service Image:</label>
                  <textarea className="form-control col-md-6" onChange={this.handleImagenChange}></textarea>
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleSubmit}>Add Service</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateService;