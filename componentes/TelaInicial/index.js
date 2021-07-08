import React from 'react' 
import{Text, View, Image, Button} from 'react-native'
import estilo from '../style'
import logo from '../TelaInicial/logo.jpg'
export default function TelaInicial(props){
    return(
        <View style = {estilo.container} >
            <Text>Star wars ordem cronológica</Text>
            <Image source = {logo} style={estilo.imagem}/>
        
            <Text style = {estilo.titulo}>
                Você Sabe em qual ordem está divididade Star Wars?
            </Text >
            <Text style = {estilo.textos}>
                Os principais filmes da franquia estão divididos em e tri
            </Text>
            <Button title = 'Ver 1 trilogia' onPress = { () => props.navigation.navigate("Trilogia 1")} color ="#372d00"/>
            <Button title = 'Ver 2 trilogia' onPress = { () => props.navigation.navigate("Trilogia 2")} color ="#372d00"/>
            <Button title = 'Ver 3 trilogia' onPress = { () => props.navigation.navigate("Trilogia 3")} color ="#372d00"/>

        </View>
    )
}