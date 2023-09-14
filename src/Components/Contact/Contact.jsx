import React, { useState } from 'react'
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
                        {/* <label className={`position-relative`}>userName : </label> */}
                        <input  type="text" id='name' placeholder="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        
                        {/* <label className={`position-relative `}>userAge : </label> */}
                        <input type="number" id='Age' placeholder="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        
                        {/* <label className={`position-relative `}>userEmail : </label> */}
                        <input  type="email" id='Email' placeholder="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        
                        {/* <label className={`position-relative `}>userPassword : </label> */}
                        <input  type="password" id='Password' placeholder="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                        

                        <button type="submit" className="btn btnMainColor">
                        Send Message
                    </button>
                </div>
            </div>

        </div>
    </HelmetProvider>
  )
}
