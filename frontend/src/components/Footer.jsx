import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">Sosyal Ilk Adim</span>
            </Link>
            <p>Bize sosyal medya hesaplarımızdan da ulaşabilirsiniz:</p>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/sosyalilkadim">
                <i className="bi bi-twitter-x bi--3xl"></i>
              </a>
              <a href="https://www.instagram.com/sosyalilkadim/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://medium.com/@sosyalilkadim">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-medium"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <h4>Katılın ve Fark Yaratın!</h4>
            <p>
              Sosyal İlk Adım'a katılarak siz de bu büyük aileye dahil olabilir
              ve hem kendi gelişiminize hem de topluma katkıda bulunabilirsiniz.
              Hep birlikte daha güçlü ve dayanışma dolu bir toplum inşa edelim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
