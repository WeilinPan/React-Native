import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [checkResult, setCheckResult] = useState('')

  const checkPassword = () => {
    if (rePassword == '') {
      setCheckResult('請再次輸入密碼')
    } else if (rePassword == password) {
      setCheckResult('密碼輸入正確！')
      console.log({ rePassword })
      console.log({ password })
    } else {
      setCheckResult('密碼輸入錯誤！')
      console.log({ rePassword })
      console.log({ password })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>歡迎註冊會員密碼!</Text>

      <Text style={styles.subTitleText}>請依照步驟依序輸入資料</Text>

      {/* Name */}
      <Text style={styles.subTitleText} > Name</Text>
      <View style={styles.viewContrainer}>
        <View style={styles.subViewContainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.subViewContainer}>
          <Text style={styles.resultContentText}>
            {name}
          </Text>
        </View>
      </View>

      {/* Email */}
      <Text style={styles.subTitleText} > Email</Text>
      <View style={styles.viewContrainer}>
        <View style={styles.subViewContainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.subViewContainer}>
          <Text style={styles.resultContentText}>
            {email}
          </Text>
        </View>
      </View>

      {/* Password */}
      <Text style={styles.subTitleText} >Password</Text>
      <View style={styles.viewContrainer}>
        <View style={styles.viewContrainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            maxLength={12}
          />
        </View>
      </View>

      {/* Type Password Again */}
      <Text style={styles.subTitleText} >Type Password again</Text>
      <View style={styles.viewContrainer}>
        <View style={styles.viewContrainer}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setRePassword(text)}
            value={rePassword}
            onSubmitEditing={() => checkPassword()}
            secureTextEntry={true}
            maxLength={12}
          />
        </View>
        <View style={styles.subViewContainer}>
          <Text style={styles.resultContentText}>
            {checkResult}
          </Text>
        </View>
      </View>

      {/* <View style={styles.buttonView}>
        <Button
          title={'送出'}
          onPress={() => checkPassword()}
          color='green'
        />
      </View> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  viewContrainer: {
    flexDirection: 'row',
  },

  subViewContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  titleText: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
    marginHorizontal: 20,
  },

  subTitleText: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },

  textInputStyle: {
    height: 30,
    width: 200,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    marginLeft: 10,
  },

  resultTitleText: {
    margin: 10,
  },

  resultContentText: {
    textAlign: 'center',
  },

  buttonView: {
    marginTop: 20,
  }
});
