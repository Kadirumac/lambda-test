import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img
            src="assets/sia-png/logo-no-background.png"
            width=""
            alt="Sosyal ilk Adim Logo"
            srcSet=""
          />
          <h1 className="sitename">Sosyal ilk Adım</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <HashLink to="/#hero" className="active">
                Ana Sayfa
              </HashLink>
            </li>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  to="/dernekler"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dernekler
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#freiwilligendienste"
                    >
                      Gönüllü Hizmetler
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#kinderbetreuung"
                    >
                      Çocuk Bakımı
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#seniorenbetreuung"
                    >
                      Yaşlı Bakımı
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#sprachtandem"
                    >
                      Dil Tandemi
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#hilfefurfluchtlinge"
                    >
                      Mültecilere Yardım
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#umweltschutzundreinigung"
                    >
                      Çevre Koruma ve Temizlik
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#tierheim"
                    >
                      Hayvan Barınağı
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="dropdown-item"
                      to="/dernekler#sportverein"
                    >
                      Spor Kulübü
                    </HashLink>
                  </li>
                </ul>
              </li>
            </ul>

            <li>
              <HashLink to="/#about">Hakkımızda</HashLink>
            </li>
            <li className="d-lg-none">
              <Link to="/dernek">Dernekler</Link>
            </li>
            <li>
              <HashLink to="/#contact">İletişim</HashLink>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <HashLink className="btn-getstarted" to="/#footer">
          Sosyal Medya Linkleri
        </HashLink>
      </div>
    </header>
  );
}
