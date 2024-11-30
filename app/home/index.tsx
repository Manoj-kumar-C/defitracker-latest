import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/auth/signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Defi Tracker. Finance at its Best.</Text>

      {/* First Row of Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/budgetplanner')}
        >
          <Icon name="calculator" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Budget Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/visualcharts')}
        >
          <Icon name="pie-chart" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Visual Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/news')}
        >
          <Icon name="bell" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Market News</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row of Buttons */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/loancalculator')}
        >
          <Icon name="calculator" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Loan Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/creditscore')}
        >
          <Icon name="credit-card" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Credit Score</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/tools/ytchannels')}
        >
          <Icon name="youtube" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>YouTube Channel</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  serviceButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  icon: {
    marginBottom: 5,
  },
  signOutButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

