import React from "react";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center text-center">

      <div className="container text-white">

        <h1 className="display-4 fw-bold">
          Creative Design Agency
        </h1>

        <p className="lead">
          We build modern websites and digital experiences
        </p>

        <button className="btn btn-primary btn-lg mt-3 me-3">
          Get Started
        </button>

        <button className="btn btn-primary btn-lg mt-3">
          View Work
        </button>

      </div>

    </section>
  );
}

export default Hero;