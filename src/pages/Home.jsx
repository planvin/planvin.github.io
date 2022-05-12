import React from 'react';

import Header from '../partials/Header';
import Titre from '../partials/Titre';
import Programme from '../partials/Programme';
import Footer from '../partials/Footer';
import Hebergements from '../partials/Hebergements';
import Rsvp from '../partials/Rsvp';
import { useRef } from 'react';

function Home() {

  const heroRef = useRef()
  const programmeRef = useRef()
  const hebergementsRef = useRef()
  const rsvpRef = useRef()

  function scrollToTitre() {
    heroRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function scrollToProgramme() {
    programmeRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function scrollToHebergement() {
    hebergementsRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  function scrollToRsvp() {
    rsvpRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header scrollToHero={scrollToTitre} scrollToProgramme={scrollToProgramme} scrollToHebergement={scrollToHebergement} scrollToRsvp={scrollToRsvp}/>

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Titre ref={heroRef}/>
        <Programme ref={programmeRef}/>
        <Hebergements ref={hebergementsRef}/>
        <Rsvp ref={rsvpRef}/>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;