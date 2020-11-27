import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Separator, TaskRow, Header} from '~components';
import {constants, colors} from '~common';
import {useDispatch} from 'react-redux';
import {actions} from '~redux/task';

export default props => {
  const {tasks, type} = props;
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <Header title={type.toUpperCase()} />
      <FlatList
        data={tasks}
        keyExtractor={(task, index) => index.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item, index}) => (
          <TaskRow
            item={item}
            type={type}
            completeTask={() => {
              dispatch(actions.completeTask(index));
            }}
            deleteTask={() => {
              if (type === constants.taskType.active) {
                dispatch(actions.deleteActiveTask(index));
              } else {
                dispatch(actions.deleteCompletedTask(index));
              }
            }}
          />
        )}
      />
    </View>
  );
};
