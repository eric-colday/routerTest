// import { Tabs } from "expo-router";

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#f4511e",
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     />
//   );
// }

// import { Drawer } from 'expo-router/drawer';

// export default function Layout() {
//   return <Drawer />;
// }

// import { Stack } from 'expo-router';

// export default Stack;

import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}

