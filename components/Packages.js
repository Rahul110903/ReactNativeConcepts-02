import React,{Component} from "react"
import {Text,View} from "react-native"
import { WebView } from 'react-native-webview';


        const MyWebComponent = () => {
            return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
          }
export default MyWebComponent