import React, {
    Component
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

// import { Container } from './styles';

class AddTodo extends Component {

    state={
        text: ''
    }

    addTodo = (text) => {
        //redux store
        this.props.dispatch(addTodo(text))
        this.setState({text:''})
    }

    render() {
        return ( 
            <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    onChangeText={async (text) => await this.setState({text})}
                    value={this.state.text}
                    placeholder='New Item'
                    style={styles.input}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={styles.button}>
                        <Ionicons name='md-add' size={30} style={{color:'#de9595', padding: 10}} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    button: {
       height: 50,
       backgroundColor: '#eaeaea',
       alignItems: 'center',
       justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5
    }
});