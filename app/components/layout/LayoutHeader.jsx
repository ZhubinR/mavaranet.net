import React from "react"
import Image from "next/image"


const LayoutHeader = () => {
    return (
        <header className="header">
            <Image
                className="header_logo"
                src="/images/mainLogo.png"
                alt="logo"
                width={137}
                height={69}
                priority={true}
            />
            <span className="header_line"></span>
        </header>
    )
}
export default LayoutHeader

