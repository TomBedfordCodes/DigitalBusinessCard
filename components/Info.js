import React from "react"


export function Info () {
    return (
        <section className="info">
            <img className="info-img" src="./images/me-pic.jpg" />
                <div className="container">
                <h1>Tom Bedford</h1>
                <h4>Developer</h4>
                <p>tombedfordcodes.github.com</p>
                <div className="info-btns">
                    <a>Email</a>
                    <a>LinkedIn</a>
                </div>
            </div>
        </section>   
    )
}