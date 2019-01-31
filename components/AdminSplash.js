import React from 'react';
import Axios from 'axios';
import { Text, Drawer } from 'react-native-paper';
import { Route, Link } from 'react-router-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { View, AsyncStorage } from 'react-native';
import AdminNavBar from './subComponents/admin/AdminNavBar';
import FABNav from './subComponents/admin/FABNav';
class AdminSplash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin: false
        }
    }

    componentWillMount = async () => {
        const token = await AsyncStorage.getItem('token');
        const uid = await AsyncStorage.getItem('uid');
        const isAdmin = await AsyncStorage.getItem('isAdmin');
        Axios.post('https://project-runner-f1bdc.firebaseapp.com/api/v1/auth/verify', {
            token
        })
            .then(result => {
                if (uid === result.data.uid)
                    this.setState({ isLoggedIn: true, isAdmin })
                else
                    AsyncStorage.clear();
            })
            .catch(err => this.setState({ err }));
    }

    render(props) {
        if (!this.state.isLoggedIn || !this.state.isAdmin) {
            return (
                <View>
                    <Text>You are not logged In</Text>
                    <Link to="/"><Text>Go to Login</Text></Link>
                </View>
            )
        }

        return (
            <Grid>
                <Row style={{height: 24}} />
                < AdminNavBar />
                < FABNav />
                <Row size={1} />
                <Row size={7}>
                    <Text>You Are Now Logged In</Text>
                </Row>
                <Row size={1} />
            </Grid>
        )
    }

}

export default AdminSplash;