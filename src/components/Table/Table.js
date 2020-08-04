import React from "react";
import User from "../User/User";
import "./table.css";

export default function Table(props) {

    return (
        <section className="container">
            <table className="highlight">

                <thead>
                    <tr>
                        <th className={props.sortBy === "lastName" ? "pointer teal-text" : "pointer"} onClick={() => props.columnSort("lastName", props.nameOrder)}><span className="left">Name</span>
                            {
                                props.nameOrder === 1 && props.sortBy === "lastName" ? <i className="material-icons">arrow_drop_down</i> : <i className="material-icons">arrow_drop_up</i>
                            }
                        </th>
                        <th className={props.sortBy === "department" ? "pointer teal-text" : "pointer"} onClick={() => props.columnSort("department", props.departOrder)}><span className="left">Department</span>
                            {
                                props.departOrder === 1 && props.sortBy === "department" ? <i className="material-icons">arrow_drop_down</i> : <i className="material-icons">arrow_drop_up</i>
                            }
                        </th>
                        <th className={props.sortBy === "role" ? "pointer teal-text" : "pointer"} onClick={() => props.columnSort("role", props.roleOrder)}><span className="left">Role</span>
                            {
                                props.roleOrder === 1 && props.sortBy === "role" ? <i className="material-icons">arrow_drop_down</i> : <i className="material-icons">arrow_drop_up</i>
                            }
                        </th>
                        <th><span className="left">Email</span></th>
                    </tr>
                </thead>

                <tbody>

                    {props.users.map(user => {
                        let id = props.users.indexOf(user);

                        let profileImage;

                        if (user.image === undefined) {
                            profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7E2PbZHE_mk95sIV_9XZ4bKXjouSf7XDDCw&usqp=CAU"
                        } else {
                            profileImage = user.image;
                        }

                        return <User image={profileImage} firstName={user.firstName} lastName={user.lastName} department={user.department} role={user.role} email={user.email} key={id} />
                    })}

                </tbody>

            </table>
        </section>
    )
}
