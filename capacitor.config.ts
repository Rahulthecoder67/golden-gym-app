import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.goldengym.app',
  appName: 'Golden Gym 2.0',
  webDir: 'www',
  server: {
    url: 'https://golden-gym-2-0-6hcu5y.v2.appdeploy.ai/',
    cleartext: false,
    allowNavigation: ['golden-gym-2-0-6hcu5y.v2.appdeploy.ai'],
  },
  android: { allowMixedContent: false },
};
export default config;
