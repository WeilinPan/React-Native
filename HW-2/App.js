import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  const [color, setColor] = useState('white')
  const [bool, setBool] = useState(true)
  const [textColor, setTextColor] = useState('black')
  const addCount = () => {
    var inputNumber = Math.round(Number(inputText) * 10) / 10
    var result = count + inputNumber
    setCount(result)
  }

  const substractCount = () => {
    var inputNumber = Math.round(Number(inputText) * 10) / 10
    var result = count - inputNumber
    if (result >= 0) {
      setCount(result)
    } else {
      return
    }

  }

  const changeColor = () => {
    if (bool) {
      setColor('black')
      setTextColor('white')
      setBool(false)
    } else {
      setColor('white')
      setTextColor('black')
      setBool(true)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: color }]}>

      <Text style={[styles.titleText, { color: textColor }]}>今天喝了多少水: {count} c.c.</Text>

      <View style={styles.viewContrainer}>
        <View style={styles.buttonViewContainer}>
          <View style={styles.subViewContainer}>
            <TouchableOpacity
              onPress={() => addCount()}
              style={{ backgroundColor: 'red' }} >
              <Text style={styles.buttonTextStyle}>增加</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.subViewContainer}>
            <TouchableOpacity
              onPress={() => substractCount()}
              style={{ backgroundColor: 'yellow' }}>
              <Text style={styles.buttonTextStyle}>減少</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.subViewContainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            placeholder='請輸入水量'
            placeholderTextColor='gray'
            keyboardType='numeric'

          />
        </View>

      </View>

      <TouchableOpacity
        onPress={() => changeColor()}
        style={styles.buttonStyle}>
        <Text style={[styles.buttonTextStyle, { color: textColor }]}>Change Color</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',

  },

  viewContrainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonViewContainer: {
    flexDirection: 'row',
    flex: 2,
  },

  subViewContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  titleText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
  },

  textInputStyle: {
    height: 30,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    textAlign: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
  },

  buttonTextStyle: {
    textAlign: 'center',
    lineHeight: 30,
  },

  buttonStyle: {
    marginTop: 20,
    width: 150,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'blue',
    alignSelf: 'center',
  }

});
