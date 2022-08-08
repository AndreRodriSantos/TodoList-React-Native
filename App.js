import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {

  const state = {
    list:[
      {
          id: '1' , text: "André"
      },
      {
          id: '2' , text: "Jorjão"
      }
  ],
  }

  return (
    <View style={styles.container}>
      <TodoList list={state.list}></TodoList>
      <Form/>
      <Text>Bruno Gay</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
