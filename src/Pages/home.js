import React from 'react'
import '../css-files/home.css'
import MyButton from '../components/mybutton';
import Elly from "../pets/elly";
import Adolf from '../pets/adolf';
import Nala from '../pets/nala';
import Paddy from '../pets/paddy';
import Pete from '../pets/pete';
import {WiStars} from 'react-icons/wi';

const Home = () =>{
   
    return (
    <div>
       
      <h1><WiStars fontSize="1.7em"/>RescueME!</h1>
      
       <div id= 'landingpage'>
        <h2 id='landinghead'>Help Us Save Lives</h2>
        <p> If you are here, you get a pet, I get a pet, we all get pets!</p>
        <p> We are dedicated to giving rescued pets a chance in having a happpy and healthy life.<br/>
        Together with the community, we treat, train and take care of these animals to enhance<br/> 
        the ecosystem. We are excited to give up these animals for adoption and<br/>
         we help you help them settle down in their new homes, every step along the way.
        </p>
        </div>
        <div id= "quick">
        <MyButton to='Adopt'/>
        <MyButton to='Donate'/>
        </div>
    <div class='paddy'>

    <div>
    <a><img src='https://img.freepik.com/free-photo/very-pretty-colored-parrot-perched-tree-branch_493961-1289.jpg?size=626&ext=jpg&ga=GA1.2.57622419.1663238735'
             alt='parrot' width ='150px' height='150px'/></a>
    <Elly/>
   
    </div>
    
    <div>
<img src='https://img.freepik.com/free-photo/beagle-dog-sitting-with-white-background_53876-30186.jpg?size=626&ext=jpg&ga=GA1.2.57622419.1663238735'
             alt='puppy' width ='150px' height='150px'/>
<Adolf/>
    </div>

    <div>
    <img src='https://img.freepik.com/free-photo/adorable-white-black-kitty-with-monochrome-wall-her_23-2148955171.jpg?size=338&ext=jpg&ga=GA1.2.57622419.1663238735'
             alt='cat' width ='100px' height='150px'/>
<Nala/>
    </div>

    <div>
    <img src='https://img.freepik.com/premium-photo/white-cat-devonrex-sits-dressing-table_75514-2559.jpg?size=626&ext=jpg&ga=GA1.2.57622419.1663238735'
             alt='kitten' width ='200px' height='150px'/> 
<Paddy/>
    </div>
<div>
<img src='https://img.freepik.com/free-photo/adorable-nova-scotia-duck-tolling-retriever-dog-resting-sunshine_493961-1035.jpg?size=626&ext=jpg&ga=GA1.2.57622419.1663238735'
             alt='dog' width ='200px' height='150px'/>
  <Pete/>
  
  </div>

</div>
</div>
);
}

export default Home;

