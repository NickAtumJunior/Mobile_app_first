import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';


// main component widget starts
export default function App() {
  // const baby = () => {
  //   Alert.alert("you're doing great")
  // }
  // const image = { uri: "https://drive.google.com/uc?export=download&id=1nQrf63ZbNXHLMeZrAnkJVvQQarBLCObN" };
  const [enteredGoal, setEnteredGoal] = useState('')
  const [userArray, setuserArray] = useState([])

  const change = (input) => {
    setEnteredGoal(input)
  }

  let addHandler = () => {
    setuserArray(currentGoals => [...currentGoals, enteredGoal])
  }

  // const handleDelete = (x) => {
  //   let temp = [...arr];
  //   let index = temp.findIndex((x) => x.id === x.id);
  //   temp.splice(index,1);
  //   setArr(temp);
  // }


  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View>
        <Text style={styles.text}>TODO APP</Text>
      </View>
      <TextInput
        style={styles.inputOne}
        placeholder='Add todo here'
        autoFocus={true}
        onChangeText={change}
        value={enteredGoal}
      />

      {/* <Home/> */}
      <View style={styles.btn}>
        <Button
          title='Submit'
          onPress={addHandler}
          color='#000'

        /><ScrollView>
          {userArray.map((x) => {
            return (
              <View key={x} style={styles.newtodo}><Text>{x}</Text><Button title='Delete' /></View>)
          })
          }
        </ScrollView>

      </View>
      {/* </ImageBackground> */}
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce410',
    paddingTop: '20%',
    alignContent: 'space-between',
  },
  text: {
    color: "#000",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputOne: {
    color: 'black',
    marginLeft: '14%',
    margin: '2%',
    width: '70%',
    alignItems: 'center',
    height: '12%',
    marginTop: '5%',
    borderBottomColor: 'black',
    borderWidth: 1,
    borderRadius: 23,
    paddingLeft: 20
  },

  btn: {
    width: '50%',
    marginLeft: '24%',
    marginTop: '8%',
  },
  newtodo: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch'
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
