import React from 'react';
import { Card, Title, Button, TextInput, Paragraph } from 'react-native-paper';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { AsyncStorage } from 'react-native';
import { Redirect } from 'react-router-native';
import Axios from 'axios';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: 'admin@admin.com',
            password: 'admin1'
        }
    }

    handleSubmit = () => {
        Axios.post('https://project-runner-f1bdc.firebaseapp.com/api/v1/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(result => {
            try{
                AsyncStorage.setItem('uid', result.data.uid);
                AsyncStorage.setItem('isAdmin', toString(result.data.isAdmin));
                AsyncStorage.setItem('username', result.data.name);
                AsyncStorage.setItem('token', result.data.token);
                this.setState({isLoggedIn: true})
            }
            catch (err){
                console.error(err);
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        if(this.state.isLoggedIn){
            return <Redirect to="/admin" />
        }

        return (
            <Grid style={{backgroundColor: '#eee'}}>
                <Row size={1} />
                <Row size={3}>
                    <Col size={1} />
                    <Col size={8}>
                        <Card>
                            <Card.Content>
                                <Title style={{textAlign: 'center'}}>Log In</Title>
                                <TextInput label="Email" value={this.state.email} onChangeText={email => this.setState({ email })} mode="outlined" />
                                <TextInput label="Password" secureTextEntry={true} value={this.state.password} onChangeText={password => this.setState({ password })} mode="outlined" />
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={this.handleSubmit} mode="contained" >Submit</Button>
                            </Card.Actions>
                        </Card>
                    </Col>
                    <Col size={1} />
                </Row>
                <Row size={1} />
            </Grid>
        );
    }
}
export default Login;