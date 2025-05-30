import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';

export default function Home() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);

  const width = Dimensions.get('window').width;

  // Animated Value for Parallax Effect
  const scrollY = new Animated.Value(0);

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/auth/signin');
  };

  const handleNotificationPress = () => {
    setShowNotification(!showNotification); // Toggle the notification message
  };

  return (
    <ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>Defi Tracker</Text>

          {/* Notification and Profile Icons at the Right */}
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

        {/* Parallax Header */}
        <Animated.View
          style={[
            styles.carouselContainer,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-100, 0, 100],
                    outputRange: [50, 0, -50],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        >
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('Current index:', index)}
            renderItem={({ index }) => (
              <View style={styles.carouselItem}>
                <Text style={styles.carouselText}>{index}</Text>
              </View>
            )}
          />
        </Animated.View>

        <Text style={styles.subtitle}>Our Tools</Text>

        {/* Two Buttons Per Row */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/budgetplanner')}
          >
            <Icon name="calculator" size={24} color="green" />
            <Text style={styles.buttonText}>Budget Planner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/visualcharts')}
          >
            <Icon name="pie-chart" size={24} color="green" />
            <Text style={styles.buttonText}>Visual Charts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/news')}
          >
            <Icon name="bell" size={24} color="green" />
            <Text style={styles.buttonText}>Market News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/loancalculator')}
          >
            <Icon name="money" size={24} color="green" />
            <Text style={styles.buttonText}>Loan Calculator</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/creditscore')}
          >
            <Icon name="credit-card" size={24} color="green" />
            <Text style={styles.buttonText}>Credit Score</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/ytchannels')}
          >
            <Icon name="youtube" size={24} color="green" />
            <Text style={styles.buttonText}>YouTube Channel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/chatwithai')}
          >
            <Icon name="comments" size={24} color="green" />
            <Text style={styles.buttonText}>AI Chat Assistance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/ytchannels')}
          >
            <Icon name="youtube" size={24} color="green" />
            <Text style={styles.buttonText}>Insurance</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/chatwithai')}
          >
            <Icon name="comments" size={24} color="green" />
            <Text style={styles.buttonText}>Consulting</Text>
          </TouchableOpacity>
          <View style={styles.emptyButtonPlaceholder} />
        </View>

        <Text style={styles.subtitle}>Our Tools</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={() => router.push('/home/tools/financetools')}
          >
            <Icon name="comments" size={24} color="green" />
            <Text style={styles.buttonText}>Finance Tools</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingBottom: 20, // Padding for bottom components
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
    flex: 1,  // Take up the remaining space to push icons to the right
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
    marginLeft: 15, // Add space between icons
    backgroundColor: '#E3F2FD', // Soft blue background
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
  carouselContainer: {
    marginVertical: 15,
    paddingHorizontal: 10, // Ensure spacing
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Soft green
    borderRadius: 10,
  },
  carouselText: {
    fontSize: 30,
    color: 'black',
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
    paddingVertical: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  emptyButtonPlaceholder: {
    flex: 1, // Empty space to balance out layout
  },
});
