import React from 'react';
import axios from 'axios';
class getData extends React.Component {
        constructor(props) {
         super(props)
         this.state = {
           persons: []
               }
             }
             componentDidMount() {
               axios.get(`http://localhost:4000/get`)
                 .then(res => {
                   const persons = res.data;
                   this.setState({ persons });
                 })
             } 
             onDelete(i,e){
                const id = this.state.persons[i].user_id;
    console.log(id)

    axios.delete(`http://localhost:4000/delete/${id}`)
    
      .then(res => {
          alert(res);
        })
  
             }
       
          render() {
           return (
             <div className="App">
             <div className="left">
               <table>
                 <tr>
                   <th>User_id</th>
                   <th>Name</th>
                 <th>Phone</th>
                 <th>Email</th>
                 <th>Course</th>
                 <th>Notes</th>
                 <th>Action</th>
                 </tr>
                 { this.state.persons.map((person,i)=> 
                 <tr key={person.user_id}>
                   <td>{person.user_id}</td>
                   <td>{person.name}</td>
                   <td>{person.phone}</td>
                   <td>{person.email}</td>
                 <td>{person.course}</td>
                 <td>{person.notes}</td>
                 <td>
                 <form onSubmit>
                  <button className="btn btn-danger" type="submit" value={person.user_id} onClick={e => this.onDelete(i,e)}>Delete</button>
              </form> 
                 </td>
                   </tr>
                 )}
               </table>
               </div>
               </div>
         );
         }
       }
       export default getData;
