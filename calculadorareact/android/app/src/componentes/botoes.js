import React from 'react';
import { StyleSheet, Text, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { PropsWithChildren, ComponentProps } from 'react';

export default props => {

    const estBot = [estilos.botoesR]

    if (props.duplo) {
        estBot.push(estilos.botaoDup)
    }

    if (props.result) {
        estBot.push(estilos.botaoRes)
    }
    if (props.operacao) {
        estBot.push(estilos.botoesOpr)
    }
    
    if (props.apagar) {
        estBot.push(estilos.botaoDel)
    }
    if (props.clear) {
        estBot.push(estilos.botaoClear)
    }
    return(
    

        <TouchableHighlight
        
        onPress={props.clicando}
        >

             <Text style = {estBot}>{props.label}</Text>
         
         </TouchableHighlight>


    )
}

const estilos = StyleSheet.create({

    botoesR: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#444',
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        textAlign: 'center'



},


botaoRes: {

    color: '#FFFF00',
    backgroundColor: '#444'
},

botoesOpr: {

    color: '#ff0000',

},

botaoClear: {
color: '#fff',

},

botaoDel: {
color: '#ff0000',
},

botaoDup: {

 width: (Dimensions.get('window').width/4)*2,
}

})