import React from 'react';
import styled from 'styled-components/native/dist/styled-components.native.esm';
import {colors, helpers, constants} from '~common';
import {View} from 'react-native';

const {wp} = helpers;
const HeaderView = styled.View`
  height: ${wp(13)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HeaderText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: ${constants.fontSize.large}px;
`;
export default ({title}) => {
  return (
    <HeaderView>
      <HeaderText>{title}</HeaderText>
    </HeaderView>
  );
};
