import { Component } from "react";
import { FlatList, View, Text} from "react-native";
import { Button } from "react-native";


export default class TodoList extends Component{

    //propriedades da lista (Linhas)
    static defaultProps = {
        list:[
            {
                id: '1' , text: "André"
            },
            {
                id: '2' , text: "Jorjão"
            }
        ],

        OnRemove: () => {}
    }

    //função que trata as linhas dentro da lista
    handleRow = ({item,index}) =>{
        return(
            <View  style={{flexDirection: 'row', margin: 10}}>
                <Text style={{flex:1}}>
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button style={{width: 30}} title="X" onPress={() => this.props.onRemove(item)}></Button>
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
}