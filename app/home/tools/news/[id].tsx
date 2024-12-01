import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from 'expo-router';

const newsArticles = [
  { 
    id: '1', 
    title: 'Breaking News: Market Hits Record Highs', 
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Market+News',
    content: 'The stock market reached record highs today due to...'
  },
  { 
    id: '2', 
    title: 'Tech Innovations of 2024', 
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Tech+Innovations',
    content: 'In 2024, technology has seen significant advances in AI, blockchain...'
  },
  { 
    id: '3', 
    title: 'Climate Change Effects and Solutions', 
    image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Climate+Change',
    content: 'Climate change is affecting ecosystems worldwide. Some solutions include...'
  },
];

export default function NewsDetail() {
  const route = useRoute(); // Access route params here
  const { id } = route.params; // Extract the id from params

  const article = newsArticles.find((item) => item.id === id);

  if (!article) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Article not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: article.image }} 
        style={styles.image} 
      />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});
