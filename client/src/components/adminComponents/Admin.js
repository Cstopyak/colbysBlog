import React from 'react'
import {Link} from 'react-router-dom';
import BlogContentAdmin from './BlogContentAdmin';


const admin = () => {
    return (
        <div className="max-w-full m-auto main-container">
            <h2>Admin Form</h2>
            <div className="admin-center">
            <h4 className="admin-title">Blog component</h4>
                <BlogContentAdmin/>

            </div>
            
        </div>
    )
}

export default admin;
