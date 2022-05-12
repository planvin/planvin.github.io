import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import { forwardRef } from 'react/cjs/react.production.min';

const Rsvp = forwardRef((props, ref) => {



  return (
    <section className="relative">

      <div ref={ref} className="bgcabines mt-12 relative">
        
        <div className="py-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h2 mb-4 text-gray-600">RSVP</h1>
          </div>



          {/* Content */}
          <div className="text-center rounded-md bg-white bg-opacity-75 mx-20 p-10" data-aos="fade-right">
            <p className="content-center inline-block"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaWGuFAUs_chzXuRRdeMvIChLekWX4DJvlAqPaAdpbJ8gneg/viewform?embedded=true" width="640" height="966" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe></p>
            <br/><br/>Si le formulaire ne s'affiche pas bien, vous pouvez y accéder ici : <br/> <a target="_blank" href="https://forms.gle/wmgVgSZvAarFWdnUA"><b>Confirmer ma présence</b></a>
          </div>


      

        </div >
        
      </div >
    </section >
  );
});

export default Rsvp;
