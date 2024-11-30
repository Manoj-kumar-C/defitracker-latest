import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const ytChannels = () => {
  // Sample list of YouTube channels
  const channels = [
    {
      id: '1',
      name: 'Channel One',
      description: 'Tech tutorials and reviews.',
      thumbnail: 'https://i.ytimg.com/vi/abcd1234/hqdefault.jpg', // Replace with real image URL
    },
    {
      id: '2',
      name: 'Channel Two',
      description: 'Fitness and lifestyle videos.',
      thumbnail: 'https://i.ytimg.com/vi/abcd5678/hqdefault.jpg', // Replace with real image URL
    },
    {
      id: '3',
      name: 'Channel Three',
      description: 'Cooking and food recipes.',
      thumbnail: 'https://i.ytimg.com/vi/abcd91011/hqdefault.jpg', // Replace with real image URL
    },
    // Add more channels here
  ];

  // Render each channel
  const renderChannel = ({ item }) => (
    <View style={styles.channelContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.channelInfo}>
        <Text style={styles.channelName}>{item.name}</Text>
        <Text style={styles.channelDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>YouTube Channels</Text>

      <FlatList
        data={channels}
        renderItem={renderChannel}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.channelList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  channelList: {
    paddingBottom: 20,
  },
  channelContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  channelInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  channelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  channelDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default ytChannels;
