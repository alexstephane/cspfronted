import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {CreatUserModal} from './CreatUserModal';


export class User extends Component {



        // state = {
        //     users: {},
            
        // }

        constructor(props){
            super(props);
            this.state ={users:[],creatUserModalShow: false}
        }

        // state = {
        //     users: [], creatUserModalShow:false
            
        // }
         componentDidMount(){
            this.refreshList();
            
             }
         

        refreshList(){
            console.log("data")


            fetch('http://localhost:3004/users')
                .then(resp=> resp.json())
                .then(data => {
                 //console.log(data)
                 this.setState({users:data})
                });
                
           
                
                // this.setState({
                //     users:[
                   
                //    // {"Photo":<img src="https://ca.slack-edge.com/T02MD9XTF-U015WR36Z7D-62a5722ccad9-512" />, "Name":"Stephane","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"}, 
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"}, 
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"},   
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"},     
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"},    
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"},    
                //     {"Photo":3, "Name":"Alex","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"},    
                     
                      
                // ]
                // })

                


            
        }

    render(){
         const {users} = this.state;
         let creatUserModalClose =() => this.setState({creatUserModalShow:false})
        
        return(
            <div>
        <Table className="mt-4 "striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Photo  </th>
                    <th>name </th>
                    <th> phone # </th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>About me/role</th>
                    
                </tr>
        
            </thead>
        
            <tbody>
                
                {users.map((user)=>{
                    // console.log(user.id)
                    return(
                    <tr key ={user.id}>
                    
                    <td>{user.image}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.id}</td>
                    <td>{user.comments}</td>

                    </tr>
                    )}
                
                    )}
                
        
        
            </tbody>
        
        </Table>
        
        <ButtonToolbar>
            <Button  
            variant='primary'
            oclick={()=> this.setState({creatUserModalShow: true})}
            
            
             > Add User</Button>
           <CreatUserModal show={this.state.creatUserModalShow} onHide={creatUserModalClose} />
        </ButtonToolbar>
       
        </div>
        )}
       
    }


export default User;



