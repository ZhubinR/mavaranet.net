import Image from 'next/image'

const TestimonialImage = ({url , alt}) => {
  return (
    <div className="testemonial-image">
            <Image
                className="doc-image"
                src={url}
                width={351}
                height={508}
                alt={alt}
            />
        </div>
  )
}

export default TestimonialImage