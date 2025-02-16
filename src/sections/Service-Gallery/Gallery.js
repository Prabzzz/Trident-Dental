import React from 'react';
import './Gallery.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imgOne from '../../assets/servicePage/gallery/1.png';
import imgTwo from '../../assets/servicePage/gallery/2.png';
import imgThree from '../../assets/servicePage/gallery/3.png';
import imgFour from '../../assets/servicePage/gallery/4.png';
import imgFive from '../../assets/servicePage/gallery/5.png';
import imgSix from '../../assets/servicePage/gallery/6.png';

// Import KSP camp images (1 to 28) with .jpg extension
import Ksp1 from '../../assets/servicePage/ksp-camp/ksp1.jpg';
import Ksp2 from '../../assets/servicePage/ksp-camp/ksp2.jpg';
import Ksp3 from '../../assets/servicePage/ksp-camp/ksp3.jpg';
import Ksp4 from '../../assets/servicePage/ksp-camp/ksp4.jpg';
import Ksp5 from '../../assets/servicePage/ksp-camp/ksp5.jpg';
import Ksp6 from '../../assets/servicePage/ksp-camp/ksp6.jpg';
import Ksp7 from '../../assets/servicePage/ksp-camp/ksp7.jpg';
import Ksp8 from '../../assets/servicePage/ksp-camp/ksp8.jpg';
import Ksp9 from '../../assets/servicePage/ksp-camp/ksp9.jpg';
import Ksp10 from '../../assets/servicePage/ksp-camp/ksp10.jpg';
import Ksp11 from '../../assets/servicePage/ksp-camp/ksp11.jpg';
import Ksp12 from '../../assets/servicePage/ksp-camp/ksp12.jpg';
import Ksp13 from '../../assets/servicePage/ksp-camp/ksp13.jpg';
import Ksp14 from '../../assets/servicePage/ksp-camp/ksp14.jpg';
import Ksp15 from '../../assets/servicePage/ksp-camp/ksp15.jpg';
import Ksp16 from '../../assets/servicePage/ksp-camp/ksp16.jpg';
import Ksp17 from '../../assets/servicePage/ksp-camp/ksp17.jpg';
import Ksp18 from '../../assets/servicePage/ksp-camp/ksp18.jpg';
import Ksp19 from '../../assets/servicePage/ksp-camp/ksp19.jpg';
import Ksp20 from '../../assets/servicePage/ksp-camp/ksp20.jpg';


// Store all KSP camp images in an array
const sliderImages = [
    Ksp1, Ksp2, Ksp3, Ksp4, Ksp5, Ksp6, Ksp7, Ksp8, Ksp9, Ksp10, 
    Ksp11, Ksp12, Ksp13, Ksp14, Ksp15, Ksp16, Ksp17, Ksp18, Ksp19, Ksp20
];


const Gallery = () => {
    return (
        <section className='gallery-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="Gallery"
                    title="Delve Into Our World"
                    description="Explore the heart of our mission and the passion that fuels us. Get to know the team and the values that drive our innovations."
                />
                <div className="row">
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgOne} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgTwo} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgThree} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFour} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgFive} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="gallery-img">
                            <img src={imgSix} alt="gallery" />
                        </div>
                    </div>
                </div>
                {/* Image Carousel (Only for New Images) */}
                <div className="camp-gallery-container">
                    <h3 className="camp-gallery-title">Dental Camp @ KSP English HSS school, Pondicherry, dated 04.02.2025</h3>
                    <div className="gallery-carousel">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                        >
                            {sliderImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="carousel-img">
                                        <img src={img} alt={`slide-${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;