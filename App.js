import { StatusBar } from 'expo-status-bar';
import { Alert, Button,  StyleSheet, Text, TextInput, View ,} from 'react-native';


// main component widget starts
export default function App() {
  const baby = () => {
    Alert.alert("you're doing great")
  }
  // const image = { uri: "https://drive.google.com/uc?export=download&id=1nQrf63ZbNXHLMeZrAnkJVvQQarBLCObN" };
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        <View>
          <Text  style={styles.text}>login</Text>
        </View>
        <TextInput
        style={styles.inputOne}
        placeholder='username'
        autoCorrect={true}
        autoFocus={true}
        />
        <TextInput
          style={styles.inputTwo}
        placeholder='Password'
        secureTextEntry={true}
        maxLength={8 && 15}
        autoCorrect={true}
        autoFocus={true}
        />
        {/* <Home/> */}
      <View style={styles.btn}>
      <Button
       title='Submit' 
       onPress={baby}
       color='#000'
       
      />
      </View>
      {/* </ImageBackground> */}
      <StatusBar style="auto" />
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fce410',
     paddingTop:'40%',
     alignContent:'space-between'
  },
  text: {
    color: "#000",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",


  },
  inputOne: {
    color:'black',

    marginLeft:'14%',
    margin:'2%',
    width:'70%',
    alignItems:'center',
    height:'12%',
    marginTop:'5%',
    borderBottomColor:'black',
    borderWidth:1,
    borderRadius:23,
    paddingLeft:20
  },
  inputTwo:{
    color:'black',


    marginLeft:'14%',
    margin:'2%',
    width:'70%',
    alignItems:'center',
    height:'12%',
    borderBottomColor:'black',
    borderWidth:1,
    borderRadius:23,
    paddingLeft:20

  },
  btn:{
    width:'50%',
    marginLeft:'24%',
    marginTop:'8%',
  }
});

// Main component widget ends


//Home Widget
//  function Home() {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   )
// }
