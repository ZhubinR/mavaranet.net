import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const RatingBgSliders = ({rightClass}) => {
  return (
    <div className={`bgSlide ${rightClass}`}>

            <Swiper
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                
                parallax={true}
                navigation={false}
                pagination={false}
                spaceBetween={32}
                breakpoints={{
                    0: {
                        slidesPerView: 3.5,
                    }
                }}
            >
                <SwiperSlide>
                    <Image
                        src={`/images/slide1.jpg`}
                        width={281}
                        height={175}
                        alt='slide1'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={`/images/slide2.jpg`}
                        width={281}
                        height={175}
                        alt='slide2'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={`/images/slide3.jpg`}
                        width={281}
                        height={175}
                        alt='slide3'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={`/images/slide4.jpg`}
                        width={281}
                        height={175}
                        alt='slide4'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={`/images/slide5.jpg`}
                        width={281}
                        height={175}
                        alt='slide5'
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={`/images/slide6.jpg`}
                        width={281}
                        height={175}
                        alt='slide6'
                    />
                </SwiperSlide>
            </Swiper>


        </div>
  )
}

export default RatingBgSliders