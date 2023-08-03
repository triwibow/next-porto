import React from "react";

const Home:React.FC = () => {
  return (
    <section className="hs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 my-4">
            <h1 className="hs-title">
              Hi,👋
              <br/>
              My Name is 
              <br />
              <span className="text-gradient-primary">Tri Wibowo</span>
              <br />
              I build things for web
            </h1>
          </div>
          <div className="col-md-6 hs-image my-4">
            <img src="/images/hero-image.png" alt="hero-image"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;