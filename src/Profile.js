import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { changeName } from './actions';

const Profile = props => (
    <Card>
        <CardContent>
            <Typography component='h1'>{props.profile.name}</Typography>
            <TextField
                id="name"
                label="Name"
                value={props.name}
                margin="normal"
                onChange={props.changeName}
                />
            <Typography>{props.profile.email}</Typography>
        </CardContent>
    </Card>
);

const mapStateToProps = state => ({profile: state.profile});
const mapDispatchToProps = dispatch => bindActionCreators({changeName}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);