import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Switch, 
  Alert 
} from 'react-native';
import { auth } from '../firebase';
import { signOut, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
  const router = useRouter();

  // States for toggles
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  // Fetch user's email when component mounts
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace('/auth/signin');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out. Please try again later.');
    }
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    Alert.alert('Theme Updated', `Dark Mode is now ${!isDarkMode ? 'enabled' : 'disabled'}.`);
  };

  const handleToggleNotifications = () => {
    setPushNotifications((prevNotifications) => !prevNotifications);
    Alert.alert('Notifications Updated', `Push Notifications are now ${!pushNotifications ? 'enabled' : 'disabled'}.`);
  };

  const handleForgotPassword = () => {
    if (userEmail) {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          Alert.alert('Password Reset', 'A reset link has been sent to your email.');
        })
        .catch((error) => {
          Alert.alert('Error', 'Failed to send password reset link. Please try again.');
        });
    } else {
      Alert.alert('Error', 'No email address found.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Settings</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/home')}>
          <Icon name="home" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* User Preferences Section */}
        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Preferences</Text>
          <View style={styles.preference}>
            <Text style={styles.preferenceText}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={handleToggleDarkMode} />
          </View>
          <View style={styles.preference}>
            <Text style={styles.preferenceText}>Push Notifications</Text>
            <Switch value={pushNotifications} onValueChange={handleToggleNotifications} />
          </View>
        </View> */}

        {/* User Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Info</Text>
          <Text style={styles.preferenceText}>Email: {userEmail || 'Not Available'}</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push('/auth/forgot')}
          >
            <Text style={styles.optionText}>Change Password</Text>
            <Icon name="angle-right" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleNavigation('/account/manage-subscriptions')}
          >
            <Text style={styles.optionText}>Manage Subscriptions</Text>
            <Icon name="angle-right" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.optionText}>Forgot Password</Text>
            <Icon name="angle-right" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleNavigation('/about/privacy-policy')}
          >
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Icon name="angle-right" size={20} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => handleNavigation('/about/terms-of-service')}
          >
            <Text style={styles.optionText}>Terms of Service</Text>
            <Icon name="angle-right" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 5,
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  preferenceText: {
    fontSize: 14,
    color: '#333',
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  signOutButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
