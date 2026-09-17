# Examina Android

Headway-inspired Android client for **Examina**.  
**Does not modify** [www.examina.ink](https://www.examina.ink) — Create/Generate opens the live site in a WebView.

## Install

Download the latest APK from `artifacts/examina-v1.0.1.apk` and install on your Android device.

**Note:** You may need to enable "Install from Unknown Sources" in your device settings.

## Run
```bash
npm install
npx expo start
```

## Build APK (local)
```bash
npm install
npx expo prebuild --platform android --clean
export ANDROID_HOME=~/android-sdk
cd android && ./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release.apk
```

## EAS (Play Store AAB)
```bash
npm i -g eas-cli
eas login
eas build -p android --profile preview
```

## Play Console
1. Create app `Examina` / package `ink.examina.app`
2. Upload AAB from EAS
3. Store listing screenshots (home tab matches Headway-style layout)
4. Privacy policy URL: https://www.examina.ink/privacy
