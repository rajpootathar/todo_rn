import React from 'react';

import {View} from 'react-native';
import {Icon} from '~components';
import {colors, constants, helpers} from '~common';
import styled from 'styled-components/native';

const {wp} = helpers;
const TaskView = styled.View`
  height: ${wp(13)}px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 5px;
`;
const TaskTouchable = styled.TouchableOpacity`
  height: ${wp(8)}px;
  width: ${wp(8)}px;
  margin-right: 10px;
  justify-content: center;
`;
const TaskText = styled.Text`
  text-decoration-line: ${props =>
    props.type === constants.taskType.completed ? 'line-through' : 'none'};
  color: ${colors.white};
  font-size: ${constants.fontSize.big}px;
`;

export default ({item, type, completeTask, deleteTask}) => {
  return (
    <TaskView>
      {type === constants.taskType.active && (
        <TaskTouchable onPress={completeTask}>
          <Icon
            name={constants.icons.checkCircle}
            size={wp(7)}
            color={colors.white}
          />
        </TaskTouchable>
      )}
      <View style={{flexGrow: 1}}>
        <TaskText type={type}>{item.task}</TaskText>
      </View>
      <TaskTouchable onPress={deleteTask}>
        <Icon
          name={constants.icons.crossCircle}
          size={wp(7)}
          color={colors.white}
        />
      </TaskTouchable>
    </TaskView>
  );
};
