import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/current-user';
import { Link } from 'react-router';
import mutate from '../mutations/logout';

class Header extends Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }

    renderButtons() {
        const { loading, currentUser } = this.props.data;

        if (loading) {
            return <div />;
        }

        if (currentUser) {
            return (
                <li>
                    <a onClick={this.onLogoutClick.bind(this)}>
                        Logout 
                    </a>
                </li>
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

export default graphql(query)(
    graphql(mutate)(Header)
);
