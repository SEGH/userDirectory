import React from "react";
import User from "../User/User";

export default function Table() {
    return (
        <table className="highlight">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                <User />
            </tbody>

        </table>
    )
}