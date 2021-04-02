import React, { Component } from 'react'
import '../css/About.css'
export class About extends Component {
    render() {
        return (
            <div className="about">
                <img src={require('../images/Profile.jpg')} alt='logo' />
                <div className="square">
                    <div className="rows">
                        <h2 className="name">Hi! Saya Gusti Ananda</h2>
                        <span></span>    
                    </div>
                    <p className="nim">NIM : 1841720131</p>
                    <p className="kls">Kelas : TI-3E</p>
                </div>
            </div>
        )
    }
}

export default About

//<span>NIM : 1841720131</span>
//<span>Kelas : TI-3E</span>