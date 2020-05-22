import React from 'react';
import ViewContainer from '../components/ViewContainer';
import OpenDrawerIcon from '../components/OpenDrawerIcon';

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Mensagens',
    headerLeft: () => <OpenDrawerIcon />,
  });

  return (
    <ViewContainer>
    </ViewContainer>
  );
};
