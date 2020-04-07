import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const TodoList = ({todos, toggleTodo}) => ( 
       <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10, }}>
           {todos.map(todo => 
                <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)} style={{justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: 20,
                        paddingLeft: 10,
                        paddingBottom: 10,
                        marginBottom:10,
                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                         }}>{todo.text}</Text>
                </TouchableOpacity>
            )}
       </View>
    );

export default TodoList;
