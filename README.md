# Examina Android

Headway-inspired Android client for **Examina**.  
**Does not modify** [www.examina.ink](https://www.examina.ink) — Create/Generate opens the live site in a WebView.

## 📦 Install the APK

### Download
Get the latest APK: **`artifacts/examina-v1.0.0.apk`** (72 MB)

### Install on Android Device
1. **Transfer** the APK to your Android phone (via USB, cloud storage, or email)
2. **Enable** "Install unknown apps" for your file manager:
   - Go to Settings → Apps → Special access → Install unknown apps
   - Select your file manager (Files, Chrome, etc.) and enable
3. **Tap** the APK file to install
4. **Open** Examina from your app drawer

### Install via ADB (Developer)
```bash
adb install artifacts/examina-v1.0.0.apk
```

## 🛠 Development

### Run in Expo
```bash
npm install
npx expo start
# Then press 'a' for Android or scan QR with Expo Go
```

### Build APK Locally
```bash
npm install
npx expo prebuild --platform android --clean

# Set Android SDK path
export ANDROID_HOME=/path/to/android-sdk
export ANDROID_SDK_ROOT=/path/to/android-sdk

cd android && ./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release.apk
```

### Build with EAS (Cloud)
```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview  # APK
eas build -p android --profile production  # AAB for Play Store
```

## 🎨 Features

- **Headway-inspired UI** with beige background, streak cards, and daily mission bar
- **Category chips** for quick quiz navigation
- **Book-cover style quiz cards** with colorful designs
- **Dice bar** for random quiz generation
- **WebView integration** opens examina.ink for quiz creation
- **Bottom tab navigation** (For you, Explore, Library, Profile)

## 🚀 Play Console Deployment

1. Create app **Examina** / package `ink.examina.app`
2. Build AAB: `eas build -p android --profile production`
3. Upload AAB to Play Console
4. Store listing:
   - Screenshots: Home tab with Headway-style layout
   - Privacy policy: https://www.examina.ink/privacy
5. Submit for review

## 📱 App Details

- **Package**: `ink.examina.app`
- **Version**: 1.0.0
- **Min SDK**: Android 7.0 (API 24)
- **Target SDK**: Android 14 (API 35)
- **Expo**: ~53.0.0
- **React Native**: 0.79.2
