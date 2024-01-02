import AboutContent from './AboutContent';

const AboutSection = () => {
    return (
        <div className="section about wrapper pb-0">
            
            <video className="aboutVideo" autoPlay="autoplay" muted loop >
                <source src="/videos/about.webm" type="video/webm" />
            </video>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">

                        <AboutContent
                            title={`آژانس برندینگ پزشکی ماورانت`}
                            subtitle={`در کنارتان می مانیم ...`}
                            desc={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد`}
                        />

                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection