import { InjectionToken } from "@angular/core";
import { Constants } from "src/models/constants.models";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface FirebaseConfig {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    webApplicationId: string
}

export interface AppConfig {
    appName: string;
    apiBase: string;
    googleApiKey: string;
    oneSignalAppId: string;
    oneSignalGPSenderId: string;
    availableLanguages: Array<{ code: string, name: string }>;
    firebaseConfig: FirebaseConfig;
    demoMode: boolean;
    defaultThemeMode: string;
    demoLoginCredentials: { country: string, phoneNumber: string; otp: string; };
}

export const BaseAppConfig: AppConfig = {
    appName: "YourAppName Seller",
    apiBase: "https://yourapibase.com/",
    googleApiKey: "YourGApiKey",
    oneSignalAppId: "YourOneSignalStoreAppId",
    oneSignalGPSenderId: "xxxxxxxxxxxxx",
    availableLanguages: [{
        code: 'en',
        name: 'English'
    }, {
        code: 'ar',
        name: 'عربي'
    }, {
        code: 'fr',
        name: 'Français'
    }, {
        code: 'es',
        name: 'Española'
    }, {
        code: 'id',
        name: 'Bahasa Indonesia'
    }, {
        code: 'pt',
        name: 'Português'
    }, {
        code: 'tr',
        name: 'Türk'
    }, {
        code: 'it',
        name: 'Italiana'
    }, {
        code: 'sw',
        name: 'Kiswahili'
    }],
    demoMode: false,
    defaultThemeMode: Constants.THEME_MODE_LIGHT,
    demoLoginCredentials: { country: "91", phoneNumber: "8787878787", otp: "123456" },
    firebaseConfig: {
        webApplicationId: "xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com",
        apiKey: "YourGApiKey",
        authDomain: "yourfirebaseappid.firebaseapp.com",
        databaseURL: "https://yourfirebaseappid.firebaseio.com",
        projectId: "yourfirebaseappid",
        storageBucket: "yourfirebaseappid.appspot.com",
        messagingSenderId: "xxxxxxxxxxxxx"
    }
};