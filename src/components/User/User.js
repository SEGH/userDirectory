import React from "react";
import "./user.css";

export default function User(props) {
    return (
        <tr>
            <td>
                <img src={props.image} alt={props.lastName + " image"} className="circle left z-depth-2" />
                <h4 className="flow-text center-align">{props.firstName} {props.lastName}</h4>
            </td>
            <td>{props.department}</td>
            <td>{props.role}</td>
            <td>{props.email}</td>
        </tr>
    )
}