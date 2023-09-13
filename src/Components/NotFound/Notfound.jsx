import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async'
import Header from '../Header/Header'

export default function Notfound() {
  return (
    <HelmetProvider>
        <Helmet>
            <title>NOT FOUND!!</title>
        </Helmet>
        <div className="contact vh-85 d-flex align-items-center justify-content-center">
            <div className="container text-center">
                <Header title="NOT FOUND PAGE!!"/>

            </div>

        </div>
    </HelmetProvider>
  )
}
