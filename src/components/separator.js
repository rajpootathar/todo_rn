import React from 'react';
import styled from 'styled-components/native/dist/styled-components.native.esm';
import {colors, helpers} from '~common';

const {wp} = helpers;
export default styled.View`
  height: 1px;
  width: ${wp(100)}px;
  background-color: ${colors.pop};
`;
