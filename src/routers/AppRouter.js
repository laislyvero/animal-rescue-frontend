import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import NewAnimal from "../Pages/newanimal";
import Home from "../Pages/home";
import Header from "../components/header"
import ContactUs from '../Pages/contactus';
import AboutUs from '../Pages/aboutus';
import Adopt from '../Pages/adopt';
import Donate from '../Pages/donate';

const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            
            <Route exact path='/' component ={Home}/>
            <Route path = "/newanimal" component ={NewAnimal}/>
            <Route path ="/contactus" component={ContactUs}/>
            <Route path = "/aboutus" component ={AboutUs}/>
            <Route path = "/adopt" component ={Adopt}/>
            <Route path = "/donate" component ={Donate}/>
            
        </Switch> 
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;