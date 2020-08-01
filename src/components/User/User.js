import React from "react";

export default function User(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.role}</td>
            <td>{props.email}</td>
        </tr>
    )
}