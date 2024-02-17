import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./LoginFooter.css";

const LoginFooter: React.FC = () => {
  return (
    <footer className="lf-footer text-center border-top bg-black">
      <Container>
        <Col className="col-12">
          <Row className="padding-tb-40 margin-row">
            <Col className=" col-6 col-md-6 col-lg-2 mb-8 mb-lg-0 text-left padding-footer-column">
              <h5>Site Haritası</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/about"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/bireyler-icin"
                  >
                    Bireyler için
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/kurumlar-icin"
                  >
                    Kurumlar için
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/kurumsal-kimlik"
                  >
                    Kurumsal Kimlik
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/sss"
                  >
                    S.S.S.
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/iletisim"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6} className="text-left padding-footer-column">
              <h5>Kaynaklar</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/uyelik-sozlesmesi"
                  >
                    Üyelik Sözleşmesi ve Kullanım Koşulları
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/kvkk-aydinlatma-metni"
                  >
                    KVKK Aydınlatma Metni
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/ilgili-kisi-basvuru-formu"
                  >
                    İlgili Kişi Başvuru Formu
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/cerez-politikasi"
                  >
                    Çerez Politikası
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/cayma-formu"
                  >
                    Çayma Formu
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} xs={6} className="text-left padding-footer-column">
              <h5>Eğitim Yolculukları</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/front-end"
                  >
                    Front End
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/full-stack"
                  >
                    Full Stack
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/web-mobile"
                  >
                    Web & Mobile
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/veri-bilimi"
                  >
                    Veri Bilimi
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/siber-guvenlik"
                  >
                    Siber Güvenlik
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/ui-ux"
                  >
                    UI / UX
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4} xs={6} className="text-left padding-footer-column">
              <h5>Blog</h5>
              <ul className="list-unstyled ">
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/web-api-nedir"
                  >
                    Web API Nedir? Programlama Yazılımının Arayüzü Nasıl
                    Çalışır?
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/yapay-zeka-chatbot"
                  >
                    Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/yazilim-test-otomasyonu"
                  >
                    Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale
                    Getirin!
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/node-js-nedir"
                  >
                    Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili
                    Kılavuz
                  </a>
                </li>
                <li>
                  <a
                    className="small text-white text-decoration-none"
                    href="/robotlar-ve-yapay-zeka"
                  >
                    Robotlar ve Yapay Zeka için Hangi Yazılım Dili Kullanılır?
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>

        <Row className="border-top margin-row padding-tb-40">
          <Col md={3} className="text-left-row2 padding-footer-column">
            <a href="https://tobeto.com/">
              <Image
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                width={"130px"}
              />
            </a>
          </Col>
          <Col md={6} className="text-center padding-footer-column">
            © 2022 Tobeto | Her Hakkı Saklıdır
          </Col>
          <Col md={3} className="text-right-row2 padding-footer-column">
            <a
              href="https://www.facebook.com/tobetoplatform"
              className="me-4 lf-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/tobeto_official/"
              className="me-4 lf-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitter.com/tobeto_platform"
              className="me-4 lf-icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.linkedin.com/company/tobeto/"
              className="me-4 lf-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default LoginFooter;
