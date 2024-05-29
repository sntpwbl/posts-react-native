import { StyleSheet } from "react-native"

const stylesCriarPost = StyleSheet.create({
    container: {
        backgroundColor: '#A94545',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'center'
    },
    modal: {
        flex: 1,
        backgroundColor: '#A94545',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#ff0000',
        width: 105,
        padding: 15,
        borderRadius: 10,
        marginTop: 15
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    }
})

export default stylesCriarPost