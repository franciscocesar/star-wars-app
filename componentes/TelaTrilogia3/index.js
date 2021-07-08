import React from 'react' 
import{Text, View, Image} from 'react-native'
import estilo from '../style'
import lucas from '../sith.jpg'
export default function TelaTrilogia3(){
    return(
        <View style = {estilo.container}>
            <Text style = {estilo.textos}>A história de Rey </Text>
            <Image source = {lucas} style ={estilo.imagem}/>
            <Text style = {estilo.textos}>Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia</Text>
        </View>
    )
}