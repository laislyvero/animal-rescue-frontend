import React,{Component} from 'react'
import axios from 'axios';
import {WiStars} from 'react-icons/wi';


class NewAnimal extends Component {
    constructor (props){
        super(props);
        this.state={
            TypeOfAnimal:"",
            name:"",
            age:"",
            vaccinated:"",
        };
    }
    handleTypeOfAnimal= event =>{
        this.setState({
            TypeOfAnimal: event.target.value,
        });
    };
    handleName= event =>{
        this.setState({
name:event.target.value,
        });
    };
   
    handleAge =event=>{
        this.setState({
            age: event.target.value,
        });
    };
    handleVaccinated = event=>{
        this.setState({
            vaccinated: event.target.value,
        });
    };

handleSubmit= event =>{
    event.preventDefault();
    const userObject ={
        TypeOfAnimal: this.state.TypeOfAnimal,
        name: this.state.name,
        age: this.state.age,
        vaccinated: this.state.vaccinated,
    };

    axios
    .post('http://localhost:8080/animal', userObject)
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
                <h1><WiStars fontSize="1.7em"/>Animal Registry</h1>
            <div className = "wrapper">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <div> <label htmlFor="TypeOfAnimal">Type</label></div>
                        <input type="text" placeholder="Type of animal"
                         value={this.state.TypeOfAnimal} onChange= {this.handleTypeOfAnimal}/>
                    </div>
                    <div>
                        <div><label htmlFor = "name">Name </label></div>
                        <input type="text" placeholder="Name"
                         value= {this.state.name} onChange={this.handleName}/>
                    </div>                  
                    <div>
                       <div><label htmlFor="age">Age</label></div>
                        <input type="text" placeholder= "Age" 
                        value={this.state.age} onChange={this.handleAge}/>
                    </div> 
                    <div>
                        <div><label htmlFor="vaccinated">Vaccinated</label></div>
                        <input type ="boolean" placeholder="Vaccinated" 
                        value= {this.state.vaccinated} onChange={this.handleVaccinated}/>
                    </div>
                    <button>Register</button>
                </form>
                </div>
            </div>
        ); 
    }
}
 export default NewAnimal;
 