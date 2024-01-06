// 

// import { Link } from 'expo-router';

// export default function Root() {
//   return <Link href="/home/home">Navigate to nested route</Link>;
// }

import { View, Text } from 'react-native';
import { Link } from 'expo-router';
export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link href="/modal">Present modal</Link>
    </View>
  );
}



