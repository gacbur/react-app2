import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';


const Contact = () => {

    return (
        <>
            <div className="form">
                <h2>Contact us!</h2>
                <form >
                    <div className="form-control">
                        <label >Name</label>
                        <input name="name" type="text"></input>
                    </div>
                    <div className="form-control">
                        <label >Surname</label>
                        <input name="surname" type="text" ></input>
                    </div>
                    <div className="form-control">
                        <label >Message</label>
                        <textarea name="message" ></textarea>
                    </div>
                    <button>Send</button>

                </form>
            </div>
        </>
    );
}

export default Contact;