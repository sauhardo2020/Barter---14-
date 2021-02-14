import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Header } from 'react-native-elements'

export default class Home extends React.Component {
 render() {
  return (

   <View style = {{alignSelf: 'center'}}>

    <View>

     <Text style={{ alignItems: 'center', fontWeight: 'bold', fontSize: 40, alignSelf: 'center' }}>Add Item To Donate</Text>

    </View>

    <View>

     <TextInput

      style={styles.TextInputStyle}
      placeholder="Item Name"

     />

    </View>

    <View>

     <TextInput

      style={styles.TextInputStyleDescription}
      placeholder="Description Of the Item"

     />

    </View>

    <View>

     <TouchableOpacity style={styles.SubmitButton}>

      <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Submit</Text>

     </TouchableOpacity>


    </View>
   </View>

  )
 }
}

const styles = StyleSheet.create({

 HomePage: {

  alignSelf: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  justifyContent: 'center',
  fontSize: 60

 },

 TextInputStyle: {

  alignSelf: 'center',
  alignItems: 'center',
  borderWidth: 3.0,
  borderRadius: 4,
  borderColor: 'lightpink',
  marginTop: 100,
  width: 500,
  height: 39,
 },

 TextInputStyleDescription: {

  height: 100,
  borderRadius: 8,
  borderColor: 'pink',
  alignSelf: 'center',
  alignItems: 'center',
  width: '30%',
  marginTop: 20,
  height: 200,
  width: 500,
  borderWidth: 3.0,
  paddingLeft: 4,
  fontWeight: 'bold'
 },

 SubmitButton: {

  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderRadius: 3,
  borderColor: '#FAA353',
  marginTop: 10,
  width: '20%',
  height: 30,



 }

})