import React from "react";
import User from "../User/User";

export default function Table(props) {
    return (
        <section className="container">
            <table className="highlight">

                <thead>
                    <tr>
                        <th onClick={() => props.columnSort("lastName", props.nameOrder)}>Name</th>
                        <th onClick={() => props.columnSort("department", props.departOrder)}>Department</th>
                        <th onClick={() => props.columnSort("role", props.roleOrder)}>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>

                    {props.users.map(user => {
                        let profileImage;

                        if (user.image === undefined) {
                            profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7E2PbZHE_mk95sIV_9XZ4bKXjouSf7XDDCw&usqp=CAU"
                        } else {
                            profileImage = user.image;
                        }

                        return <User image={profileImage} firstName={user.firstName} lastName={user.lastName} department={user.department} role={user.role} email={user.email} />
                    })}

                </tbody>

            </table>
        </section>
    )
}
