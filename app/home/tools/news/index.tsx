import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const newsArticles = [
  { 
    id: '1', 
    title: 'Breaking News: Market Hits Record Highs', 
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Market+News' 
  },
  { 
    id: '2', 
    title: 'Tech Innovations of 2024', 
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Tech+Innovations' 
  },
  { 
    id: '3', 
    title: 'Climate Change Effects and Solutions', 
    image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Climate+Change' 
  },
];

export default function NewsList() {
  const router = useRouter();  // Get the router object

  // Function to navigate to the news details page
  const handleNavigate = (id: string) => {
    router.push(`/home/tools/news/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest News</Text>
      {newsArticles.map((article) => (
        <TouchableOpacity 
          key={article.id} 
          style={styles.card} 
          onPress={() => handleNavigate(article.id)}  // Trigger navigation on press
        >
          <Image 
            source={{ uri: article.image }} 
            style={styles.image} 
          />
          <Text style={styles.title}>{article.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f8fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
});
