import React from 'react';
import Home from '../components/Home/Home';
import Latest from '../components/Latest/Latest';
import Recent from '../components/Recent/Recent';
import B from '../components/B/B';
  function HomePage() {
    return (
      <>
        <Home />
        <Latest />
        <Recent />
        <B />
      </>
    )
  }

export default HomePage;
