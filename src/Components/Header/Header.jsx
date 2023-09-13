import React from 'react'

export default function Header({title}) {
  return (
    <div className="mt-4 text-center">
        <h1 className='h2 fw-bold'>{title}</h1>
        <div className="d-flex align-items-center justify-content-center py-2 mt-2 mb-2">
            <div className="line"></div>
            <i className="fa-solid fa-star mx-3 fs-6"></i>
            <div className="line"></div>
        </div>
    </div>
  );
}
