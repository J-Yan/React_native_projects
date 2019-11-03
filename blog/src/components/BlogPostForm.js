import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title,setTitle] = useState(initialValues.title);
  const [content,setContent]= useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Edit title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button
        title="Add Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    marginHorizontal: 10
  },
  label: {
    fontSize: 18,
    margin: 10
  }
});

export default BlogPostForm;
