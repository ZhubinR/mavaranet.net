'use client'
import './styles/styles.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import HeroSection from './components/hero/HeroSection';
import ServiceSection from './components/service/ServicesSection';
import AboutSection from './components/about/AboutSection';
import RoadmapSection from './components/roadmap/RoadmapSection';
import MavaratebSection from './components/mavarateb/MavaratebSection';
import TestimonialSection from './components/testimonial/TestimonialSection';
import RatingSection from './components/rating/RatingSection';
import BlogSection from './components/blog/BlogSection';

function Home() {
    const sectionStyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        justifyContent: 'center'
    }

    return (
        <main>
            <Fullpage>
                <FullPageSections>

                    <FullpageSection style={sectionStyle}>
                        <HeroSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <ServiceSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <AboutSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <RoadmapSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <TestimonialSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <MavaratebSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <RatingSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        <BlogSection/>
                    </FullpageSection>

                    <FullpageSection style={sectionStyle}>
                        
                    </FullpageSection>

                </FullPageSections>
            </Fullpage>
        </main>
    )
}

export default Home;