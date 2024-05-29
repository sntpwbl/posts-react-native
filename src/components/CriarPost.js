import { View, Text, Modal, TextInput, Pressable, TouchableOpacity, Alert } from "react-native"
import { useState } from "react"
import stylesCriarPost from "../styles/CriarPostStyleSheet"
import api from "../config/axios"

const CriarPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [modal, setModal] = useState(false)
    

    const newPost = async() =>{
        try {
            const enviarDados = await api.post('/', {
                title: title,
                body: body,
                userId: 1
            })
            
            if(enviarDados.data.id=='101') 
            {
                Alert.alert('Sucesso', 'Seu post foi criado com sucesso!')
                setModal(false)
            }
            else Alert.alert('Erro', 'Ocorreu um erro.')
            
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
    <View>
        <TouchableOpacity style={stylesCriarPost.container} onPress={() => setModal(true)}>
            <Text style={stylesCriarPost.text}>Novo post</Text>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        visible={modal}
        onRequestClose={() => setModal(false)}>
            <View style={stylesCriarPost.modal}>
                <Text style={stylesCriarPost.text}>Título:</Text>
                <TextInput style={stylesCriarPost.input} onChange={(e)=> setTitle(e.nativeEvent.text)}/>

                <Text style={stylesCriarPost.text}>Conteúdo:</Text>
                <TextInput style={[stylesCriarPost.input, {textAlignVertical: "top"}]} multiline={true} numberOfLines={10}  onChange={(e)=> setBody(e.nativeEvent.text)}/>
                
                <Pressable style={stylesCriarPost.button} onPress={newPost}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Confirmar</Text>
                </Pressable>
            </View>
        </Modal>
    </View>
    )
}

export default CriarPost