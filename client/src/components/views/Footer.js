import React from 'react'

const Footer = () => {
    return (
        <div className="relative flex justify-between bg-blue-300 md:container md:mx-auto ">
            <div className="pl-4 rights">Hello from footer</div>
            <div className="pr-4 media">
                <li> <a href="">LinkedIn</a></li>
                <li> <a href="">Github</a></li>
                <li> <a href="">Portfolio</a></li>

            </div>
        </div>
    )
}

export default Footer;
