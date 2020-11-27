import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {colors, constants, strings} from '~common';
import {TaskList} from '~containers';
import {Input} from '~components';
import {actions} from '~redux/task';

const isiOS = Platform.OS === 'ios';
export default props => {
  // const  {route: {params}, navigation}=props;
  // const {navigate, state, goBack} = navigation;
  const dispatch = useDispatch();
  const taskStore = useSelector(state => state.taskStore);
  const {activeTasks} = taskStore;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : -500;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <SafeAreaView style={styles.safeAreaStyle}>
        <TaskList tasks={activeTasks} type={constants.taskType.active} />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.keyboardAvoidingStyle}>
          <Input
            placeholder={strings.createTask}
            placeholderTextColor={colors.white}
            maxLength={70}
            submit={text => {
              dispatch(actions.createTask(text));
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = {
  safeAreaStyle: {backgroundColor: colors.primary, flex: 1},
  keyboardAvoidingStyle: {
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: colors.primary,
  },
};
