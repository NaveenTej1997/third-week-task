import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
   super(props)
          this.state = {
           persons: [],
           users: []
         }
         
         this.handleIdChange = this.handleIdChange.bind(this);
         this.handleNameChange = this.handleNameChange.bind(this);
         this.handleEmailChange = this.handleEmailChange.bind(this);
         this.handlePhoneChange = this.handlePhoneChange.bind(this);
         this.handleDropChange=this.handleDropChange.bind(this);
         this.handleNoteChange=this.handleNoteChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
        
       }
 
   handleIdChange(e) {
     this.setState({id: e.target.value})
   }
   handleNameChange(e) {
     this.setState({name: e.target.value})
   }
 
   handleEmailChange(e) {
     this.setState({email: e.target.value})
   }
 
   handlePhoneChange(e) {
     this.setState({phone: e.target.value})
   }
 handleDropChange(e){
   this.setState({course:e.target.value})
 }
 handleNoteChange(e){
   this.setState({notes:e.target.value})
 }
  
   onSubmit(e) {
       e.preventDefault();
       const employee = {
         name: this.state.name,
         phone: this.state.phone,
         email: this.state.email,
        course:this.state.course,
        notes:this.state.notes
       }
       
       axios.post('http://localhost:4000/post', employee)
       .then(res => {
         
           const persons = res.data;
           this.setState({ persons });
         })  
         alert("your form submitted successfully")
     
   }  
   render() {
     return (
     <div className="App">
        <form method="user" className="right">
          <label>
            <span>user_id:</span>
         <input type="text" name="user_id" id="user_id" onChange={this.handleIdChange}/>
         </label><br/>
         <label>
         <span>name:</span>
         <input type="text" name="name" onChange={this.handleNameChange}/>
         </label><br/>
         <label>
         <span>phone:</span>
         <input type="text" name="phone" onChange={this.handlePhoneChange}/>
         </label><br/>
         <label>
         <span>email:</span>
         <input type="email" name="email" onChange={this.handleEmailChange}/>
         </label><br/>
         <label>Course :</label>
         <select
         name='course' required onChange={this.handleDropChange}>
           <option value="">select course</option>
           <option value="AWS">AWS</option>
           <option value="React">React</option>
           <option value="Node">Node</option>
         </select><br/>
         
            <textarea name="notes" placeholder="write here" 
            rows="5" columns="30" onChange={this.handleNoteChange} required></textarea><br/>
         

         <button onClick={this.onSubmit}>post</button><br/>


          <Link to="/getData"><button className="btn btn-success" style={{margin:'15px',width:'100px'}}
  >Fetch</button></Link>
      
       </form>
     </div>
   );
   }
 }
 export default App;