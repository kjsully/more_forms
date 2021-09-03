import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = props => {
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const [user, setUser] = useState({});

    const [nameError, setNameErr] = useState("");

    const createUser = (e) => {
        e.preventDefault()
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confPassword
        }
        setUser(newUser);
        props.addNewUser(newUser);
    }

    const fnLength = (aString) => {
        console.log(aString);
        setFirstName(aString);
        if (aString.length < 3) {
            console.log("test");
            setNameErr("must be longer than 3 characters");
        } else {
        setNameErr("")
    }
    }



    return (
        <fieldset class= "bg-dark border border-primary border-2 m-2 p-3">
            <form onSubmit={createUser}>
                <div class="row">
                    {JSON.stringify(nameError)}<br/>{JSON.stringify(firstName)}
                <h1>Welcome to My Form</h1>

                    <div class="col-3">

                        <input class="form-control m-3" type="text" name="firstName" placeholder="First Name" onChange={(e) => fnLength(e.target.value)} value={firstName} /><br/>
                        {nameError}
                    </div>

                    <div class="col-3">
                        <input class="form-control m-3" type="text" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        {/* {(validState.lastName) ? <p>Last Name must be at least 2 characters</p> : null} */}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        {/* {(validState.email) ? <p>Your email must be at least 5 characters</p> : null} */}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        {/* {(validState.password) ? <p>Password must be at least 8 characters</p> : null} */}
                    </div>

                    <div class="col-5">
                        <input class="form-control m-3" type="password" name="confPassword" placeholder="Confirm Password" onChange={ (e) => setConfPassword(e.target.value)} value={confPassword} />
                        {/* {(validState.confPassword) ? <p>Passwords must match</p> : null} */}
                    </div>
                    <div class="row-2 align-items-center mb-3">
                        <button type="submit" class="btn btn-primary">Create User</button>
                    </div>

                </div>
            </form>
            <div>
                <p>First Name: <p class="text-success">{firstName}</p></p>
                <p>Last Name: <p class="text-success">{lastName}</p></p>
                <p>Email: <p class="text-success">{email}</p></p>
                <p>Password: <p class="text-success">{password}</p></p>
                <p>Confirm Password: <p class="text-success">{confPassword}</p></p>
            </div>
        </fieldset>
    )
}

export default Form