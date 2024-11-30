import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const news = () => {
  // Sample data for news articles
  const newsData = [
    {
      id: '1',
      title: 'Breaking News: React Native 0.72 Released!',
      description: 'The latest version of React Native brings exciting new features and improvements.',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
      id: '2',
      title: 'JavaScript Trends to Watch in 2024',
      description: 'Stay ahead of the curve with the top JavaScript trends you should be following.',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
      id: '3',
      title: 'How to Build a Mobile App with React Native',
      description: 'Learn step-by-step how to build a fully functional mobile app using React Native.',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest News</Text>

      {/* Render News Articles List */}
      <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
            <View style={styles.textContainer}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  newsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3, // Add a shadow effect for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
    padding: 10,
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: '#777',
  },
});

export default news;
