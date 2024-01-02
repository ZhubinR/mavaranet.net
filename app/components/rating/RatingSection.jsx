import Image from 'next/image'
import RatingBgSliders from './RatingBgSliders'
import RatingItem from './ratingItem'

const RatingSection = () => {
    return (
        <div className="section rating wrapper pb-0">
            <span className="shadow"></span>
            <Image
                className="rating-bg"
                src={`/images/globe-rating.png`}
                width={700}
                height={700}
                alt='section background'
            />

            <RatingBgSliders
                rightClass={null}
            />
            <RatingBgSliders
                rightClass={`right`}
            />


            <div className="container">
                <span className="line"></span>
                <div className="row align-items-center">
                    <div className="col-lg-3">

                        <RatingItem
                            url={`/images/rating/project.svg`}
                            name={`تعداد پروژه ها `}
                            number={`+2361`}
                            count={``}
                            alt={`پروژه`}
                        />

                    </div>
                    <div className="col-lg-3">
                        <RatingItem
                            url={`/images/rating/workExp.svg`}
                            name={`سابقه کار`}
                            number={`+15 سال`}
                            count={`one`}
                            alt={`سابقه کار`}
                        />
                    </div>
                    <div className="col-lg-3">
                        <RatingItem
                            url={`/images/rating/employee.svg`}
                            name={`پرسنل متخصص`}
                            number={`130+  نفر`}
                            count={`two`}
                            alt={`پرسنل متخصص`}

                        />
                    </div>
                    <div className="col-lg-3">
                        <RatingItem
                            url={`/images/rating/sections.svg`}
                            name={`واحد های تخصصی `}
                            number={`9 واحد`}
                            count={`three`}
                            alt={`واحد های تخصصی `}
                        />
                    </div>
                </div>
                <span className="line "></span>

            </div>
        </div>
    )
}

export default RatingSection