import React from 'react'
import {FaPhoneVolume,FaInstagram, FaFacebookSquare, FaTwitter,} from "react-icons/fa";
import {WiStars} from 'react-icons/wi';
{/*import { Wrapper, Status } from "@googlemaps/react-wrapper";*/}


const ContactUs=()=>{

  return (
    <div >
        <h1><WiStars fontSize="1.7em"/>Contact Us</h1>
        <div id="contact">
        <h2>Need to reach us?</h2>
        <p>You can give us a call on:</p>
        <p><FaPhoneVolume/> 07340000029 </p>
        <p align="center">Or</p>

        <p>You can interact with us through our social platforms on:</p>

        <p><FaInstagram/> Instagram :@rescue_pets</p>
        <p><FaFacebookSquare/> Facebook : @rescue_pets</p>
        <p><FaTwitter/>Twitter: @rescue_pets</p>
        </div>

       {/* <div id="map">
         <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63836.92905543241!2d34.7572384!3d-0.129902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa4ed4766f207%3A0xd545cde738268ce6!2sLakeHub!5e0!3m2!1sen!2ske!4v1666086508774!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
         <YourComponent/>
         </Wrapper>
        </div> */}
    </div>
  )
};


export default ContactUs