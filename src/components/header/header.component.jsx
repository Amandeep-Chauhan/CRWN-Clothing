import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/083 crown.svg";
import { auth } from "../../firebase/firebase.utils"

import "./header.component.styles.scss"
import rootReducer from "../../redux/root-reducer";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {currentUser
                ? <Link className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </Link>
                : <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);