import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/auth/signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Defi Tracker . Finance at its Best.</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service1')}
        >
          <Text style={styles.buttonText}>Budget Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service2')}
        >
          <Text style={styles.buttonText}>Visual Charts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service3')}
        >
          <Text style={styles.buttonText}>Market News & Alerts</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service1')}
        >
          <Text style={styles.buttonText}>loan Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service2')}
        >
          <Text style={styles.buttonText}>Credit Score Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service3')}
        >
          <Text style={styles.buttonText}>Youtube Channel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service1')}
        >
          <Text style={styles.buttonText}>Service 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service2')}
        >
          <Text style={styles.buttonText}>Service 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.serviceButton}
          onPress={() => router.push('/home/service3')}
        >
          <Text style={styles.buttonText}>Service 3</Text>
        </TouchableOpacity>
      </View>

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
  buttonsContainer: {
    marginBottom: 30,
  },
  serviceButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
