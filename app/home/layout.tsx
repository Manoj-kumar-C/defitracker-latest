
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Icon name="home" /> }} />
      <Tabs.Screen name="service1" options={{ title: 'Service 1', tabBarIcon: () => <Icon name="cog" /> }} />
      <Tabs.Screen name="service2" options={{ title: 'Service 2', tabBarIcon: () => <Icon name="tools" /> }} />
      <Tabs.Screen name="service3" options={{ title: 'Service 3', tabBarIcon: () => <Icon name="wrench" /> }} />
      <Tabs.Screen name="../settings" options={{ title: 'Settings', tabBarIcon: () => <Icon name="settings" /> }} />
    </Tabs>
  );
}
