import React from 'react'

export default function Footer() {
  return (
    <>
      <footer >
        <div className="info py-5 text-white ">
            <div className="container">
            <div className="row g-4 p-4 g-4 text-center">
                <div className="col-sm-4">
                <h3 className="h5">LOCATION</h3>
                <p className="fs-2">2215 John Daniel Drive</p>
                <p className="fs-2">Clark, MO 65243</p>
                </div>
                <div className="col-sm-4">
                <h3 className="h5">AROUND THE WEB</h3>
                <div className="social">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-solid fa-globe"></i>
                </div>
                </div>
                <div className="col-sm-4">
                <h3 className="h5">ABOUT FREELANCER</h3>
                <p >
                    Freelance is a free to use, licensed Bootstrap theme created by
                    Route
                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="copyright text-center text-white">
            <p className="py-3 m-0" >
            Copyright © Your Website 2021
            </p>
        </div>
      </footer>
    </>
  )
}
