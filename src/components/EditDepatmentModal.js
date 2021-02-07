import React,{ compoment, Component } from "react";
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";


export class  EditDepartmentModal extends Component{



constructor(props) {
    super(props);
 
// this.state = {snackbaropen: false, snackbarmsg:''};
// this.handleSubmit = this.handleSubmit.bind(this);
}

// state = {
//   userid: this.state.user.id, 
  
 
// }




// SnackbarClose = (event) =>{
//   this.setState({snackbaropen:false});
// }


handleSubmit(event){
  
  
event.preventDefault();
//alert(event.target.MemberName.value);

fetch('http://localhost:3004/users/221',{
  method:"PATCH",
  headers:{
    'Accept':'application/json',
    'Content-Type': 'application/json'

  },
  body:JSON.stringify({
   id: event.target.id.value,
    name: event.target.name.value,
    phone: event.target.phone.value,
    email: event.target.email.value

  })
})
// .then(resp=> resp.json())
// .then((result)=>{
//     console.log(result)
// //alert(result)


//  },
//  (error)=>{
// alert('Failed')
// //   this.setState({snackbaropen:true, snackbarmsg:"failed"})
//  }
 //)
}






        render(){
           // console.log("alex")
           //console.log(userid)
           
            return(

             
                
     
              <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Edit A MEMBER
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                <Row>
                       <Col sm={6}></Col>
                       <Form onSubmit={this.handleSubmit}>
                            
                       <Form.Group controlId="id">
                         <Form.Label>Member Id</Form.Label>  
                         <Form.Control 
                         type="text"
                         name= "id"
                         required
                         disabled
                         defaultValue = {this.props.userid}
                         placeholder="id"
                         
                         />
                         </Form.Group>


                         <Form.Group controlId="name">
                         <Form.Label>Name</Form.Label>  
                         <Form.Control 
                         type="text"
                         name= "name"
                         required
                         defaultValue = {this.props.username}
                         placeholder="name"
                         
                         />
                         </Form.Group>
                         <Form.Group controlId="email">
                         <Form.Label>Email Address</Form.Label>  
                         <Form.Control 
                         type="text"
                         name= "email"
                         required
                         defaultValue = {this.props.useremail}
                         placeholder="Email"
                         
                         />
                         </Form.Group>

                         <Form.Group controlId="phone">
                         <Form.Label>phone Number</Form.Label>  
                         <Form.Control 
                         type="text"
                         name= "phone"
                         required
                         defaultValue = {this.props.userphone}
                         placeholder="Phone"
                         
                         />
                         </Form.Group>

                         

                         <Button variant="primary" type="submit">
                          Update member
                         </Button>
                         </Form>

                       


                     </Row>
                 
                    
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger"onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
                
              


            )


        }

}