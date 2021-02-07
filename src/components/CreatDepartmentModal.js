import React,{ compoment, Component } from "react";
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";


export class  CreatDepartmentModal extends Component{


constructor(props) {
    super(props);

this.state = {snackbaropen: false, snackbarmsg:'',departments:[]};
this.handleSubmit = this.handleSubmit.bind(this);
}


componentDidMount(){
fetch(`http://localhost:3004/departments`)
  .then(resp => resp.json())
  .then(data => {
    this.setState({departments:data})
    console.log(data)

  })
  
}
SnackbarClose = (event) =>{
  this.setState({snackbaropen:false});
}


handleSubmit(event){
event.preventDefault();
//alert(event.target.MemberName.value);

fetch(`http://localhost:3004/departments`,{
  method:"POST",
  headers:{
    'Accept':'application/json',
    'Content-Type': 'application/json'

  },
  body:JSON.stringify({
    id: event.target.id.value,
    name: event.target.name.value,
    role: event.target.role.value,
    
  })
})
.then(resp=> resp.json())
.then((result)=>{
//alert(result)
//this.setState({snackbaropen:true, snackbarmsg:result})

},
(error)=>{
  //alert('Failed')
  this.setState({snackbaropen:true, snackbarmsg:"failed"})

}
)
}






        render(){
            // console.log("aledx")
           
            return(

              <div className="container">
                  <Snackbar
                  anchorOrigin={{vertical:'center',horizontal:'center'}}
                  open = {this.state.snackbaropen}
                  autoHideDuration = {3000}
                  onClick={this.SnackbarClose}
                  message = {<span id="message-id">{this.state.snackbarmsg}</span>}
                  action ={[
                    <IconButton
                    key="close"
                    color="inherit"
                    onClick={this.SnackbarClose}>
                      c
                      x
                    </IconButton>
                  ]}

                  />
              <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    ADD A Department
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
          
                     <Row>
                       <Col sm={6}></Col>
                       <Form onSubmit={this.handleSubmit}>
                         <Form.Group controlId="name">
                         <Form.Label>Name</Form.Label>  
                         <Form.Control 
                         type="text"
                         name= "name"
                         required
                         placeholder="name"
                         
                         />
                         </Form.Group>
                         <Form.Group controlId="role">
                         <Form.Label>Role</Form.Label>  
                         <Form.Control as="select">
                           {this.state.departments.map(department =>
                            
                            <option key={department.id}> {department.roles[0]}</option>
                            
                            
                            
                            )}


                         </Form.Control>
                         </Form.Group>

                         

                         

                         <Button variant="primary" type="submit">
                           Add A Departmemt
                         </Button>
                         </Form>

                       


                     </Row>
                 
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger"onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
                
              </div>


            )


        }

}
  