import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {responsive} from '../utils/Responsive';
import {AppColor} from '../utils/AppColor';

const CustomTextInput = ({
  label,
  value,
  onChangeText,
  keyboardType,
  maxLength,
  secureTextEntry,
}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInputBox}
        placeholder={label}
        placeholderTextColor={AppColor.borderColor}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  main: {
    padding: responsive(10),
  },
  label: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'left',
  },
  textInputBox: {
    backgroundColor: AppColor.white,
    padding: responsive(10),
    borderRadius: responsive(5),
    marginVertical: responsive(5),
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'NatoSans-Medium',
    borderWidth: 2,
    borderColor: AppColor.borderColor,
  },
});
