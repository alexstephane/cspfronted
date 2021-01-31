// import React, {Component} from "react"


// export class Department extends Component {

//     render(){
//         return(
//         <div className="mt-5 d-flex justify-content-left" >
//             <h3>this is the departement Page </h3>


//         </div>
//         )
//     }

// }

// export default Department;



import React, {Component} from "react"
import {Table} from "react-bootstrap"


export class Department extends Component {






        // state = {
        //     users: {},
            
        // }

        // constructor(props){
        //     super(props);
        //     this.state ={users:[]}
        // }

        state = {
            departments: []
            
        }
         componentDidMount(){
            this.refreshList();
            
            
             }
         

          refreshList(){



            // fetch('http://localhost:3000/users')
            //     .then(resp=> resp.json())
            //     .then(data => {
            //        console.log(data)
            //         this.setState({departments:data})
            //     });

           
                
                this.setState({
                    dapartments:[
                   
                   // {"Photo":<img src="https://ca.slack-edge.com/T02MD9XTF-U015WR36Z7D-62a5722ccad9-512" />, "Name":"Stephane","Phone":"804-517-1262","Email":"coldjourney91@gmail.com","ID":"4","Comments":"write any thing"}, 
                    { "Name":"Alex","Role":"alex"}, 
                       
                     
                      
                ]
                })

                


            
        }

    render(){
        
        const {departments} = this.state;
        return(
        <Table className="mt-4 "striped bordered hover size="sm">
            <thead>
                <tr>
                    
                    <th>Name </th>
                    <th>Role </th>
                    
                    
                </tr>

            </thead>

            <tbody>
                {departments.map(department=>
                
                    <tr key ={department.id}>
                    <td>{department.name}</td>
                   
                   
                    
                    
                     </tr>
                    
                    
                    )}


            </tbody>

        </Table>
        )
    }

}

export default Department;