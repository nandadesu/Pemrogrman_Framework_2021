import React, { Component } from 'react'
import './login.css';

export default class login extends Component {
    render() {
        return (
            <div>
              <h2>Login Form</h2>
              <form>
                  <h1>Tugas Pertemuan Ketiga</h1>
                  <div className="container">
                    <p>
                      <label><b>Username</b></label>
                      <input type="text" placeholder="Masukkan Username" name="username" required/>
                    </p>

                    <p>
                      <label><b>Password</b></label>
                      <input type="password" placeholder="Masukkan Password" name="password" required/>
                    </p>  

                    <button type="submit">Login</button>
                    <input type="checkbox" defaultChecked/> Remember me
                  </div>
                  <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                  </div>
              </form>
            </div>
        )
    }
}
