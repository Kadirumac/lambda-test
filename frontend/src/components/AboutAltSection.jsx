import React from "react";

const AboutAltSection = () => {
  return (
    <section id="about-alt" className="about-alt section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="/assets/img/about.jpg" className="img-fluid" alt="" />
            <a
              href="https://www.youtube.com/watch?v=0_mI-MQgVt0"
              className="glightbox play-btn"
            ></a>
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Değerlerimiz</h3>
            <p className="fst-italic">
              Sosyal İlk Adım olarak, topluluğumuzun temelini oluşturan dört
              önemli değerimiz bulunmaktadır:
            </p>
            <ul>
              <li>
                <h5>Dayanışma:</h5> Birlikte daha güçlü olduğumuza inanıyoruz.
                Toplumsal dayanışmayı ve işbirliğini her şeyin üstünde
                tutuyoruz.
              </li>
              <li>
                <h5>Çeşitlilik ve Kapsayıcılık:</h5> Her bireyin eşit ve değerli
                olduğu bir ortam yaratıyoruz.
              </li>
              <li>
                <h5>Özgür İfade:</h5> İnsanların kendilerini özgürce ifade
                edebilecekleri bir alan sağlıyoruz.
              </li>
              <li>
                <h5>Toplumsal Katkı:</h5> Toplumun daha iyi bir yer haline
                gelmesi için çalışıyoruz.
              </li>
            </ul>
            <p>
              Sosyal İlk Adım'a katılarak bu değerleri benimseyen ve topluma
              katkı sağlayan büyük bir ailenin parçası olabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAltSection;
