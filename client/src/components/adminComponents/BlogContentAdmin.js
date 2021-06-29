import React from 'react'

const BlogContentAdmin = () => {
    return (
        <div className="border-2">
            <form className="border-2"
            >
                <h3> Blog component</h3>
                <label htmlFor="text"> Id </label>
                <input type="text" name=""/>

                <label htmlFor="text"> Title</label>
                <input type="text" name="" />

                <label htmlFor="text">Description</label>
                <input type="text" name="" cols="30" rows="10"/>
                
                <button className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                    Add Blog
                </button>
            </form>
        </div>
    )
}

export default BlogContentAdmin;
