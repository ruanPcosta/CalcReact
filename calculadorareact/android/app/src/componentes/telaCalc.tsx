import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { PropsWithChildren } from 'react';
import { PropsWithRef, PropsWithoutRef } from 'react';


export default props => {

    return(
    <View style = {estilos.tela} >
    <Text 
    style = { estilos.txtTelaOpr}
    numberOfLines={1}

>{props.val}
</Text>

<Text 
    style = {estilos.txtTelaR }
    numberOfLines={1}

>{props.res}
</Text>


    </View>
    )
}

const estilos = StyleSheet.create({

    tela: {
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor :'#333',
        width: '100%',

    },
    
    txtTelaR: {

    fontSize: 50,
    color: '#fff',


   },


   txtTelaOpr: {

    fontSize: 25,
    color: '#fff',
        

   }


})