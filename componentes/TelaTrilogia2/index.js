import React from 'react' 
import{Text, View, Image} from 'react-native'
import estilo from '../style'
import darthvader from '../lucas-skywalker.jpg'
export default function TelaTrilogia2(){
    return(
        <View style = {estilo.container}>
            <Text style = {estilo.textos}>A Hisoria de Luke SkyWalker</Text>
            <Image source = {darthvader} style ={estilo.imagem}/>
            <Text style = {estilo.textos}>Essa foi a primeira trilogia a surgir porém sua hisoria se passa apos a trilogia prequela</Text>
        </View>
    )
}