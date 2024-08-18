import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Hakkımızda</h2>
        <p>
          Sosyal İlk Adım, insanları bir araya getirerek toplumsal etkileşimi
          artırmayı, bireylerin kendini ifade etmelerini ve topluma aktif olarak
          katılmalarını teşvik eden bir organizasyondur.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4>Misyonumuz</h4>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  <b>Etkileşimi Güçlendirmek:</b> Farklı ilgi alanlarına ve
                  geçmişlere sahip bireyleri bir araya getirerek sosyal
                  etkileşimi teşvik ediyoruz.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  <b>Kendini İfade Etmeyi Teşvik Etmek:</b> Her bireyin sesini
                  duyurabileceği, düşüncelerini ve yeteneklerini paylaşabileceği
                  bir ortam sunuyoruz.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>
                <span>
                  <b>Topluma Katılımı Artırmak:</b> Çeşitli etkinlikler,
                  projeler ve gönüllülük fırsatları ile bireylerin topluma aktif
                  katılımını sağlıyoruz.
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h4>Vizyonumuz</h4>
            <p>
              Toplumda sosyal etkileşimi artırarak bireylerin kendilerini
              özgürce ifade edebileceği, yeteneklerini sergileyebileceği ve
              topluma katkı sağlayabileceği bir platform yaratmak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
