import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Input from './Input';
import { Field, reduxForm } from 'redux-form';

const FormExemplo = props => {
    console.log('props', props)
    return (
    <Card>
        <CardContent>
        <form onSubmit={props.handleSubmit(v => console.log("dados", v))}>
            <Field
            name="nome"
            component={Input}
            type="text"
            placeholder="First Name"
            />
            <Field
            name="email"
            component={Input}
            type="email"
            placeholder="Email"
            />
            <button>aceita</button>
        </form>
        </CardContent>
    </Card>
    );
};

export default reduxForm({form: 'form'})(FormExemplo);