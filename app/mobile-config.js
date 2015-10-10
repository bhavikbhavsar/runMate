App.info({
  name: 'runMate',
});

App.setPreference('Orientation', 'portrait');
App.setPreference('ios-orientation-iphone', 'portrait');
App.accessRule('*');
App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'lightcontent');


App.icons({


  'android_ldpi': 'resource/man24/android/drawable-ldpi/ic_launcher.png',
'android_mdpi': 'resource/man24/android/drawable-mdpi/ic_launcher.png',
'android_hdpi': 'resource/man24/android/drawable-hdpi/ic_launcher.png',
'android_xhdpi': 'resource/man24/android/drawable-xhdpi/ic_launcher.png'
});
