import React from 'react' 
import{Text, View, Image} from 'react-native'
import estilo from '../style'
import darthvader from '../darth-vader.jpeg'
export default function TelaTrilogia1(){
    return(
        <View style = {estilo.container}>
            <Text style = {estilo.textos}>A história de Darth Vader </Text>
            <Image source = {darthvader} style ={estilo.imagem}/>
            <Text style = {estilo.textos}>Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem conológica da série StarWars. Nela é contada a história do grande vilçao Darth Vader</Text>
        </View>
    )
}