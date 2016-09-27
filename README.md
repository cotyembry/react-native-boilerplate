# react-native-boilerplate

Just clone this repo and or download it and boom, an instant react-native setup. 

Well, you need to run 
    npm install
to get the .js side of things installed, and have node installed, and npm.

Not that this project is really needed since setting up a new one is very simple when using react-native init and reading facebook's docs, ... etc, but if you need to work offline or need to see an example of an existing project that already 'just works', well, here you are.

This next part is only for `ios development`, I haven't gotten to the android side just yet.

To start development you can just fire up the simulator with your app installed... Well, you will need to install the app on the ios device/simulator so run inside the appropriate directory in the project (i.e. /node_modules/react-native/... somewhere in here you will find a file  named react-native. I think you can run it from there - or maybe in the main directory)
    react-native run-ios
This will start the packager, install the app on to the simulator, and have you super close to hot reloading the app as you develop (that is huge for the development workflow if you don't already understand...!!!)
