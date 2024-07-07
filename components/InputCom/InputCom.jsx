import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

/**
 * 文本输入组件
 * @returns
 */
const TextInputCom = () => {
  const [iptVal, setIptVal] = useState('');
  const [pwdVal, setpwdVal] = useState('');
  return (
    <View>
      <TextInput
        value={iptVal}
        style={styles.ipt}
        placeholder="请输入用户名"
        onChangeText={value => setIptVal(value)}
        autoFocus={true}
      />
      <TextInput
        value={pwdVal}
        style={styles.ipt}
        placeholder="请输入密码"
        secureTextEntry={true}
        returnKeyType="done"
        keyboardType="numeric" // default,numeric,number-pad,phone-pad,email-address,url-address,decimal-pad,social,visible-password
        onChangeText={value => setpwdVal(value)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  ipt: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TextInputCom;
