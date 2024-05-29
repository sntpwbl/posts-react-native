import { View, Text } from "react-native"
import { stylesPost } from "../styles/PostStyleSheet"

const Post = ({title, body, id}) =>{
    return(
        <View style={stylesPost.container}>
            <Text style={stylesPost.title}>{title}</Text>
            <Text style={stylesPost.body}>{body}</Text>
            <Text style={stylesPost.id}>{id}</Text>
        </View>
    )
}

export default Post