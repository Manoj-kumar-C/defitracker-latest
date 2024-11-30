import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';

const openAI_API_KEY = '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';

const ChatWithAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) {
      Alert.alert('Error', 'Message cannot be empty');
      return;
    }

    const userMessage = { sender: 'User', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendMessageToOpenAI(input);
      const aiMessage = { sender: 'AI', text: response };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      Alert.alert(
        'Error',
        'Failed to communicate with OpenAI. Please try again later.'
      );
      console.error('Error communicating with OpenAI:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessageToOpenAI = async (userInput) => {
    const MAX_RETRIES = 3;
    let attempts = 0;

    while (attempts < MAX_RETRIES) {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are an AI assistant.' },
              { role: 'user', content: userInput },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openAI_API_KEY}`,
            },
          }
        );

        return response.data.choices[0].message.content.trim();
      } catch (error) {
        if (error.response?.status === 429) {
          attempts++;
          await new Promise((resolve) =>
            setTimeout(resolve, 1000 * 2 ** attempts)
          );
        } else {
          throw error;
        }
      }
    }

    throw new Error('Max retries reached');
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'User' ? styles.userMessage : styles.aiMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(_, index) => index.toString()}
        style={styles.chatArea}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
      {loading && <ActivityIndicator size="large" color="#007bff" />}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          disabled={loading}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end',
  },
  aiMessage: {
    backgroundColor: '#e1e1e1',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007bff',
    marginLeft: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatWithAI;
