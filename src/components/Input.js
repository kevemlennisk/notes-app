import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {ThemeProviderContext} from '../ThemeProviders';

import {TextInput} from 'react-native';

const CustomTextInput = styled(TextInput)`
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.input.borderColor};
  color: ${(props) => props.theme.textColor};
  padding-bottom: 8px;
  position: relative;
`;

export default ({value, placeholder, onChangeText, ...props}) => {
  const themeContext = useContext(ThemeContext);
  const {theme} = useContext(ThemeProviderContext);

  return (
    <CustomTextInput
      keyboardAppearance={theme}
      value={value}
      enableReturnAutomatically
      placeholderTextColor={themeContext.textColor}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...props}
    />
  );
};
