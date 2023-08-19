import React from 'react';
import CallToAction from './CallToAction'
import Introduction from './Introduction';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function HomePage() {
  return (
    <>
        <CallToAction />
        <Introduction />
    </>
  );
}

export default HomePage;
