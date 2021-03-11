import React, {Component} from "react";
import {Table} from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {CreatDepartmentModal} from './CreatDepartmentModal';
import {EditDepatmentModal} from './EditDepatmentModal';


export class Department extends Component {

    componentDidMount(){
             this.refreshList();
                
                }
             
    refreshList(){
                //console.log("data")
    
    
                fetch('http://localhost:3004/departments')
                    .then(resp=> resp.json())
                    .then(data => {
                     console.log(data)
                     this.setState({departments:data})
                    });
                    
            }

    




render(){


    return(

        <div>
        This is the Dapartment page
        
        </div>
    )
}






       
    }


export default Department;



