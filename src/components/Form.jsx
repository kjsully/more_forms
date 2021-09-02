import React, { useState } from 'react'

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
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    First Name:
                    <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} id="" />
                    {(validState.firstName) ? <p>First Name must be at least 2 characters</p> : null}
                </p>
                <p>
                    Last Name:
                    <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} id="" />
                    {(validState.lastName) ? <p>Last Name must be at least 2 characters</p> : null}
                </p>
                <p>
                    Email:
                    <input type="text" name="email" value={formState.email} onChange={handleChange} id="" />
                    {(validState.email) ? <p>Your email must be at least 5 characters</p> : null}
                </p>
                <p>
                    Password:
                    <input type="password" name="password" value={formState.password} onChange={handleChange} id="" />
                    {(validState.password) ? <p>Password must be at least 8 characters</p> : null}
                </p>
                <p>
                    Confirm Password:
                    <input type="password" name="confPassword" value={formState.confPassword} onChange={handleChange} id="" />
                    {(validState.confPassword) ? <p>Passwords must match</p> : null}
                </p>
                <button type="submit">Create User</button>
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