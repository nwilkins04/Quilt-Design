import React, {Component} from "react";

import './members.css';

import Title from "./components/Header/Title"

class Members extends Component {
    render() {
        return (
            <div className="memberPage">
                <header>
                <strong>Welcome!</strong>
                </header>
                <div className= "App"><Title/></div>
                <div className="container">
                    <div className="SavedQuilts">
                        <h2>Your Saved Quilts</h2>
                    </div>
                    <div className="LargerView">
                        <h2>Quilting Resources</h2>
                        <p>
                            <li><a href = "https://quiltersresources.com/">Quilters Resources</a></li>
                            <li><a href = "https://www.textileartist.org/top-10-quilting-books">Top 10 quilting books</a></li>
                            <li><a href = "https://www.brewersewing.com/">Brewer Sewing</a></li>
                            <li><a href = "https://www.yelp.com/search?find_desc=Quilt+Shop&find_loc=Orlando%2C+FL">Local Quilt Shops</a></li>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Members;