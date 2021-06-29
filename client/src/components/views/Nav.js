import React from 'react'
import { Link } from 'react-router-dom';




const Nav = () => {
    return (
        <div className="flex justify-center h-16 bg-blue-300 md:container md:mx-auto">
            
            <div className="p-4">
                <h2>Latest on my technology challenges
                    
                </h2>
            </div>

            <div className="p-4 underline animate-pulse">
                <h2>
                    <a href ="/">Learn more about me</a>

                </h2>

            </div>
        </div>
    )
}

export default Nav;



