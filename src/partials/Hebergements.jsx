import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import { forwardRef } from 'react/cjs/react.production.min';

const Hebergements = forwardRef((props, ref) => {



  return (
    <section className="relative">

      <div ref={ref} className="bgcabines mt-12 relative bg-[url('/src/images/cabines.jpg')] bg-cover">
        
        <div className="py-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 text-white">Hébergement</h1>
          </div>



          {/* Content */}
          <div className="text-gray-600 text-center rounded-md bg-white bg-opacity-75 mx-20 p-10" data-aos="fade-right">
            <p>Voici une liste d'hébergements dans les environs en fonction du budget:</p>
            <br/>
            <br/>

            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1On52fBAAsFtx2cRhWC8j2fKqUJkkKhlFdzHxSwwFCm0/edit?usp=sharing"><b>Liste des hébergements</b></a>
          </div>


      

        </div >
        
      </div >
    </section >
  );
});

export default Hebergements;
