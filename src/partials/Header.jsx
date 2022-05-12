import React, { useState, useEffect } from 'react';

function Header({scrollToHero, scrollToProgramme, scrollToHebergement, scrollToRsvp, scrollToList}) {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`text-white font-bold fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'text-slate-600 hover:text-slate-900 bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            
             <span>P&P 2022</span>
            
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a onClick={scrollToHero} className="font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Bienvenue</a>
              </li>
              <li>
                <a onClick={scrollToProgramme} className="font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Programme</a>
              </li>
              <li>
                <a onClick={scrollToHebergement} className="font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Hébergement</a>
              </li>
              <li>
                <a onClick={scrollToRsvp} className="font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">RSVP</a>
              </li>
              <li>
                <a onClick={scrollToList} className="font-medium px-5 py-3 flex items-center transition duration-150 ease-in-out">Liste de mariage</a>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
