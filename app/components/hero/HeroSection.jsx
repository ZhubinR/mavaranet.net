import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="section hero">
            <div className="hero_effect">
                <div className="overlay"></div>
                <div className="pageTitle">
                    <h1 className="title">
                        آژانس برندینگ پزشکی ماورانت
                    </h1>
                    <p className="subTitle">در کنارتان میمانیم</p>
                </div>
                <div className="scroll-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Image
                    className="hero_image"
                    src="/images/introPic.jpg"
                    width={"1920"}
                    height="1080"
                    style={{ objectFit: "cover" }}
                    quality={100}
                    alt="hero image"
                />

                <div className="pic-wrapper">
                    <Image
                        className="hero_pics one"
                        src="/images/introPartPic1.png"
                        width="483"
                        height="283"
                        priority={true}
                        alt="hero pic 1"
                    />
                    <Image
                        className="hero_pics two"
                        src="/images/introPartPic2.png"
                        width="340"
                        height="199"
                        alt="hero pic 2"
                    />
                    <Image
                        className="hero_pics three"
                        src="/images/introPartPic3.png"
                        width="286"
                        height="167"
                        alt="hero pic 3"
                    />
                    <Image
                        className="hero_pics four"
                        src="/images/introPartPic4.png"
                        width="455"
                        height="267"
                        alt="hero pic 3"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection