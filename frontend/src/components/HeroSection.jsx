import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero section">
      <img src="/assets/img/hero-bg-abstract.jpg" alt="" data-aos="fade-in" />
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-out">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>Sosyal İlk Adım'a Hoş Geldiniz!</h1>
            <p>
              Gönüllülük ve topluma hizmet projeleri ile sosyal sorumluluk
              bilincini artırıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
