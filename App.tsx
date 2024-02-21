/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Concept1 from "./components/Concept1"
import Increment from './components/Increment';
import Name from './components/Name';
import xstyle from './components/style';
import Form from './components/Form';
import Formdata from './components/Formdata';
import Maplist from "./components/Maplist"
import Flatlist from './components/Flatlist';
import Grid from "./components/Grid"
import Sectionlist from './components/Sectionlist';
import Unmount_toggle from './components/Unmount_toggle';
import Layout from './components/Layout';
import TouchableHighlite from './components/TouchableHighlite';
import Radiobuttons from './components/Radiobuttons';
import DynamicRadioButtons from './components/DynamicRadioButton';
import Activityindicator from './components/Activityindicator';
import Modal from './components/Modal';
import Press from './components/Pressable';
import Statusbar from './components/Statusbar';
import Platfor from './components/Platform';
import Packages from './components/Packages';

import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import List from './components/Flatlist';
import Useeffect from './components/Useeffect';
import AppNavigator from './components/AppNavigator';
import AuthenticationForm from './AuthenticationForm/AuthenticationForm';

const App =()=> {
  return (
 <View style={styles.conatiner}> 
    {/* <Form/> */}
    {/* <Formdata/> */}
    {/* <Flatlist/> */}
    {/* <Maplist/> */}
    {/* <Grid/> */}
    {/* <Sectionlist/> */}
    {/* <Useeffect/> */}
    {/* <Unmount_toggle/> */}
    {/* <Layout/> */}
    {/* <TouchableHighlite/> */}
    {/* <Radiobuttons/> */}
    {/* <DynamicRadioButtons/> */}
    {/* <Activityindicator/> */}
    {/* <Modal/> */}
    {/* <Statusbar/> */}
    {/* <Press/> */}
    {/* <Platfor/> */}
    {/* <Packages/> */}
    {/* <AppNavigator/> */}
    <AuthenticationForm/>
  </View>
  );
}
const styles=StyleSheet.create({
  conatiner:{
    padding:10,
    flex:1,
    backgroundColor:"black",
  }
})
export default App;
