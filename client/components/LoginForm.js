import React, { Component } from 'react';
import AuthForm from './AuthForm';
import query from '../queries/current-user';
import mutation from '../mutations/login';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        })
    }

    render() {
        return (
            <div>
                <AuthForm 
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        )
    }
}

export default graphql(mutation)(LoginForm);
