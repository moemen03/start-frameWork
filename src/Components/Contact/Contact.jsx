import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async";
import Header from '../Header/Header';


export default function Contact() {


  return (
    <HelmetProvider>
        <Helmet>
            <title>Contact</title>
        </Helmet>
        <div className="contact vh-85 d-flex align-items-center justify-content-center">
            <div className="container ">
                <Header title="CONTACT SECTION"/>
                <div className="w-75 m-auto">
                    <input className='d-block form-control mt-4 ' id='nameInput' type="text" placeholder="Enter Your Name" />
                    
                    <input className='d-block form-control mt-4' type="number" placeholder="Enter Your Age" />
                    <input className='d-block form-control mt-4' type="email" placeholder="Enter Your Email" />
                    <input className='d-block form-control mt-4' type="password" placeholder="Enter Your Password" />

                    <button type="submit" className="btn btnMainColor">
                        Send Message
                    </button>
                </div>
            </div>

        </div>
    </HelmetProvider>
  )
}
