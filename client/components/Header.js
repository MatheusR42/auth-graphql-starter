import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/current-user';

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
                <div>Login</div>
            )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderButtons()}
                </div>
            </nav>
        )
    }
}

export default graphql(query)(Header);
