import react, {Component} from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";


export default class TodoList extends Component{

    //propriedades da lista (Linhas)
    static defaultProps = {
        list:[
            
        ],

        OnRemove: () => {}
    }

    //função que trata as linhas dentro da lista
    handleRow = ({item,index}) =>{
        return(
            <View style={{flexDirection: 'row', margin: 10}}>
                <Text style={{flex:1}}>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Pressable title="X" style={this.styles.botao} onPress={() => this.props.onRemove(item)}><Text style={{color: "white"}}>X</Text></Pressable>
            </View>
            )
        
    } 
    //formatando numero de acordo com a posição do array
    formatListNumber(number){
        const digits = 2
        return ('0'.repeat(digits) + (number + 1)).slice(-digits);
    }

    render(){
        //propriedade que retorna o item dentro da lista
        const {props} = this;

        //extraindo o id da lista a partir da posição do array
        const keyExtractor = item => item.id;

        return(
        <View >
            <FlatList
                data={props.list}
                keyExtractor={keyExtractor}
                renderItem={this.handleRow}/>
        </View>
        )
    }

    styles = StyleSheet.create({
        botao: {
            width: 30, height: 30,backgroundColor:"#0062ac", alignItems:"center", justifyContent:"center", borderRadius:10
        },
      })
}