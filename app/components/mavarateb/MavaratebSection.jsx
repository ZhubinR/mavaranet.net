import MavaratebContent from './mavaratebContent';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const MavaratebSection = () => {
    return (
        <div className="section mavarateb wrapper">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="mavarateb-image">

                            <Image
                                className="back"
                                src={`/images/teb-back.png`}
                                width={512}
                                height={512}
                                alt="background"
                            />
                            <Swiper
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                }}
                                observer={true}
                                observeParents={true}
                                navigation={false}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                
                                <SwiperSlide>
                                    <Image
                                        src={`/images/mavarateb-mockup.png`}
                                        width={295}
                                        height={604}
                                        alt="mavarateb interface"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={`/images/mavarateb-mockup2.png`}
                                        width={295}
                                        height={604}
                                        alt="mavarateb interface 2"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src={`/images/mavarateb-mockup3.png`}
                                        width={295}
                                        height={604}
                                        alt="mavarateb interface 3"
                                    />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <MavaratebContent
                            title={`سامانه ماوراطب`}
                            subtTitle={`سامانه نوبت دهی  آنلاین و مشاوره آنلاین پزشکی`}
                            desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MavaratebSection