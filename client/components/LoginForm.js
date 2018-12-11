import React, { Component } from 'react';
import AuthForm from './AuthForm';
import query from '../queries/current-user';
import mutation from '../mutations/login';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        }
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        })
        .catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors });
        })
    }

    render() {
        return (
            <div>
                <AuthForm 
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}
                />
            </div>
        )
    }
}

export default graphql(mutation)(LoginForm);
