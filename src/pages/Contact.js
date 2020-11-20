import React, { useState } from 'react';
import '../styles/Contact.css';


const Contact = () => {

    const [state, setState] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false,
        message: false,
        showError: false
    })

    const messages = {
        name_incorrect: 'Name cannot be empty ',
        surname_incorrect: 'Surname cannot be empty ',
        email_incorrect: 'Email has no "@", and cannot be empty ',
        message_incorrect: 'Message cannot be empty '
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formValidation = validateForm()
        if (formValidation.formCorrect) {
            setState({
                name: '',
                surname: '',
                email: '',
                message: ''
            })
            setErrors({
                name: false,
                surname: false,
                email: false,
                message: false,
                showError: false
            })
        }
        else {
            setErrors({
                name: !formValidation.name,
                surname: !formValidation.surname,
                email: !formValidation.email,
                message: !formValidation.message,
                showError: true
            })
        }

    }

    const validateForm = () => {

        let name = false;
        let surname = false;
        let email = false;
        let message = false;

        let formCorrect = false

        if (state.name !== '' && state.name.indexOf(' ') === -1) {
            name = true
        }

        if (state.surname !== '' && state.surname.indexOf(' ') === -1) {
            surname = true
        }

        if (state.email !== '' && state.email.indexOf('@') !== -1) {
            email = true
        }

        if (state.message !== '') {
            message = true
        }

        if (name && surname && email && message) {
            formCorrect = true
        }

        return ({
            name,
            surname,
            email,
            message,
            formCorrect
        })
    }

    const { name, surname, email, message } = state

    return (
        <div className="form-cnt">
            {errors.showError ? <div className="form-error">
                {errors.name ? messages.name_incorrect : null},
                {errors.surname ? messages.surname_incorrect : null},
                {errors.email ? messages.email_incorrect : null},
                {errors.message ? messages.message_incorrect : null},
            </div> : null}
            <div className="form">
                <h2>Contact us!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label >Name</label>
                        <input value={name} onChange={handleInput} name="name" type="text"></input>

                    </div>
                    <div className="form-control">
                        <label >Surname</label>
                        <input value={surname} onChange={handleInput} name="surname" type="text" ></input>
                    </div>
                    <div className="form-control">
                        <label >email</label>
                        <input value={email} onChange={handleInput} name="email" type="text" ></input>
                    </div>
                    <div className="form-control">
                        <label  >Message</label>
                        <textarea value={message} onChange={handleInput} name="message" ></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;