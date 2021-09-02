import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {
    // const [firstName, setFirstName] =useState('')
    // const [lastName, setLastName] =useState('')
    // const [email, setEmail] =useState('')
    // const [password, setPassword] = useState('')

    const { setLoggedUsers, loggedUsers } = props

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confPassword: ''
    })

    const [validState, setValidState] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confPassword: false
    })


    const handleChange = event => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (formState.firstName.length < 2) {
            var firstName = true
        }
        if (formState.lastName.length < 2) {
            var lastName = true
        }
        if (formState.email.length < 5) {
            var email = true
        }
        if (formState.password.length < 8) {
            var password = true
        }
        if (formState.password !== formState.confPassword) {
            var confPassword = true
        }

        setValidState({
            ...validState,
            firstName,
            lastName,
            email,
            password,
            confPassword
        })

        setLoggedUsers([...loggedUsers, formState])

        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confPassword: ''
        })
    }



    return (
        <fieldset class= "bg-dark border border-primary border-2 m-2 p-3">
            <form onSubmit={handleSubmit}>
                <div class="row">
                <h1>Welcome to My Form
      </h1>

                    <div class="col-3">

                        <input class="form-control m-3" type="text" name="firstName" placeholder="First Name" value={formState.firstName} onChange={handleChange} id="" />
                        {(validState.firstName) ? <p>First Name must be at least 2 characters</p> : null}
                    </div>

                    <div class="col-3">
                        <input class="form-control m-3" type="text" name="lastName" placeholder="Last Name" value={formState.lastName} onChange={handleChange} id="" />
                        {(validState.lastName) ? <p>Last Name must be at least 2 characters</p> : null}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="text" name="email" placeholder="Email" value={formState.email} onChange={handleChange} id="" />
                        {(validState.email) ? <p>Your email must be at least 5 characters</p> : null}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="password" name="password" placeholder="Password" value={formState.password} onChange={handleChange} id="" />
                        {(validState.password) ? <p>Password must be at least 8 characters</p> : null}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="password" name="confPassword" placeholder="Confirm Password" value={formState.confPassword} onChange={handleChange} id="" />
                        {(validState.confPassword) ? <p>Passwords must match</p> : null}
                    </div>
                    <div class="row-2 align-items-center mb-3">
                        <button type="submit" class="btn btn-primary">Create User</button>
                    </div>

                </div>
            </form>
            <div>
                <p>First Name: {formState.firstName}</p>
                <p>Last Name: {formState.lastName}</p>
                <p>Email: {formState.email}</p>
                <p>Password: {formState.password}</p>
                <p>Confirm Password: {formState.confPassword}</p>
            </div>
        </fieldset>
    )
}

export default Form