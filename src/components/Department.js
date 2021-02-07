import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {CreatDepartmentModal} from './CreatDepartmentModal';
import {EditDepatmentModal} from './EditDepatmentModal';


export class Department extends Component {


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


            fetch('http://localhost:3004/departments')
                .then(resp=> resp.json())
                .then(data => {
                 //console.log(data)
                 this.setState({departments:data})
                });
                
        }

        componentDidUpdate(){
            this.refreshList();
        }


        deleteUser(departmentid){
            console.log(departmentid)
            if(window.confirm("are you sure you want to delete this Member?"))
      
            fetch("http://localhost:3004/departments/"+departmentid,{
                method:"DELETE",
                headers:{
                  'Accept':'application/json',
                  'Content-Type': 'application/json'
              
                }
                
              })
            
        }

    render(){
         const {departments,users, departmentid,departmentName,departmentRole,useremail, userphone} = this.state;
         //console.log(departments)
         let creatUserModalClose =() => this.setState({creatUserModalShow:false})
         let editUserModalClose =() => this.setState({editUserModalShow:false})
        
        return(
            <div>
        <Table className="mt-4 "striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name </th>
                    <th> Role </th>
                    <th>Options</th>
                    
                </tr>
        
            </thead>
        
            <tbody>
                
                {departments.map((department)=>{
                    //console.log(department.id)
                    return(
                    <tr key ={department.id}>
                     <td>{department.id}</td>
                    <td>{department.name}</td>
                    <td>{department.roles[0]}</td>
                    
                    
                    <td>{
                      <ButtonToolbar>
                          <Button
                          className="mr-2" variant="info"
                          //click={()=> this.setState({editUserModalShow:true})}
                          
                         onClick={() => {
                            this.setState({editUserModalShow:true,departmentname:department.name,
                                departmentid:department.id,departmentrole:department.role,
                                })
                            this.show()
                         }} >
                              
                              Edit
                          </Button>

                          <Button className="mr-2" variant="danger"
                          onClick={()=> this.deleteUser(department.id)}
                          
                          >DELETE</Button>
                          
                        <EditDepatmentModal show={this.state.editUserModalShow}
                         onHide={editUserModalClose} 
                         departmentid={this.state.departmentid} departmentName={this.state.departmentName} departmentRole={this.state.departmentRole} userid = {this.state.userid} username = {this.state.username} useremail = {this.state.useremail} userphone = {this.state.userphone}/>
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
           <CreatDepartmentModal show={this.state.creatUserModalShow} onHide={creatUserModalClose} />
        </ButtonToolbar>
       
        </div>
        )}
       
    }


export default Department;



