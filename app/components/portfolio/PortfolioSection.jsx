import PortfolioFilter from './PortfolioFilter';
import PortfolioItem from './PortfolioItem';
import Link from 'next/link';


const PortfolioSection = () => {
    return (
        <div className="section portfolio wrapper">
            <div className="sectionTitle">
                <h3>نمونه کارهای ماورانت</h3>
            </div>

            <div className="container">
                <PortfolioFilter />

                <div className="row mb-5 ps-4 align-items-center justify-content-center" id='portfolio'>
                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <div className="col-lg-6 mb-5">
                        <PortfolioItem
                            url={`#`}
                            imageAlt={`دکتر نیلفروش زاده`}
                            imageUrl={`/images/portfolio.jpg`}
                            title={`دکتر نیلفروش زاده - فوق تخصص پوست ، مو و زیبایی`}
                        />
                    </div>

                    <Link href={`#`} className='custom-btn'>
                        <span>مشاهده بیشتر</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection