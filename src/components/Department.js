// import React, {Component} from "react";
// import {Table} from "react-bootstrap";
// import {Button,ButtonToolbar} from 'react-bootstrap';
// import {CreatDepartmentModal} from './CreatDepartmentModal';
// import {EditDepatmentModal} from './EditDepatmentModal';
import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {CreatUserModal} from './CreatUserModal';
import {EditUserModal} from './EditUserModal';


export class Department extends Component {


    state = {
        departments: [], 
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
        //console.log(departmentid)
        if(window.confirm("are you sure you want to delete this Member?"))
  
        fetch("http://localhost:3004/departmens/"+departmentid,{
            method:"DELETE",
            headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
          
            }
            
          })
        
    }

render(){
    //console.log(this.state.users)
     const {departments, departmentid,name,role} = this.state;
     let creatUserModalClose =() => this.setState({creatUserModalShow:false})
     let editUserModalClose =() => this.setState({editUserModalShow:false})
    
    return(
        <div>
    <Table className="mt-4 "striped bordered hover size="sm">
        <thead>
            <tr>
               
            <th> Name </th>
                <th> role </th>
                <th>ID</th>
                
                
            </tr>
    
        </thead>
        <tbody>
            
            {departments.map((department)=>{
                //console.log(user.id)
                return(
                
                <tr key ={department.id}>
                <td>{department.name}</td>
                <td>{department.role}</td>
                <td>{department.id}</td>
                
                
                <td>{
                    
                  <ButtonToolbar>
                      
                      <Button
                      className="mr-2" variant="info"
                      //click={()=> this.setState({editUserModalShow:true})}
                      
                     onClick={() => {
                        this.setState({editUserModalShow:true,name:department.name,
                            departmentid:department.id
                            })
                        this.show()
                     }} >
                          
                          Edit
                      </Button>

                      <Button className="mr-2" variant="danger"
                      onClick={()=> this.deleteUser(department.id)}
                      
                      >DELETE</Button>
                      
                    <EditUserModal show={this.state.editUserModalShow}
                     onHide={editUserModalClose} 
                     departmentid = {this.state.departmentid} name = {this.state.name} role = {this.state.role}/>
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
        
        
         > Add Department</Button>
       <CreatUserModal show={this.state.creatUserModalShow} onHide={creatUserModalClose} />
    </ButtonToolbar>
   
    </div>
    )}
   
}


export default Department;





