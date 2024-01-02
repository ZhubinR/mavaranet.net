import TestimonialImage from './TestimonialImage';
import TestimonialContent from './TestimonialContent';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const TestimonialSection = () => {
    return (
        <div className="section testemonial wrapper pb-0">
            <Image
                className="patternBg"
                src="/images/Vector-service-bg.png"
                width="1234"
                height="583"
                alt="pattern background"
            />
            <div className="container">
                <div className="sectionTitle position-relative ">
                    <h3 className="mb-0">نظرات پزشکان ماورانت</h3>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={false}

                    spaceBetween={30}
                    speed={750}
                >

                    <SwiperSlide>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-7 position-relative">
                                <TestimonialContent
                                    name={`دکتر هومن عشقی`}
                                    job={`دندانپزشک زیبایی`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد`}
                                    date={`13 اردیبهشت 1401`}
                                />

                            </div>
                            <div className="col-lg-4">

                                <TestimonialImage
                                    url={`/images/testemonialPic.png`}
                                    alt={`hooman eshghi`}
                                />

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-7">

                                <TestimonialContent
                                    name={`دکتر هومن عشقی`}
                                    job={`دندانپزشک زیبایی`}
                                    desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد`}
                                    date={`13 اردیبهشت 1401`}
                                />

                            </div>
                            <div className="col-lg-4">

                                <TestimonialImage
                                    url={`/images/testemonialPic.png`}
                                    alt={`hooman eshghi`}
                                />

                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default TestimonialSection