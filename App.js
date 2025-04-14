import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      buttonName: 'Go!',
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  go() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({buttonName: 'Go!'});
    } else {
      this.timer = setInterval(() => {
        this.setState({
          number: this.state.number + 0.1,
        });
      }, 100);

      this.setState({buttonName: 'Stop'});
    }
  }

  clean() {
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;      
    }
    this.setState({
      number: 0,
      buttonName: 'Go!'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/images/stopwatch.png')}
          style={styles.stopwatch}
        />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.buttonName}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clean}>
            <Text style={styles.btnText}>Clean</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
});

export default App;
