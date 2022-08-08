import { Component } from "react";
import { TextInput, View } from "react-native";
import { Button } from "react-native";

export default class Form extends Component{

    static defaultProps ={
        onAdd: () => {}
    }
    
    state = {
        text: "",
    }

    add = () =>{

        const {state} = this

        if(state.text ){
            this.props.onAdd(state.text)
            this.handleChange('')
        }
    }

    handleChange = (text) => {
        this.setState({text})
    }

    render(){
        const {state} = this
        return(
            <View>
                <TextInput value={state.text} onChange={this.handleChange} ></TextInput>
                <Button title="Adicionar" color="#0062ac" onPress={this.add}></Button>
            </View>
        )
    }
}