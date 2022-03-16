import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const BlankScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer>
      <Text style={{ color: theme.colors.strong }}>
        {'Double click me to edit 👀'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
