App.info({
  name: 'runMate',
});

App.setPreference('Orientation', 'portrait');
App.setPreference('ios-orientation-iphone', 'portrait');
App.accessRule('*');
App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'lightcontent');


App.icons({

'iphone' : 'resource/appIcon/iOS/Icon-60.png',
'iphone_2x' : 'resource/appIcon/iOS/Icon-120.png',
'iphone_3x' : 'resource/appIcon/iOS/Icon-180@3x.png',

'android_ldpi': 'resource/appIcon/android/ldpi.png',
'android_mdpi': 'resource/appIcon/android/mdpi.png',
'android_hdpi': 'resource/appIcon/android/hdpi.png',
'android_xhdpi': 'resource/appIcon/android/xhdpi.png'
});
