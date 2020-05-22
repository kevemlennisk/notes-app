import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {routes} from '../routes/routes';
import FloatingButton from '../components/FloatingButton';
import OpenDrawerIcon from '../components/OpenDrawerIcon';
import styled from 'styled-components';
import {getNotes} from '../services/NoteService';
import NoteItem from '../components/NoteItem';

const ViewContainerList = styled(View)`
  display: flex;
  flex: 1;
  margin: 0px;
  padding: 0 16px;
  background-color: ${(props) => props.theme.backgroundList};
`;

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Notas',
    headerLeft: () => <OpenDrawerIcon />,
  });

  const goToCreateNoteScreen = () => {
    navigation.navigate(routes.CREATE_NEW_NOTE_SCREEN);
  };

  const perPage = 10;
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);

  const loadNotes = async () => {
    setLoading(true);
    const pagination = `?page=${page}&per_page=${perPage}`;
    const listNotes = await getNotes(pagination);

    setNotes([...notes, ...listNotes]);
    setLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    const getAllNotes = async () => {
      await loadNotes();
    };
    getAllNotes();
  }, []);

  return (
    <ViewContainerList>
      <FlatList
        data={notes}
        numColumns={3}
        renderItem={({item}) => <NoteItem value={item} />}
        keyExtractor={(item) => item._id}
        onEndReached={loadNotes}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? <ActivityIndicator color="#ccc" size="large" /> : ''
        }
      />
      <FloatingButton onPress={goToCreateNoteScreen} />
    </ViewContainerList>
  );
};
