import { StyleSheet } from "react-native"

export const stylesPost = StyleSheet.create({
    container: {
        backgroundColor: '#9E1111',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: '80%',
        marginTop: 15,
        alignSelf: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    id: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        alignContent: 'flex-start'
    },
    body: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
})