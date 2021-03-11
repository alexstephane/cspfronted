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


        show(userid,username,useremail,userphone){
            this.setState({
                editUserModalShow:true
            })
        }

       
         componentDidMount(){
            this.refreshList();
            
             }
         

        refreshList(){
            //console.log("data")


            fetch('http://localhost:3004/users/')
                .then(resp=> resp.json())
                .then(data => {
                 //console.log(data)
                 this.setState({users:data})
                });
                
        }

        componentDidUpdate(){
            this.refreshList();
        }


        deleteUser(userid){
            console.log(userid)
            if(window.confirm("are you sure you want to delete this Member?"))
      
            fetch("http://localhost:3004/users/"+userid,{
                method:"DELETE",
                headers:{
                  'Accept':'application/json',
                  'Content-Type': 'application/json'
              
                }
                
              })
            
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
                    //console.log(user.id)
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
                          //click={()=> this.setState({editUserModalShow:true})}
                          
                         onClick={() => {
                            this.setState({editUserModalShow:true,username:user.name,
                                userid:user.id,useremail:user.email,
                                userphone:user.phone})
                            this.show()
                         }} >
                              
                              Edit
                          </Button>

                          <Button className="mr-2" variant="danger"
                          onClick={()=> this.deleteUser(user.id)}
                          
                          >DELETE</Button>
                          
                        <EditUserModal show={this.state.editUserModalShow}
                         onHide={editUserModalClose} 
                         userid = {this.state.userid} username = {this.state.username} useremail = {this.state.useremail} userphone = {this.state.userphone}/>
                     </ButtonToolbar>
                        
                        }

                        
                        
                        </td>
                   

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
           <CreatUserModal show={this.state.creatUserModalShow} onHide={creatUserModalClose} />
        </ButtonToolbar>
       
        </div>
        )}
       
    }


export default User;



