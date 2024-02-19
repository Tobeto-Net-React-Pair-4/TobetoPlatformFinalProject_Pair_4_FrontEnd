import React from 'react'
import "./IstanbulKodluyor.css"
import { Col, Container, Row } from 'react-bootstrap'
import EducationButton from '../../components/IstanbulKodluyor/EducationButton'
import Faqs from '../../components/IstanbulKodluyor/Faqs'
import { faqs } from '../../utilities/constants/faqs'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

type Props = {}

const IstanbulKodluyor = (props: Props) => {

    return (

        <Container fluid>
            <Row className='bg-darkblue'>
                <img className='ik-logo' src="../../../public/assets/images/istkodluyorlogo.svg" alt="İstanbul Kodluyor" />
                <div className="col-12 d-flex flex-column justify-content-center px-10 text-center">
                    <span className="header-text-md mt-5 mb-5 ">Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
                    <span className="header-text mt-8 mb-5">Aradığın <span className="quot">&nbsp;“</span>İş<span className="quot">”&nbsp;</span> Burada!</span>
                </div>
            </Row>
            <Row className='bg-lightgreen'>
                <div className='col-12 istk-md-text'>
                    Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor” Projesi
                </div>
                <div className='col-12 px-md-10 px-sm-0 text-center'>
                    <span className='istk-sm-text'>
                        Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonunda İstanbul Kalkınma Ajansı (İSTKA) ve İngiltere merkezli Bridges Outcomes Partnerships iş birliğinde başladı!
                    </span>
                </div>
            </Row>
            <Row>
                <Col className='col-6 bg-lightblue d-flex justify-content-center'>
                    <p className="text-center ic-header">
                        Yazılım ve teknoloji alanında yeni bir kariyere adım atmak istiyorsan
                    </p>
                    <ul className="ic-list">
                        <li>18-35 yaş arasındaysan</li>
                        <li>Lise veya üniversite mezunuysan</li>
                        <li>Son 6 aydır ve şu an öğrenci değilsen</li>
                        <li>Son 1 yıldır çalışmıyorsan</li>
                        <li>İş arayışındaysan</li>
                    </ul>
                    <span className='bold-text'>O halde doğru yerdesin!</span>
                    <hr />
                    <span className='md-text'>Aklına takılan tüm sorular için;</span>
                    <div className='mt-20 connect-us'>
                        <div className='sss'>
                            <div className='d-flex justify-content-center align-items-center '>
                                <span className='sss-num'>1</span>
                                <span className='sss-text'>Sıkça Sorulan Sorulara Bakabilirsin</span>
                            </div>
                            <div>
                                <a className="btn btn-primary ms-10 my-sm-4 button-width" href="/istanbul-kodluyor#sss">S.S.S.</a>
                            </div>
                        </div>
                        <div className='mail'>
                            <div className='d-flex justify-content-center align-items-center '>
                                <span className='sss-num'>2</span>
                                <span className='sss-text'> Bize Yazabilirsin</span>
                            </div>
                            <div>
                                <a className="btn btn-primary ms-10 my-sm-4 button-width" href="mailto:istanbulkodluyor@tobeto.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className=' col-6 bg-lightgray'>
                    <RegisterForm/>
                </Col>
            </Row>
            <Row className='bg-lightgreen'>
                <div className='header-left-2'>
                    <span className="header-left-text">İstanbul Kodluyor Projesi Hakkında </span>
                </div>
                <div className='col-12 mt-8 yazilim-text'>
                    <p>
                        <b>Yazılım ve teknoloji</b> alanında meslek sahibi olmak isteyen genç yetişkinlere, <b>ücretsiz ve kapsamlı eğitimlerle</b> gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında <b>işe yerleşmelerini</b> sağlayan bir projedir. Teknoloji alanında nitelikli insan kaynağını geliştirmeyi amaçlayan bu proje, aynı zamanda <b>kadınların</b> sektördeki temsiliyetini artırmayı da hedeflemektedir.
                    </p>
                </div>
            </Row>
            <Row className='bg-darkblue'>
                <span className="text-neon mt-5">SÜREÇ</span>
                <div className="col-12 position-relative text-center">
                    <section className="ps-timeline-sec">
                        <div className="container-fluid">
                            <ol className="ps-timeline">
                                <li><div className="ps-top"><p>Başvuru ve <br /> Ön-değerlendirme</p></div><span className="ps-sp-top">1</span></li>
                                <li><div className="ps-bot"><p>"Herkes için Kodlama" Eğitimleri</p></div><span className="ps-sp-bot">2</span></li>
                                <li><div className="ps-top"><p>Seçme ve Değerlendirme</p></div><span className="ps-sp-top">3</span></li>
                                <li><div className="ps-bot"><p>Mesleki ve Profesyonel Gelişim Eğitimleri</p></div><span className="ps-sp-bot">4</span></li>
                                <li><div className="ps-top"><p>İstihdam</p></div><span className="ps-sp-top">5</span></li>
                            </ol>
                        </div>
                    </section>
                </div>
            </Row>

            <Row className='bg-neongreen'>
                <div className="header-right-2">
                    <span className="header-right-text">İstihdama Giden Yol</span>
                </div>
                <div className="col-12 mt-20 neontext-div">
                    <span className="neontext">Yazılım ve Teknoloji Alanında Meslek Edinmeye Yönelik Eğitimler</span>
                    </div>
                    <div className="detailList">
                        <div className=" list">
                            <span>Mesleki Eğitimler</span>
                            <ul>
                                <li>Online Canlı Dersler</li>
                                <li>Video İçerikler</li>
                                <li>İstanbul’da Kampüs Buluşmaları</li>
                                <li>Proje Uygulamaları</li>
                            </ul>
                        </div>
                        <div>
                            <span className="plusIcon">+</span>
                        </div>
                        <div className="list">
                            <span>Profesyonel Gelişim Eğitimleri</span>
                            <ul>
                                <li>İşte Başarı Eğitimleri</li>
                                <li>Sektör Buluşmaları ve Webinarlar</li>
                                <li>Kariyer Gelişim Desteği</li>
                                <li>Mentörlük </li>
                            </ul>
                        </div>
                    </div>
                
                {/* //bozuk! */}
            </Row>
            <Row className='education'>
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_yazilim-web.4aba227e.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_siber-guvenlik.0eb95dc9.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_veri-bilimi.b917503a.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_bulut-yazilim.5697ec17.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_mobil-uygulama.f3b8032f.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_uiux.d98f05d7.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_dijital-pazarlama.6527675a.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_ag-guvenlik.6bf38107.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_sistem.a6f8bc42.svg'
                />
                <EducationButton
                    imgSrc='../../../public/assets/images/web_egitim_ikonlar_oyun.8722b2b4.svg'
                />
            </Row>
            <Row className='bg-lightgreen'>
                <div className='header-left-2'>
                    <span className="header-left-text">Sen de hemen başvur!</span>
                </div>
                <div className='container'>
                    <div className='row ps-md-40 ps-sm-0'>
                        <div className='col-md-3 col-12 d-flex align-items-center justify-content-center'>
                            <span className="text-right right-line text-style">
                                Yazılım ve Teknoloji Alanında
                            </span>
                        </div>

                        <div className='col-md-9 col-4 mt-8 reg-sec p-5'>
                            <div>
                                <span className="number">1</span><span className="text">Ücretsiz eğitim al</span>
                            </div>
                            <div>
                                <span className="number">2</span><span className="text">Profesyonel yetkinlikler kazan</span>
                            </div>
                            <div>
                                <span className="number">3</span><span className="text">Yeni mesleğinle işe başla!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className='bg-grey pb-0'>
                <div className="col-12 text-center-mobil px-md-10 px-sm-0 pt-md-10 pt-sm-0">
                    <span className="text-grey">Bu Proje Nasıl Destekleniyor?</span>
                    <p className="text-fontsize"><b>İstanbul Kodluyor</b>, Türkiye’nin ilk sosyal etki tahvili projesidir. Sosyal etki tahvilleri, sosyal sorunlara çözüm bulan, performansa dayalı sözleşmelerdir ve ölçülebilir, pozitif, sosyal ve çevresel etki yaratacak sonuçlara ulaşılmayı amaçlamaktadır.</p>
                </div>
            </Row>

            <Row className='bg-grey pt-0'>
                <div className='col-12 text-center p-10 '>
                    <div className=" partners mt-10 partners-column ">
                        <div>
                            <span className='partners-firstrow'>
                                <img className='tcsan-bak' alt="Sanayi ve Teknoloji Bakanlığır Logo" src="../../../public/assets/images/stb.png" />

                            </span>
                        </div>
                        <div>
                            <span className='partners-firstrow'>
                                <img className='ika' alt="" src="../../../public/assets/images/istka.png" />
                            </span>
                            <span className='partners-firstrow'>
                                <img className='bop' alt="İstanbul Kalkınma Ajansı Logo" src="../../../public/assets/images/boi.png" />
                            </span>
                        </div>
                        <div>
                            <span className='partners-firstrow'>
                                <img className='etki' alt="" src="../../../public/assets/images/etki.png" />
                            </span>
                        </div>
                    </div>
                    <div className='partners mt-20'>
                        <span><span>
                            <img className='enocta enocta-mb' alt="" src="../../../public/assets/images/enocta logo.svg" />
                        </span>
                            <img className='enocta' alt="" src="../../../public/assets/images/tobeto-logo.png" />
                        </span>
                    </div>
                </div>
            </Row>

            <Row className='container-fluid'>
                <div className='sss-banner2'>
                    <h1 className="ch-text">Sıkça Sorulan Sorular</h1>
                </div>
                <div className='row web-pack-green d-flex justify-content-center'>
                    <div className='col-12 p-2'>
                        {
                            faqs.map(item => <Faqs header={item.name} text={item.value} />)
                        }
                    </div>
                </div>
            </Row>
            <Row>
                <div className='sss-banner2 pt-8'>
                    <h1 className="ch-text text-center">Projeden Kareler</h1>
                </div>
            </Row>
            <Row className='bg-white py-0'>

                <div className="gallery-wrapper mt-10 ">
                    <div className="gallery-card">
                        <figure className="card__thumbnail">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/DSC_01824_41b41689ce.JPG" alt="Kampüs buluşması 1" />
                            <span className="card__title">Kampüs buluşması 1</span>
                        </figure>
                        <div className="overlay-bg">
                        </div>
                    </div>
                    <div className="gallery-card">
                        <figure className="card__thumbnail">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/DSC_06023_1491907961.JPG" alt="Kampüs Buluşması 1" />
                            <span className="card__title">Kampüs Buluşması 1</span>
                        </figure>
                        <div className="overlay-bg">
                        </div>
                    </div>
                    <div className="gallery-card">
                        <figure className="card__thumbnail">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/New_Project_2_daa103de14.jpg" alt="Kampüs Buluşması 2" />
                            <span className="card__title">Kampüs Buluşması 2</span>
                        </figure>
                        <div className="overlay-bg">
                        </div>
                    </div>
                    <div className="gallery-card">
                        <figure className="card__thumbnail">
                            <img src="https://tobeto.s3.cloud.ngn.com.tr/DSCF_3893_8edb49df7e.JPG" alt="Feedback Session Meeting" />
                            <span className="card__title">Feedback Session Meeting</span>
                        </figure>
                    </div>
                </div>
            </Row>
            <Row className='bg-darkblue'>
                <div className='col-12 d-flex justify-content-center pt-10'>
                    <span className='footer-logo'>
                        <img className='footer-img' src="../../../public/assets/images/istkodluyorlogo.svg" alt="istanbul kodluyor logo" />
                    </span>
                </div>
                <div className='col-12 my-10 col-lg-auto text-center icon-sec'>
                    <a className="text-decoration-none me-4 icon" href="https://www.facebook.com/tobetoplatform" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                    </a>

                    <a className="text-decoration-none me-4 icon" href="https://www.facebook.com/tobetoplatform" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                    </a>

                    <a className="text-decoration-none me-4 icon" href="https://www.facebook.com/tobetoplatform" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                    </a>

                    <a className="text-decoration-none me-4 icon" href="https://www.facebook.com/tobetoplatform" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                    </a>

                    <a className="text-decoration-none me-4 icon " href="mailto:istanbulkodluyor@tobeto.com" target="blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                    </a>

                </div>

            </Row>
        </Container>
    )
}

export default IstanbulKodluyor