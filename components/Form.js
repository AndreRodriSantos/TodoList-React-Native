import {Component} from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

class Form extends Component{

    static defaultProps ={
        onAdd: () =>{}
    }

state = {
    text: ''
}

add = () =>{
    const {state} = this;

    if(state.text){
        this.props.onAdd(state.text)
        this.handleChange('')
        console.log(state.text)
    } 
}

handleChange = (text) =>{

    this.setState({text});

}

    render(){
        
        const {state} = this
        return(
            <View>
                <TextInput 
                placeholder="Digite Aqui"
                style={this.styles.input}
                value={state.text}
                onChangeText={this.handleChange}
                />

                <Button style={{width:10}}
                title="Adicionar" 
                color="#0062ac"
                onPress={this.add} />
            </View>
        )
    }

    styles = StyleSheet.create({
        button: {
         maxWidth: 100,
         width:10
        },
        input:{
            margin: 10,
            borderRadius: 3,
            borderBottomWidth: 2,
        }
      })

}

export default Form