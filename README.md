# Golden Gym 2.0 — Android + Windows builds

This repository packages the existing hosted Golden Gym 2.0 app as installable shells:
- Android: Capacitor WebView APK
- Windows: Electron installer EXE

Both load https://golden-gym-2-0-6hcu5y.v2.appdeploy.ai/ so existing sign-in and shared cloud data remain in use.

## Important
These are internet-connected wrappers, not offline copies of the backend. Network access is required to sign in and use live gym records. The CI APK is a debug APK for testing, not Play Store-signed. The Windows installer targets x64 Windows.

## Build
GitHub Actions runs on pushes to main and can be started manually from Actions → Build Golden Gym apps → Run workflow. Download the APK and EXE from the run's Artifacts section. Artifacts are retained for 14 days.

## Local prerequisites
Node.js 20+; Java 21 and Android SDK for Android builds; Windows for the EXE build.
