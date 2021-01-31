import React,{ compoment, Component } from "react";
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';


export class  CreatUserModal extends Component{


//  state = {
//             users: {},
            
//         }

constructor(props) {
    super(props);
}



        render(){
            // console.log("aledx")
           
            return(

                
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
                



            )


        }

}
  