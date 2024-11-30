import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/auth/signin');
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Defi Tracker</Text>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push('/settings')}
        >
          <Icon name="user-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Finance at its Best</Text>

      {/* Two Buttons Per Row */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/budgetplanner')}
        >
          <Icon name="calculator" size={24} color="#fff" />
          <Text style={styles.buttonText}>Budget Planner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/visualcharts')}
        >
          <Icon name="pie-chart" size={24} color="#fff" />
          <Text style={styles.buttonText}>Visual Charts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/news')}
        >
          <Icon name="bell" size={24} color="#fff" />
          <Text style={styles.buttonText}>Market News</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/loancalculator')}
        >
          <Icon name="money" size={24} color="#fff" />
          <Text style={styles.buttonText}>Loan Calculator</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/creditscore')}
        >
          <Icon name="credit-card" size={24} color="#fff" />
          <Text style={styles.buttonText}>Credit Score</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/ytchannels')}
        >
          <Icon name="youtube" size={24} color="#fff" />
          <Text style={styles.buttonText}>YouTube Channel</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/chatwithai')}
        >
          <Icon name="comments" size={24} color="#fff" />
          <Text style={styles.buttonText}>AI Chat Assistance</Text>
        </TouchableOpacity>
        <View style={styles.emptyButtonPlaceholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    
    
  },
  topBar: {
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    
  },
  topBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 5,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceButton: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyButtonPlaceholder: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
});
