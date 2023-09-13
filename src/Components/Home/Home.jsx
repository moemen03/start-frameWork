import React from 'react'
import { Helmet, HelmetProvider} from 'react-helmet-async'

import avatar from "../../assets/avatars.svg"
import Header from '../Header/Header'

export default function Home() {
  return (
    <>
    <HelmetProvider>
        <Helmet>
            <title>Home</title>
            <meta name='description' content='Helmet application'/>
        </Helmet>
        <div className="hero vh-85 pb-5 d-flex align-items-center justify-content-center">
            <div className="container p-5 pt-5 text-center">
                <img src={avatar} alt="avatar" className='avatar' />
                <Header title="START FRAMEWORK"/>
                <p className='fs-13'>
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
        </div>
    </HelmetProvider>

    </>
  )
}
