import React, { useState } from 'react';
import { forwardRef } from 'react';
import Soleil from '../images/soleil.jpeg';

const Titre =  forwardRef((props,  ref) => {

  return (
    <section className="relative">

      <div className="max-w-12xl"  ref={ref}>

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20 bg-[url('/src/images/soleil.jpeg')] bg-cover">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 ">
            <h1 className="text-white text-5xl md:text-6xl leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Perrine & Pierre </h1>
          </div>

        </div>

      </div>
    </section>
  )
});


export default Titre;