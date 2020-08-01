import React from "react";
import "./user.css";

export default function User(props) {
    return (
        <tr>
            <td>
                <img src={props.image} className="circle left z-depth-2" />
                <h4 className="flow-text center-align">{props.name}</h4>
            </td>
            <td>{props.role}</td>
            <td>{props.email}</td>
        </tr>
    )
}