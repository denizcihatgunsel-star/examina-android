# Examina Android v1.0.2 Release Notes

## 🎯 Root Cause Analysis

### The Crash
The app was crashing immediately upon launch with no visible error to the user - it would open for a split second and then close.

### Investigation & Root Cause
After analyzing the codebase and build configuration, the root cause was identified:

**React Native New Architecture was enabled by default** (`newArchEnabled=true` in `android/gradle.properties`)

The new architecture (Fabric rendering engine + TurboModules) in React Native 0.79.6 is still unstable when used with Expo SDK 53. This incompatibility causes immediate crashes on app startup.

### The Fix
Changed `newArchEnabled=false` in `android/gradle.properties` to disable the new architecture and use the stable legacy architecture.

**Result:** App now launches successfully and runs without crashes.

## 🎨 UI/UX Improvements

### Professional Dark Theme
- Background: `#0e0d12` (deep dark matching logo)
- Cards: `#1a1920` (slightly lighter for depth)
- Text: Pure white with proper contrast ratios
- Accent colors updated for dark theme compatibility

### Real Examina Branding
- Replaced all placeholder icons with the official purple/blue gradient 'E' logo
- Updated app icon (1024x1024)
- Updated adaptive icon with transparent foreground on dark background
- Updated splash screen with centered logo
- Updated in-app header logo (32x32)

### Color Palette
- Primary Blue: `#6b8aff`
- Green (success): `#4ade80`
- Orange (warning): `#fb923c`
- Purple (accent): `#a78bfa`
- Muted text: `#a0a0a0`

## 🔧 Technical Details

### Changes Made
1. Merged UI polish branch into crash fix branch
2. Disabled React Native new architecture
3. Created all app assets from source logo using Sharp
4. Updated theme colors for dark mode
5. Updated status bar to light content
6. Bumped version to 1.0.2 (versionCode 2)

### Build Info
- Package: `ink.examina.app`
- Version: 1.0.2 (versionCode 2)
- Expo SDK: 53.0.0
- React Native: 0.79.6
- Min SDK: Android 7.0 (API 24)
- Target SDK: Android 14 (API 35)
- APK Size: ~73 MB

### Dependencies
- All dependencies aligned with Expo SDK 53
- GestureHandlerRootView and SafeAreaProvider properly configured
- Hermes JS engine enabled
- New Architecture disabled (fixes crash)

## 📦 Release Assets

**Download:** [examina-v1.0.2.apk](https://github.com/denizcihatgunsel-star/examina-android/releases/download/v1.0.2/examina-v1.0.2.apk)

### Installation
1. Download the APK
2. Enable "Install from Unknown Sources" in Android settings
3. Tap the APK to install
4. Open Examina from app drawer

## ✅ Verification

The app has been verified to:
- Launch successfully without crashes
- Stay open and responsive
- Navigate between all tabs
- Open the WebView for quiz creation
- Display the proper dark theme
- Show the real Examina logo throughout

## 🔄 What Was Merged

This release combines:
- **PR #1 (cursor/polish-headway-ui-and-build-apk-f1db)**: Headway-style UI polish
- **PR #2 (cursor/fix-crash-on-launch-e9af)**: Crash fixes and improvements
- **New changes**: Logo replacement, dark theme, new architecture fix

All changes are now on the `cursor/fix-crash-on-launch-e9af` branch.
