import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import styled from 'styled-components/native';
import {constants, helpers, colors} from '~common';

const {wp, hp} = helpers;
const InputText = styled.TextInput`
  padding: 12px;
  background-color: ${colors.pop};
  color: white;
  font-size: ${constants.fontSize.large}px;
  border-radius: 3px;
  width: ${wp(95)}px;
`;
export default props => {
  const [text, setText] = useState('');
  const {placeholder, placeholderTextColor, maxLength, submit} = props;
  const onChangeText = T => setText(T);

  const onSubmitEditing = () => {
    if (!text) {
      return;
    }
    submit(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <InputText
      value={text}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      maxLength={maxLength}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};
