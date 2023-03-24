import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Featured Recipes</Text>
      <View style={styles.containerInner}>
        <Text>Fresh Bread</Text>
        <Text>Featured</Text>
      </View>

      <View>
        <Text>Recently Viewed</Text>
        <Text>Featured</Text>

        <View>
          <Text>Hello</Text>
        </View>
      </View>
    </View>
  );
}

function FavScreen() {
  return (
    <View style={styles.container}>
      <Text>Featured Recipes</Text>
      <View>
        <Text>Fresh Bread</Text>
        <Text>Featured</Text>
      </View>

      <View>
        <Text>Recently Viewed</Text>
        <View>
          <Text>Item</Text>
        </View>
      </View>
    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text>Featured Recipes</Text>
      <View>
        <Text>Fresh Bread</Text>
        <Text>Featured</Text>
      </View>

      <View>
        <Text>Recently Viewed</Text>
        <View>
          <Text>Item</Text>
        </View>
      </View>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Featured Recipes</Text>
      <View>
        <Text>Fresh Bread</Text>
        <Text>Featured</Text>
      </View>

      <View style={styles.white}>
        <Text>Recently Viewed</Text>
        <View>
          <Text>Item</Text>
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Favourites" component={FavScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    color: 'black',
  },

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f2f2f2',
  },
  containerInner: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  white: {
    backgroundColor: 'white',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
