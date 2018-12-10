import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/current-user';
import { Link } from 'react-router';

class Header extends Component {7
    renderButtons() {
        const { loading, currentUser } = this.props.data;

        if (loading) {
            return <div />;
        }

        if (currentUser) {
            return (
                <div>
                    Logout 
                </div>
            )
        } else {
            return  (
                <ul>
                    <li>
                        <Link to="/singup">
                            Singup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default graphql(query)(Header);
