import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>İlham Verici Sözler</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Hayal gücü bilgiden daha önemlidir...</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Albert Einstein</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>
                    Dünyada görmek istediğiniz değişimin kendisi olun.
                  </span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Mahatma Gandhi</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Karanlığı karanlıkla yok edemezsiniz...</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Martin Luther King Jr.</h3>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>Nereye giderseniz gidin, tüm kalbinizle gidin.</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <h3>Confucius</h3>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
