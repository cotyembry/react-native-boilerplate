/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import $ from 'jquery';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PixelRatio,
  ScrollView,
  NavigationExperimental
} from 'react-native';

// import { NavigationExperimental, PixelRatio, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';

// const styles = StyleSheet.create({
//   navigator: {
//     flex: 1,
//   },
//   scrollView: {
//     marginTop: 64
//   },
//   row: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1 / PixelRatio.get(),
//     borderBottomColor: '#CDCDCD',
//   },
//   rowText: {
//     fontSize: 17,
//   },
//   buttonText: {
//     fontSize: 17,
//     fontWeight: '500',
//   },
//   contentWrapper: {
//     flex: 1,
//   }
// });

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}


// const {
//   CardStack: NavigationCardStack,
//   StateUtils: NavigationStateUtils,
// } = NavigationExperimental;


// class GarageSaleTrip extends Component {
//   render() {
//     return (
//         <NavigationCardStack 
//           onNavigateBack={onPopRouteFunc}
//           navigationState={myNavigationState}
//           renderScene={renderSceneFun} />
//     )
//   }
// }

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Navbar />
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class GarageSaleTrip extends Component {
  render() {
    return (
        <View>
          <View style={styles.container}>
            <View style={styles.instructions}>
              <Text>
                left
              </Text>
            </View>
            <View style={styles.instructions}>
              <Text>
                middle
              </Text>
            </View>
            <View style={styles.instructions}>
              <Text>
                right
              </Text>
            </View>
          </View>
        </View>
    )
  }
}


// class GarageSaleTrip extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       // This defines the initial navigation state.
//       navigationState: {
//         index: 0, // Starts with first route focused.
//         routes: [{key: 'My Initial Scene'}], // Starts with only one route.
//       }
//     };
//   }
//   onPopRoute() {

//   }
//   onPushRoute() {

//   }
//   onPopRoute() {

//   }
//   renderScene(sceneProps) {
//     // Render a scene for route.
//     // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
//     // as type `NavigationSceneRendererProps`.
//     // Here you could choose to render a different component for each route, but
//     // we'll keep it simple.
    
//     return (
//       <SceneOne
//         route={sceneProps.scene.route}
//         onPushRoute={this.onPushRoute}
//         onPopRoute={this.onPopRoute}
//         onExit={this.props.onExit}
//       />
//     )
//   }
//   //now use NavigationCardStack to render the scenes
//   render() {
//     return (
//       <NavigationCardStack
//         onNavigateBack={this.onPopRoute}
//         navigationState={this.state.navigationState}
//         renderScene={this.renderScene}
//         style={styles.navigator}
//       />
//     )
//   }

//   // render() {
//   //   return (
//   //     <View>
//   //       <Text>Hello</Text>
//   //     </View>
//   //   )
//   // }
// }

// class MyVerySimpleNavigator extends Component {

//   // This sets up the methods (e.g. Pop, Push) for navigation.
//   constructor(props, context) {
//     super(props, context);

//     this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
//     this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

//     this._renderScene = this._renderScene.bind(this);
//   }

//   // Now we finally get to use the `NavigationCardStack` to render the scenes.
//   render() {
//     return (
//       <NavigationCardStack
//         onNavigateBack={this._onPopRoute}
//         navigationState={this.props.navigationState}
//         renderScene={this._renderScene}
//         style={styles.navigator}
//       />
//     );
//   }



// class BleedingEdgeApplication extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       // This defines the initial navigation state.
//       navigationState: {
//         index: 0, // Starts with first route focused.
//         routes: [{key: 'My Initial Scene'}], // Starts with only one route.
//       },
//     };

//     // We'll define this function later - hang on
//     this._onNavigationChange = this._onNavigationChange.bind(this);
//   }


//   _onNavigationChange(type) {
//     // Extract the navigationState from the current state:
//     let {navigationState} = this.state;

//     switch (type) {
//       case 'push':
//         // Push a new route, which in our case is an object with a key value.
//         // I am fond of cryptic keys (but seriously, keys should be unique)
//         const route = {key: 'Route-' + Date.now()};

//         // Use the push reducer provided by NavigationStateUtils
//         navigationState = NavigationStateUtils.push(navigationState, route);
//         break;

//       case 'pop':
//         // Pop the current route using the pop reducer.
//         navigationState = NavigationStateUtils.pop(navigationState);
//         break;
//     }

//     // NavigationStateUtils gives you back the same `navigationState` if nothing
//     // has changed. We will only update state if it has changed.
//     if (this.state.navigationState !== navigationState) {
//       // Always use setState() when setting a new state!
//       this.setState({navigationState});
//       // If you are new to ES6, the above is equivalent to:
//       // this.setState({navigationState: navigationState});
//     }
//   }

//   render() {
//     return (
//       <MyVerySimpleNavigator
//         navigationState={this.state.navigationState}
//         onNavigationChange={this._onNavigationChange}
//         onExit={this._exit}
//       />
//     );
//   }
// }

// class TappableRow extends Component {
//   render() {
//     return (
//       <TouchableHighlight
//         style={styles.row}
//         underlayColor="#D0D0D0"
//         onPress={this.props.onPress}>
//         <Text style={styles.buttonText}>
//           {this.props.text}
//         </Text>
//       </TouchableHighlight>
//     );
//   }
// }

// class MyVeryComplexScene extends Component {
//   render() {
//     return (
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.row}>
//           Route: {this.props.route.key}
//         </Text>
//         <TappableRow
//           text="Tap me to load the next scene"
//           onPress={this.props.onPushRoute}
//         />
//         <TappableRow
//           text="Tap me to go back"
//           onPress={this.props.onPopRoute}
//         />
//       </ScrollView>
//     );
//   }
// }

// class MyVerySimpleNavigator extends Component {

//   // This sets up the methods (e.g. Pop, Push) for navigation.
//   constructor(props, context) {
//     super(props, context);

//     this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
//     this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

//     this._renderScene = this._renderScene.bind(this);
//   }

//   // Now we finally get to use the `NavigationCardStack` to render the scenes.
//   render() {
//     return (
//       <NavigationCardStack
//         onNavigateBack={this._onPopRoute}
//         navigationState={this.props.navigationState}
//         renderScene={this._renderScene}
//         style={styles.navigator}
//       />
//     );
//   }

//   // Render a scene for route.
//   // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
//   // as type `NavigationSceneRendererProps`.
//   // Here you could choose to render a different component for each route, but
//   // we'll keep it simple.
//   _renderScene(sceneProps) {
//     return (
//       <MyVeryComplexScene
//         route={sceneProps.scene.route}
//         onPushRoute={this._onPushRoute}
//         onPopRoute={this._onPopRoute}
//         onExit={this.props.onExit}
//       />
//     );
//   }
// }


AppRegistry.registerComponent('GarageSaleTrip', () => GarageSaleTrip);
