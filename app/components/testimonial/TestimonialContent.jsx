import Image from 'next/image'

const TestimonialContent = ({ name, job, desc, date }) => {
    return (
        <div className="testemonial-content">
            <div className="icon">
                <Image
                    width={100}
                    height={100}
                    src={`/images/quote.png`}
                    alt='quote'
                />
            </div>
            <p className="name">{name}</p>
            <p className="job">{job}</p>
            <p className="desc">
                {desc}
            </p>
            <div className="detail-row">
                <div className="stars">
                    <Image
                        src={`/images/stars.svg`}
                        alt='stars'
                        width={268}
                        height={36}
                    />
                </div>
                <span className="date">
                    {date}
                </span>
            </div>
        </div>
    )
}

export default TestimonialContent