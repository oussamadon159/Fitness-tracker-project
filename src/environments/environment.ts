// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // configuration that will successfully connect me to firebase backend
  firebase: {
    apiKey: "AIzaSyC7DiEbtTOIYQwXZmrjrRewYX1fqI_jdyY",
    authDomain: "ng-fitness-tracker-82530.firebaseapp.com",
    databaseURL: "https://ng-fitness-tracker-82530.firebaseio.com",
    projectId: "ng-fitness-tracker-82530",
    storageBucket: "ng-fitness-tracker-82530.appspot.com",
    messagingSenderId: "692274735479",
    appId: "1:692274735479:web:8306bb52ead3204d465972",
    measurementId: "G-B3T53B2BBL"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
