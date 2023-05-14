import { useState } from 'react';
import React from 'react';
import { SafeAreaView,  StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import TelaCalc from './android/app/src/componentes/telaCalc';
import Botoes from './android/app/src/componentes/botoes';


let estR = {
   
  valTela: '',
  result:0,
  op: false,
  pnt: false,



}


export default function App(){
  const [valTela, setValTela] = useState(estR.valTela)
  const [valRes, setValRes] = useState(estR.result)

  
  
  
  const addNum = (n) => {

    if(n == '+' || n == '-' || n == '*' || n == '/') {

      estR.pnt = false
      
      } 
    
    
    if(n == '.' && estR.pnt){

      estR.pnt = true
      estR.op = false
    }else if(n == '.' && estR.pnt){
      return

    }

  
    
    if((n == '+' || n == '-' || n == '*' || n == '/') && estR.op) {

      estR.valTela = estR.result
      estR.result = 0


    }
    
    
    estR.valTela = estR.valTela + n
    setValTela(estR.valTela)
    setValRes(estR.result)

    estR.op = false
  
  
    
  }

  const clearTela = () => {
  
  
  estR = {
   
    valTela: '',
    result:0,
    op: false,
    pnt: false,
  
    
}
setValTela(estR.valTela)
setValRes(estR.result)


}

const efetua = (n) => {

  if (n== 'C') {
     clearTela()
    return
  }

  if (n == 'DEL'){
    estR.valTela =valTela.substring(0,(valTela.length-1))
    setValTela(estR.valTela)
    return
  }

try{

  estR.result = eval(estR.valTela)
  estR.op = true
  setValRes(estR.result)
}catch{
  estR.result = 'Falha'
  estR.op = true
  setValRes(estR.result)

}

} 

  return (
    <SafeAreaView style = {estilos.contR}>
      <Text> Calculadora do ruanzin kkkk </Text>
    
    <TelaCalc val = {valTela} res = {valRes}/>


<View style = {estilos.botoesR}>
  
 <Botoes label = "C" clear clicando={() => {clearTela()}}></Botoes>
 <Botoes label = "(" clicando={() => {addNum('(')}}></Botoes>
 <Botoes label = ")" clicando={() => {addNum(')')}}></Botoes>
 <Botoes label = "/" operacao clicando={() => {addNum('/')}}></Botoes>
 <Botoes label = "7" clicando={() => {addNum('7')}}></Botoes>
 <Botoes label = "8" clicando={() => {addNum('8')}}></Botoes>
 <Botoes label = "9" clicando={() => {addNum('9')}}></Botoes>
 <Botoes label = "*" operacao clicando={() => {addNum('*')}}></Botoes>
 <Botoes label = "4" clicando={() => {addNum('4')}}></Botoes>
 <Botoes label = "5" clicando={() => {addNum('5')}}></Botoes>
 <Botoes label = "6" clicando={() => {addNum('6')}}></Botoes>
 <Botoes label = "-" operacao clicando={() => {addNum('-')}}></Botoes>
 <Botoes label = "1" clicando={() => {addNum('1')}}></Botoes>
 <Botoes label = "2" clicando={() => {addNum('2')}}></Botoes>
 <Botoes label = "3" clicando={() => {addNum('3')}}></Botoes>
 <Botoes label = "+" operacao clicando={() => {addNum('+')}}></Botoes>
 <Botoes label = "0" clicando={() => {addNum('0')}}></Botoes>
 <Botoes label = "<---"apagar clicando={() => {efetua ('DEL')}}></Botoes>
 <Botoes label = "=" result clicando={() => {efetua ('=')}}></Botoes>
 <Botoes label = "." clicando={() => {addNum('.')}}></Botoes>
 
 
 
 </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  contR: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center'
  },

  botoesR : {
  
    flexDirection: "row",
    flexWrap: "wrap"

  }



});

