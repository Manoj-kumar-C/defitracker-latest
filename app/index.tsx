import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/home');
      } else {
        router.replace('/auth/signin');
      }
    });

    return () => unsubscribe();
  }, []);

  return null; // Empty while redirecting
}
