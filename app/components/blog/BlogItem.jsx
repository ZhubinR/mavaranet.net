import Link from 'next/link'
import Image from 'next/image'

const BlogItem = ({url, imageUrl, title, description, updatedAt, readingTime, tag}) => {
  return (
    <Link href={url}>
            <div className="blog-item">
                <div className="image">
                    <Image
                        src={ imageUrl }
                        width={656}
                        height={358}
                        alt={ title }
                    />
                </div>
                <div className="content">
                    <h3 className="title">
                        { title }
                    </h3>
                    <p className="desc">{ description }</p>
                </div>
                <div className="detail">

                    <div className="date">
                        <Image
                            src={`/images/calender.svg`}
                            width={20}
                            height={20}
                            alt="date"
                        />
                        <span>{ updatedAt }</span>
                    </div>
                    <div className="readingTime" aria-label="reading time">
                        <Image
                            src={`/images/time.svg`}
                            width={20}
                            height={20}
                            alt="reading time"
                        />
                        <span>{ readingTime }</span>
                    </div>
                    <div className="tag">{ tag }</div>
                </div>
            </div>
        </Link>
  )
}

export default BlogItem