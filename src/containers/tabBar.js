import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {colors, helpers} from '~common';
import {Icon} from '~components';

const {wp, hp} = helpers;
export default ({state, descriptors, navigation}) => {
  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };
  return (
    <SafeAreaView style={{backgroundColor: colors.secondary}}>
      <View
        style={{
          flexDirection: 'row',
          height: wp(16),
          backgroundColor: colors.secondary,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              style={{
                borderRadius: 5,
                height: wp(13),
                width: wp(13),
                backgroundColor: isFocused ? 'white' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onPress(route, isFocused)}>
              <Icon
                name={options.icon}
                size={wp(10)}
                color={isFocused ? colors.primary : colors.white}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
