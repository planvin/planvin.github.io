import React, { useState } from 'react';
import { forwardRef } from 'react';
import Soleil from '../images/soleil.jpeg';

const Liste =  forwardRef((props,  ref) => {

  return (
    <section className="relative">
 

      <div className="max-w-12xl"  ref={ref}>


        <div className="pt-16 pb-12 md:pb-20 bg-[url('/src/images/japan.jpeg')] bg-cover">

        <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="h2 mb-4 text-white">Liste de marriage</h1>
        </div>   
        <div className="text-center rounded-md bg-white bg-opacity-75 mx-20 p-10" data-aos="fade-right">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 ">
            <p className="font-bold leading-tighter text-gray-600" data-aos="zoom-y-out">Si vous désirez participer à notre voyage de noces au Japon</p>
            <br/>
            <a href="#">Accéder à la cagnotte (à venir)</a>
          </div>
        </div>



        </div>

      </div>
    </section>
  )
});


export default Liste;