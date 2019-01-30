import React from 'react';
import { Card, Paragraph, Title } from 'react-native-paper';
import { View } from 'react-native';

class Login extends React.Component {
    render() {
        return (
            <View>
                <Card>
                    <Card.Content>
                        <Title>Test Card</Title>
                        <Paragraph>So Testy!</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}
export default Login;