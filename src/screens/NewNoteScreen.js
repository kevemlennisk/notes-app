import React from 'react';
import ViewContainer from '../components/ViewContainer';
import {routes} from '../routes/routes';
import FloatingButton from '../components/FloatingButton';

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Nova nota',
  });

  const goToHomeScreen = () => {
    navigation.navigate(routes.HOME_SCREEN);
  };

  return (
    <ViewContainer>
      <FloatingButton onPress={goToHomeScreen} />
    </ViewContainer>
  );
};
