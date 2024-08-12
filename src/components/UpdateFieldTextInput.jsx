import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';

const UpdateFieldTextInput = ({
  title,
  value,
  onChange,
  placeholder,
  keyboardType,
  maxLength,
  editable,
}) => {
  return (
    <View style={styles.textInputBoxView}>
      <View style={{width: '25%', padding: responsive(10)}}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={{width: '75%', padding: responsive(10)}}>
        <TextInput
          placeholder={placeholder}
          value={value}
          placeholderTextColor={AppColor.black}
          style={[styles.label, {fontSize: responsive(20)}]}
          onChangeText={onChange}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default UpdateFieldTextInput;

const styles = StyleSheet.create({
  textInputBoxView: {
    borderWidth: 2,
    marginTop: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    borderColor: AppColor.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.borderColor,
    fontSize: responsive(18),
    textAlign: 'left',
  },
});
