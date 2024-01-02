const MavaratebContent = ({ title, subtTitle, desc }) => {
    return (
        <div className="mavarateb-content">
            <h3 className="title">{title}</h3>
            <p className="subTitle">{subtTitle}</p>
            <p className="desc">
                {desc}
            </p>
            <div className="detail-row"></div>
            <a className="custom-btn" href="https://mavarateb.com/">
                <span>
                    سامانه ماوراطب
                </span>
            </a>
        </div>
    )
}

export default MavaratebContent