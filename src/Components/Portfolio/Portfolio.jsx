import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useState } from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import Header from '../Header/Header'


export default function Portfolio() {
  const [imgClicked, setImgClicked] = useState(false); // imgClicked === flag if the img was clicked
  const [image, setImage] = useState("");    // image save the imageUrl that I have clicked

  const imgs=[image1,image2,image3,image1,image2,image3];

    const t=true, f= false;

function imageCard(imgurl , id){

    return(
        <>
            <div className="col-lg-4 col-md-6">
                <div onClick={()=> openImage(imgurl)}  key={id}>
                    <div
                        className="image rounded-2 overflow-hidden position-relative"
                        >
                        <img src={imgurl} alt="portfolio" />
                        <div className="layer position-absolute top-0 start-0 h-100 w-100 justify-content-center align-items-center d-flex">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

function openImage(image){
    setImage(image);
    setImgClicked(t);
}

function hideImage(e){
    // console.log(e);
    if(e == undefined){
        // console.log(e);
        setImgClicked(f);
        setImage("");
    }
}

return (
    <HelmetProvider>
        <Helmet>
            <title>Portolio</title>
        </Helmet>
        <div className="portfolio mmtt p-5 d-flex align-items-center justify-content-center vh-90">
            {
                imgClicked ? (
                    <div className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 h-100 w-100 z-3 bg-primary bg-opacity-25"
                        onClick={(e)=> hideImage(e.target.src)}> 

                        {/* the onclick on the black-background  not the image */}
                        {/* we send e.target.src which has the src of image if we clicked on the image 
                            "ex:http://localhost:3000/static/media/image1.4417330275f78faa31c3.png"
                            and has undefined if we clicked the black-back ground */}

                        <div className="overflow-hidden" style={{width:"600px"}}>
                            <img className='rounded-3' src={image} />
                        </div>
                        
                    </div>
                ):null
            }

            <div className="container p-5 pt-5 text-center">
                <Header title="PORTFOLIO COMPONENT"/>
                <div className="row g-4 mb-5">
                    {imgs.map((ele,index)=>{
                        return(
                            imageCard(ele,index)
                        )
                    })}
                </div>
            </div>

        </div>
    </HelmetProvider>
  )
}
