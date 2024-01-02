import { Swiper, SwiperSlide } from 'swiper/react';
import BlogItem from './BlogItem';

import 'swiper/css';

const BlogSection = () => {
    return (
        <div className="section blog wrapper">

            <div className="container">
                <div className="sectionTitle">
                    <h3>آخرین اخبار و مقالات</h3>
                </div>
            </div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    setTimeout: 3000,
                }}

                navigation={false}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}

                spaceBetween={32}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1366: {
                        slidesPerView: 4,
                    }
                }}
            >
                <SwiperSlide
                    className='translate'
                >
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className='translate'
                >
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className='translate'
                >
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className='translate'
                >
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className='translate'
                >
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem
                        url={`#`}
                        imageUrl={`/images/blogitempic.jpg`}
                        title={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم`}
                        description={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`}
                        updatedAt={`5 مهر 1402`}
                        readingTime={`7 دقیقه`}
                        tag={`برنامه نویسی`}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default BlogSection