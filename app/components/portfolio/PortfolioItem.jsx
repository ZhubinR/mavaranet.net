import Link from 'next/link'

const PortfolioItem = ({ url, imageUrl, title, imageAlt }) => {
    return (
        <Link href={url}>
            <div className="portfolio-item">
                <div className="image">
                    <img src={imageUrl} alt={imageAlt} />
                </div>

                <h3 className="title">
                    {title}
                </h3>
            </div>
        </Link>
    )
}

export default PortfolioItem