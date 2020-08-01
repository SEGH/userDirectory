import React from "react";
import User from "../User/User";
import Users from "../../users.json";

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
                    {Users.map(user => <User image={user.image} name={user.name} role={user.role} email={user.email} />)}
                </tbody>

            </table>
        </section>
    )
}