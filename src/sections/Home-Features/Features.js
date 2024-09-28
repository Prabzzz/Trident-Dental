import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import IconList from '../../components/IconList/IconList';
import featuresData from './FeaturesData';

const Features = () => {
    return (
        <section className='section-bg section-common features-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="Features" title="Specialized  care through experiences" description="Expert dental solutions tailored to your needs, delivered by a team with advanced training and hands-on experience. Our personalized approach ensures the best possible care for every patient."/>

                <div className="row align-items-center">
                    {
                        featuresData.map(singleFeature => 
                            <IconList 
                                icon={singleFeature.icon} 
                                title={singleFeature.title}
                                description={singleFeature.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;