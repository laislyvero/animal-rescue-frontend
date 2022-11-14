import React,{Component} from 'react'
import axios from 'axios';
import {WiStars} from 'react-icons/wi';

class NewDonate extends Component {
    constructor (props){
        super(props);
        this.state={
            name:"",
            TypeOfDonation:"",
            phoneNumber:"",
        };
    }
    handleName= event =>{
        this.setState({
name:event.target.value,
        });
    };
    handleTypeOfDonation= event =>{
      this.setState({
          TypeOfDonation: event.target.value,
      });
  };

    handlePhoneNumber = event=>{
        this.setState({
            phoneNumber: event.target.value,
        });
    };

handleSubmit= event =>{
    event.preventDefault();

    const userObject ={
        name: this.state.name,
        TypeOfDonation: this.state.TypeOfDonation,
        phoneNumber: this.state.phoneNumber,
    };

    axios
    .post('http://localhost:8080/donate', userObject)
    .then((response)=>{
console.log(response.data);
this.props.history.push("/");
    })
    .catch((error) =>{
        console.log(error);
    });
};
    render(){
        return(
            <div>
                <h1><WiStars fontSize="1.7em"/>Donate</h1>
            <div className = "toddler">
            
              <form onSubmit={this.handleSubmit}>
                <div>
                    <div> 
                     <div>
                        {!this.state.name && this.state.error && (
              <p>{this.state.error.response.data.errors.name.message}</p>
            )}
                         <label htmlFor = "name">Name </label></div>
                        <input type="text" placeholder="Name"
                         value= {this.state.name} onChange={this.handleName}/>
                    </div>  
                    <div> 
                    {!this.state.TypeOfDonation && this.state.error && (
              <p>{this.state.error.response.data.errors.TypeOfDonation.message}</p>
            )}
            <label htmlFor="TypeOfDonation">Type of donation</label></div>
                        <input type="text" placeholder="Type of donation"
                         value={this.state.TypeOfDonation} onChange= {this.handleTypeOfDonation}/>
                    </div>  
                    <div>
            <p id="note">Types of donation could be in monetary form or material form</p>
        </div>              
                    <div>
                       <div>
                       {!this.state.phoneNumber && this.state.error && (
              <p>{this.state.error.response.data.errors.phoneNumber.message}</p>
            )}
            <label htmlFor="phoneNumber">Phone Number </label></div>
                        <input type="text" placeholder= "Phone number" 
                        value={this.state.phoneNumber} onChange={this.handlePhoneNumber}/>
                    </div>
                    <button>Donate</button>
                </form>
                </div>
       
            </div>
        ); 
    }
}
 export default NewDonate;