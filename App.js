import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/images/stopwatch.png')} style={styles.stopwatch} />

        <Text style={styles.timer}>0.0</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Go!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Clean</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },  
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
    },
    btnText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00aeef'
    }
});

export default App;
