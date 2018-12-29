# app
Android and IOS app

Certify if you have the minimum requirements to run:

      $ node -v 
      > 8.11.3

      $ npm -v
      > 6.3.0

### SETUP
 
- `npm install -g react-native-cli` 
- `npm install`

### RUN

- `react-native run-ios`
- `react-native run-android`


### May u have some problems:

- Failed to install the following Android SDK packages as some licences have not been accepted.

- run `yes | sdkmanager --licenses`

### To create an android emulator:

- `sdkmanager "system-images;android-23;google_apis;x86"`
- `avdmanager create avd -n androidzero-6 --abi google_apis/x86 --package "system-images;android-23;google_apis;x86"`
- `emulator @androidzero-6`
