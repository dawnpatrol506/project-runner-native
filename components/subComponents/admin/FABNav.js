import React from 'react';
import { FAB, Portal } from 'react-native-paper';

class FABNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render(props) {
        return (
            <Portal>
                <FAB.Group open={this.state.open} icon="menu"
                    actions={[
                        { icon: 'add', onPress: () => alert('Pressed') }
                    ]}
                    onStateChange={({ open }) => this.setState({ open })}
                />
            </Portal>
        )
    }
}

export default FABNav;