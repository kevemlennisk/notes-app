import React from 'react';
import ViewContainer from '../components/ViewContainer';
import {routes} from '../routes/routes';
import FloatingButton from '../components/FloatingButton';
import OpenDrawerIcon from '../components/OpenDrawerIcon';

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Notas',
    headerLeft: () => <OpenDrawerIcon />,
  });

  const goToCreateNoteScreen = () => {
    navigation.navigate(routes.CREATE_NEW_NOTE_SCREEN);
  };

  return (
    <ViewContainer>
      <FloatingButton onPress={goToCreateNoteScreen} />
    </ViewContainer>
  );
};
