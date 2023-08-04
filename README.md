It is a React Native application that allows the user to enter a PIN code and fetches the corresponding district,
state, country, and name using an API. The app displays this information on the screen.

Getting Started
To run the PinCode Location App on your local machine, follow the steps below:

Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

Installation

Clone the repository to your local machine:

git clone <repository_url>

Navigate to the project directory:

cd PinCodeLocationApp

Install the dependencies:

npm install

Running the App

To run the app on an Android or iOS simulator/emulator, use the following command:


npx react-native run-android   # For Android
npx react-native run-ios       # For iOS

Make sure you have an emulator or device connected and properly set up for the respective platform.

Usage
Once the app is running on the simulator/emulator or device, you will see the following components on the screen:

Text Input: Enter a 6-digit PIN code here.
"Get Location Info" Button: Click this button to fetch location information based on the entered PIN code.
Result Section: This section displays the fetched location information, including Name, District, State, and Country.
Enter a valid 6-digit PIN code in the Text Input and press the "Get Location Info" button to see the corresponding location information.

API
The app uses the "API PinCode" service to fetch location information based on the entered PIN code. The API endpoint used is:

https://api.postalpincode.in/pincode/:pincode

