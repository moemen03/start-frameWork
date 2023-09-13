import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async";
import Header from '../Header/Header';

export default function Aboutt() {
  return (
    <HelmetProvider>
        <Helmet>
            <title>About</title>
        </Helmet>
        <div className="about vh-85 d-flex align-items-center justify-content-center">
            <div className="container pt-5 text-center">
                <Header title="ABOUT COMPONENT"/>
                <div className="row g-1 text-start">
                    <div className="col-md-6">
                        <p className='fs-6'>
                        Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className='fs-6'>
                        Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </HelmetProvider>
  )
}
