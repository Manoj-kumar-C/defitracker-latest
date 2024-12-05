import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FinanceTools() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/auth/signin');
  };

  const handleNotificationPress = () => {
    setShowNotification(!showNotification); // Toggle the notification message
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Defi Tracker</Text>

          {/* Notification and Profile Icons */}
          <View style={styles.iconsContainer}>
            {/* Profile Button */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push('/settings')}
            >
              <Icon name="user-circle" size={30} color="#5DBB63" />
            </TouchableOpacity>

            {/* Notification Icon */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleNotificationPress}
            >
              <Icon name="bell" size={30} color="#5DBB63" />
            </TouchableOpacity>

            {/* Notification Message */}
            {showNotification && (
              <View style={styles.notificationMessage}>
                <Text style={styles.notificationText}>You have new notifications!</Text>
              </View>
            )}
          </View>
        </View>

        {/* Finance Tools Section */}
        <Text style={styles.subtitle}>Finance Tools</Text>

        {/* Row 1 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/SIPCalculatorScreen')}
          >
            <Icon name="calculator" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>SIP Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/FDCalculatorScreen')}
          >
            <Icon name="bank" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>FD Calculator</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/EMICalculatorScreen')}
          >
            <Icon name="credit-card" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>EMI Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/SimpleIntrestScreen')}
          >
            <Icon name="percent" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>Simple Interest</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/CompoundIntrest')}
          >
            <Icon name="line-chart" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>Compound Interest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/InflationCalculatorScreen')}
          >
            <Icon name="bar-chart" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>Inflation</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/BrokerageScreen')}
          >
            <Icon name="exchange" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>Brokerage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/finance/TDSScreen')}
          >
            <Icon name="money" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>TDS Calculator</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/consulting')}
          >
            <Icon name="users" size={24} color="#5DBB63" />
            <Text style={styles.buttonText}>Consulting</Text>
          </TouchableOpacity>
          <View style={styles.emptyButtonPlaceholder} />
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  topBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  topBarTitle: {
    color: '#2C3E50',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
    marginLeft: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 50,
    elevation: 3,
  },
  notificationMessage: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: '#FFEB3B',
    padding: 8,
    borderRadius: 5,
    zIndex: 1000,
  },
  notificationText: {
    color: '#212121',
    fontSize: 14,
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
    paddingHorizontal: 10,
  },
  serviceButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 5,
  },
  emptyButtonPlaceholder: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
});

