import React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const CustomButtonView = styled(View)`
  background-color: ${({theme}) => theme.buttons.primaryBackground};
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CustomButtonText = styled(Text)`
  color: ${(props) => props.theme.buttons.primaryTextColor};
  font-size: 15px;
  font-style: normal;
  font-weight: bold;
  padding: 10px;
`;

export default ({onPress, text}) => {
  return (
    <Touchable onPress={onPress}>
      <CustomButtonView>
        <CustomButtonText>{text}</CustomButtonText>
      </CustomButtonView>
    </Touchable>
  );
};
