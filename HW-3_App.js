import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [code, setCode] = useState('')
  const [imageSource, setImageSource] = useState('https://upload.cc/i1/2020/03/27/2dpqCL.png')
  const [state, setState] = useState('')

  const checkCode = () => {
    if (code === '12345') {
      setImageSource('https://upload.cc/i1/2020/03/27/W7g81J.png')
    } else {
      setImageSource('https://upload.cc/i1/2020/03/27/FzOVWT.png')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>猜~密~碼~!{"\n"}猜對有獎！{"\n"}猜錯...嘿嘿嘿！</Text >
      <Image
        style={{ width: 300, height: 300, marginTop: 20, }}
        source={{ uri: (imageSource) }}
      />

      {/* https://upload.cc/i1/2020/03/27/W7g81J.png */}
      {/* https://upload.cc/i1/2020/03/27/FzOVWT.png */}
      {code.length === 5 ? <Text style={{ margin: 20 }}></Text> : <Text style={{ color: 'white', margin: 20, }}>請輸入密碼</Text>}

      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => setCode(text)}
        value={code}
        keyboardType={'numeric'}
        placeholder={'請輸入密碼'}
        placeholderTextColor={'gray'}
        secureTextEntry={true}
        autoFocus={true}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => checkCode()}>
        <Text style={styles.textStyle}>
          Enter
        </Text>

      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputStyle: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderWidth: 2,
    textAlign: 'center',
  },

  buttonStyle: {
    borderRadius: 20,
    backgroundColor: '#00aeef',
    justifyContent: 'center',
    width: 300,
    height: 40,
    margin: 20,
  },

  textStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  }
});
