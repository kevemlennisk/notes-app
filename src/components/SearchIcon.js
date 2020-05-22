import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const ImageIcon = styled(Image)`
  tint-color: #fff;
  width: 24px;
  margin-right: 16px;
`;

export default () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {}}>
      <ImageIcon
        source={require('../assets/icons/search.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
