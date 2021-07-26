import React from 'react'

const BlogContentAdmin = () => {
    return (
        <div className="w-full p-10 component">
            <div className="flex-col form">
            <form className="flex-col w-1/2 w-full border-2 "
            >
                <div className="w-full md:flex-row">
                <h3> Blog component</h3>
                <label htmlFor="text" className="mb-3 -mt-10 "> Id </label>
                <input type="text" name="" className="w-full bg-blue-300 border-2 outline-none p-7"/>

                <label htmlFor="text" className="mb-3 -mt-10"> Title</label>
                <input type="text" name="" className="w-full bg-blue-300 border-2 outline-none p-7"/>

                <label htmlFor="text" className="mb-3 -mt-10">Description</label>
                <input type="text" name="" cols="30" rows="10" className="w-full bg-blue-300 border-2 outline-none p-7"/>
                
                <button className="px-4 py-2 mt-5 mb-5 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded justify-items-center hover:bg-blue-500 hover:text-white hover:border-transparent">
                    Add Blog
                </button>
                </div>
            </form>
            
            </div>
        </div>
    )
}

export default BlogContentAdmin;
