'use client';

import Image from 'next/image';

export default function Preloader() {
  return (
    <div className="loading-screen" id="loading-screen">
      <span className="bar top-bar"></span>
      <span className="bar down-bar"></span>
      <div className="animation-preloader">
        <div className="spinner">
          <Image
            // src="/assets/images/loader.gif"
            src="/assets/images/flight.png"
            alt="Loading"
            width={700}
            height={400}
          />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="C" className="letters-loading">C</span>
          <span data-text-preloader="h" className="letters-loading">h</span>
          <span data-text-preloader="o" className="letters-loading">o</span>
          <span data-text-preloader="k" className="letters-loading">k</span>
          <span data-text-preloader="h" className="letters-loading">h</span>
          <span data-text-preloader="i" className="letters-loading">i</span>
          <span data-text-preloader="Y" className="letters-loading">Y</span>
          <span data-text-preloader="a" className="letters-loading">a</span>
          <span data-text-preloader="t" className="letters-loading">t</span>
          <span data-text-preloader="r" className="letters-loading">r</span>
          <span data-text-preloader="a" className="letters-loading">a</span>
        </div>
      </div>
    </div>
  );
}