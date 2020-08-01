import React from "react";
import User from "../User/User";

export default function Table(props) {
    return (
        <section className="container">
            <table className="highlight">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {props.users.map(user => <User image={user.image} name={user.name} role={user.role} email={user.email} />)}
                </tbody>

            </table>
        </section>
    )
}
