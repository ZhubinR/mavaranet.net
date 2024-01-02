const AboutContent = ({title, subtitle , desc,}) => {
    return (
        <div className="about_content">
            <div className="titleWrapper">
                <h3 className="mainTitle">
                    {title}
                </h3>

                <p className="subTitle ms-2">
                    {subtitle}
                </p>
            </div>
            <p className="desc">
                {desc}
            </p>
            <button className="btn custom-btn">
                <span>درباره ما</span>
            </button>
        </div>
    )
}

export default AboutContent