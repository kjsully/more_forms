import React from 'react'

const Display = props => {

    const { allUsers } = props

    return (
        <fieldset>
            <p>hello</p>
            {
                props.allUsers.map((user, i) => {
                    return (
                        <div>
                            <li key={i}>Name: {user.firstName} {user.lastName}</li>
                            <li key={i}>Email: {user.email} </li>
                            <li key={i}>Password: {user.password}</li>
                            <li key={i}>Password Confirmation: {user.passwordConf} </li>
                        </div>
                    )
                }
                )
            }
        </fieldset>
    )

}
export default Display;