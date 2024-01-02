import Image from 'next/image'

const RatingItem = ({ url, name, number, count , alt }) => {
    return (
        <div className={`rating-item ${count}`} >
            <div className="icon">
                <div className="icon-wrapper">
                    <Image
                        src={url}
                        width={64}
                        height={64}
                        alt={alt}
                    />
                </div>
            </div>
            <div className="text">
                <span className="name">{name}</span>
                <span className="number">{number}</span>
            </div>
        </div>
    )
}

export default RatingItem