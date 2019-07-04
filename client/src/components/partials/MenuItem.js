import React from "react";
import PropTypes from "prop-types";

/**
 * MenuItem
 * 
 * Stateless component for a Bootstrap nav item
 */
export default function MenuItem(props) {
    return (
        !props.isDropdown ? (
            <li className={`nav-item ${props.isActive ? "active" : ""} ${props.isDisabled ? "disabled" : ""}`}>
                <a className="nav-link" href={props.href}>{props.children}</a>
            </li>
        )
            : (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href={props.href ? props.href : "#"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.children}</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {
                            props.subMenus.map(item => !item.isDivider ? (<a key={item.id} className="dropdown-item" href={item.href}>{item.body}</a>) : (<div className="dropdown-divider"></div>))
                        }
                    </div>
                </li>
            )
    );
};

MenuItem.propTypes = {
    id: PropTypes.string,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    subMenus: PropTypes.array
};