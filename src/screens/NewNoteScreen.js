import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import ViewContainer from '../components/ViewContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import {createNote} from '../services/NoteService';
import Text from '../components/Typography/Text';

const FormItem = styled(View)`
  padding: 10px 0px 10px 0px;
`;

const initialState = {title: '', note: ''};

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Nova nota',
  });
  const [loading, setLoading] = useState(false);

  const NoteSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').required('É necessário um título'),
    note: Yup.string(),
  });

  const onSubmit = async (values) => {
    if (values && values.note) {
      setLoading(true);
      const response = await createNote(values);
      setLoading(false);
    }
  };

  const initialState = {title: '', note: ''};

  return (
    <ViewContainer>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Formik
          validationSchema={NoteSchema}
          initialValues={initialState}
          onSubmit={onSubmit}>
          {({handleChange, handleSubmit, values, setFieldTouched, errors}) => (
            <>
              <FormItem>
                <Input
                  placeholder="Título"
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  value={values.title}
                />
                {errors.title ? (
                  <Text style={{color: 'red'}}>{errors.title}</Text>
                ) : null}
              </FormItem>
              <FormItem>
                <Input
                  multiline
                  placeholder="Nota"
                  onChangeText={handleChange('note')}
                  onBlur={() => setFieldTouched('note')}
                  value={values.note}
                  numberOfLines={4}
                />
              </FormItem>
              <FormItem>
                <Button onPress={handleSubmit} text="Salvar" />
              </FormItem>
            </>
          )}
        </Formik>
      )}
    </ViewContainer>
  );
};
