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
                    <User name={Users[0].name} role={Users[0].role} email={Users[0].email} />
                    <User name={Users[1].name} role={Users[1].role} email={Users[1].email} />
                    <User name={Users[2].name} role={Users[2].role} email={Users[2].email} />
                    <User name={Users[3].name} role={Users[3].role} email={Users[3].email} />
                    <User name={Users[4].name} role={Users[4].role} email={Users[4].email} />
                </tbody>

            </table>
        </section>
    )
}