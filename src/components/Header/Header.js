import React from "react";
import "./header.css";

export default function Header(props) {
    return (
        <header>

            <nav className={"nav-extended " + props.brandColor}>

                <div className="nav-wrapper">
                    <a href="http://localhost:3000/#" className="brand-logo center">
                        <img src={props.companyLogo} className="circle left z-depth-5" />
                        <span className="flow-text hide-on-med-and-down" id="largeTitle">{props.companyName} Directory</span>
                        <span className="flow-text hide-on-large-only">{props.companyName} Directory</span>
                    </a>
                </div>

                <div className="nav-content row">
                    <form className="col m3 offset-m5">
                        <div className="input-field">
                            <input id="search" value={props.searchValue} type="search" required onChange={(event) => {
                                
                                props.search(event);
                            }}/>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons" onClick={() => {
                                props.clear();
                            }}>close</i>
                        </div>
                    </form>

                    <a class="btn-floating btn-large halfway-fab waves-effect waves-light" onClick={() => {
                        props.changeCompany();
                    }}>
                        <i class="material-icons">switch_left</i>
                    </a>
                </div>

            </nav>

        </header>
    )
}
