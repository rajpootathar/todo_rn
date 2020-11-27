import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {colors, constants} from '~common';
import {useSelector} from 'react-redux';
import {TaskList} from '~containers';

const isiOS = Platform.OS === 'ios';
export default props => {
  const taskStore = useSelector(state => state.taskStore);
  const {completedTasks} = taskStore;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <SafeAreaView style={styles.safeAreaStyle}>
        <TaskList tasks={completedTasks} type={constants.taskType.completed} />
      </SafeAreaView>
    </>
  );
};

const styles = {
  safeAreaStyle: {backgroundColor: colors.primary, flex: 1},
};
