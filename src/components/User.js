import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {CreatUserModal} from './CreatUserModal';
import {EditUserModal} from './EditUserModal';


export class User extends Component {


        state = {
            users: [], 
            editUserModalShow:false,
            creatUserModalShow:false,
           
        }

        showCreate(){
            this.setState({
                creatUserModalShow:!this.state.creatUserModalShow,
               // editUserModalShow:!this.state.editUserModalShow
            })
        }


        show(){
            this.setState({
                editUserModalShow:true
            })
        }

       
         componentDidMount(){
            this.refreshList();
            
             }
         

        refreshList(){
            //console.log("data")


            fetch('http://localhost:3004/users')
                .then(resp=> resp.json())
                .then(data => {
                 //console.log(data)
                 this.setState({users:data})
                });
                
        }

        componentDidUpdate(){
            this.refreshList();
        }

    render(){
         const {users, userid,username,useremail, userphone} = this.state;
         let creatUserModalClose =() => this.setState({creatUserModalShow:false})
         let editUserModalClose =() => this.setState({editUserModalShow:false})
        
        return(
            <div>
        <Table className="mt-4 "striped bordered hover size="sm">
            <thead>
                <tr>
                   
                    <th>name </th>
                    <th> phone # </th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>Options</th>
                    
                </tr>
        
            </thead>
        
            <tbody>
                
                {users.map((user)=>{
                    // console.log(user.id)
                    return(
                    <tr key ={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.id}</td>
                    <td>{
                      <ButtonToolbar>
                          <Button
                          className="mr-2" variant="info"
                           // oclick={()=> this.setState({editUserModalShow:true})}
                          onClick={() => {this.show() }}
                            
                          >
                              
                              Edit
                          </Button>
                          
                         

                        <EditUserModal show={this.state.editUserModalShow} onHide={editUserModalClose} />


                        <CreatUserModal show={this.state.creatUserModalShow} onHide={creatUserModalClose} />
                     </ButtonToolbar>
                        
                        }</td>
                   

                    </tr>
                    )}
                
                    )}
                
        
        
            </tbody>
        
        </Table>
        
        <ButtonToolbar>
            <Button  
            variant='primary'
            //oclick={()=> this.setState({creatUserModalShow: true})}
            onClick={() => this.showCreate()}
            
            
             > Add User</Button>
           <CreatUserModal showCreate={this.state.creatUserModalShow} onHide={creatUserModalClose} />
        </ButtonToolbar>
       
        </div>
        )}
       
    }


export default User;



