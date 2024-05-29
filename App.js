import { StatusBar } from 'expo-status-bar'
import { Text, ScrollView, FlatList, View } from 'react-native'

import { useState, useEffect } from 'react';

import { stylesApp } from './src/styles/AppStyleSheet'
import Post from './src/components/Post'
import api from './src/config/axios'

export default function App() {
  const [posts, setPosts] = useState([])

  const getPosts = async() =>{
    try {
      const response = await api.get('/')
      setPosts(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getPosts()
  }, [])

  return (
    <View style={stylesApp.container} >
        <Text style={stylesApp.text}>Posts</Text>
        {posts && (
          <View>
          <FlatList 
            data={posts}
            renderItem={({item}) => <Post title={item.title} body={item.body} id={item.id} />}
            keyExtractor={item => item.id}/>
        <StatusBar style="auto" />
        </View>
        )}
        
    </View>
  );
}

