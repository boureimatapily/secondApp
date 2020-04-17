import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import moi from './assets/moi.jpg'
import phone from './assets/phone.png'
import camera from './assets/camera.png'

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
          <Image source={moi} style={styles.image} />
          <TouchableOpacity style={styles.imageButton} >
          <Image source={camera}style={styles.imageCamera} />
          </TouchableOpacity>
        
      </View>
     
        <View style={styles.details}>
            <Text style={styles.textwithoutcolor}>School</Text>
            <Text>Codetrain</Text>
            <Text style={[styles.textwithoutcolor]}>Email Address</Text>
            <Text>boureimatapily1@gmail.com</Text>
            <Text style={[styles.itemSpace,styles.textwithcolor]}>Name</Text>
            <TextInput defaultValue="Boureima TAPILY"  style={styles.underline}/>
            <Text style={[styles.itemSpace,styles.textwithcolor]}>Nick Name</Text>
            <TextInput defaultValue="Ibrahim"  style={styles.underline}/>
            <Text style={[styles.itemSpace,styles.textwithcolor]}>Emergency Contact</Text>
            <TextInput defaultValue="+233572718508" style={styles.underline}/>

            <TouchableOpacity style={styles.imagePhoneButton}>
            <Image source={phone} style={styles.imageEditPhone} />
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(188,207,193)',
  },
  
  image:{
    width:160,
    height:160,
    alignSelf:"center",
    marginTop:100,
    marginBottom:10,
    borderRadius:75
  },
  imageButton:{
    backgroundColor:'rgb(39,180,228)',
    width:50,
    height:50,
    borderRadius:75,
    position:"absolute",
    top:195,
    right:95,

  },
  imageCamera:{
    width:30,
    height:30,
    alignSelf:"center",
    marginTop:10,
    borderRadius:70,
   
  },
  details:{
    flexDirection:"column",
    marginHorizontal:50
    
  },
  textwithoutcolor:{
    fontSize:12,
    color:"gray",
    marginTop:5
  },
  textwithcolor:{
    fontSize:12,
    color:'rgb(0,79,157)',
  },
  button:{
    backgroundColor:"gray",
    alignItems:"center",
    alignSelf:"center",
    height:40,
    width:300,
    borderRadius:30,
    marginVertical:50,
    backgroundColor:'rgb(39,180,228)'
  },
  buttonText:{
    paddingTop:10,
    color:'white',
    fontWeight:"bold"

  },
  underline:{
    borderBottomWidth:0.5,
    fontWeight:"bold",
    fontSize:16
  },
  itemSpace:{
    marginTop:20
  },
  imagePhoneButton:{
    
    width:40,
    height:40,
    borderRadius:75,
    position:"absolute",
    top:245,
    left:230,
  },
  imageEditPhone:{
    width:20,
    height:20,
    position:"absolute",
    top:5,
    left:10,
  },
});

export default App
