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
        <Image 
        source={'./src/images/stopwatch.png'}
        style={styles.stopwatch} 
        />

        <Text style={styles.timer}>0.0</Text>

        <View style={styles.btnAre}>
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
  }
});

export default App;
