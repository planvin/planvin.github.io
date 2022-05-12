import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import Denacre from '../images/denacre.webp';
import Mairie from '../images/mairie.jpeg';
import Eglise from '../images/eglise.jpeg';
import { forwardRef } from 'react/cjs/react.production.min';

const Programme = forwardRef((props, ref) => {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Samedi 24 Septembre 2022</h1>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">La journée</h3>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Mariage Civil</div>
                    <div className="text-gray-600">14h - Mairie, Le Touquet</div>
                  </div>
                  
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Cérémonie</div>
                    <div className="text-gray-600">14h30 - Eglise Sainte Jeanne d'Arc, Le Touquet</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Festivités</div>
                    <div className="text-gray-600">17h - Château du Denacre, Saint-Martin-Boulogne</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded opacity-25" src={Mairie} width="500" height="462" alt="mairie" />
                    <p className="md:max-w-none text-gray-600 font-bold text-center w-full absolute transform animate-float" width="500" height="44" style={{ top: '30%' }}>
                      🇫🇷<br/><br/>
                      Engagement républicain<br/><br/> 
                      En présence du Président de la République (si disponible)<br/><br/>
                      <a href="https://g.page/villedutouquet?share" target="_blank">📍 clique ici si tu es perdu</a>
                      </p>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded opacity-25" src={Eglise} width="500" height="462" alt="Features bg" />
                    <p className="md:max-w-none text-gray-600 font-bold text-center w-full absolute transform animate-float" width="500" height="44" style={{ top: '30%' }}>
                      💒👰🤵💍<br/><br/>
                      Engagement pour toujours. <br/><br/>
                      Bénédiction. <br/><br/>
                      Célébré par Monsieur Philippe de Beco. <br/><br/>
                      <a href="https://goo.gl/maps/b6z4wRkurjhHKXD97" target="_blank">📍 clique ici si tu es perdu</a></p>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded opacity-25" src={Denacre} width="500" height="462" alt="Features bg" />
                    <p className="md:max-w-none text-gray-600 font-bold text-center w-full absolute transform animate-float" width="500" height="44" style={{ top: '30%' }}>
                      🍸🍽️🎉 <br/><br/>
                      Cocktail <br/><br/>
                      Repas placé <br/><br/>
                      Soirée dansante (avec quart d'heure américain)<br/><br/>
                      <a href="https://goo.gl/maps/1Py26EVVmaVugiNs6" target="_blank">📍 clique ici si tu es perdu</a>
                      </p>
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
});

export default Programme;
