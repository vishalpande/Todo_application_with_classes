import react from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


class AddTodo extends react.Component {

constructor(props) {
super(props);

this.state = {
    todo:''
}

this.onChangeHandler=this.onChangeHandler.bind(this)
this.onClickHandler=this.onClickHandler.bind(this)
}

onChangeHandler(event){

this.setState({todo:event.target.value
})


}
onClickHandler(event){
this.props.update(this.state.todo)



}

render() {

return (

<div><InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter A Task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
       onChange={this.onChangeHandler}
        />
        <Button onClick={this.onClickHandler} variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup></div>



);



}


}


export default AddTodo;