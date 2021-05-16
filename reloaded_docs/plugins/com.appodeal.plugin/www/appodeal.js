cordova.define("com.appodeal.plugin.AppodealPlugin", function(require, exports, module) {
var Appodeal = exports;

var exec = require('cordova/exec');
var cordova = require('cordova');

Appodeal.INTERSTITIAL = 3;
Appodeal.BANNER = 4;
Appodeal.BANNER_BOTTOM = 8;
Appodeal.BANNER_TOP = 16;
Appodeal.BANNER_VIEW = 32;
Appodeal.REWARDED_VIDEO = 128;
Appodeal.NON_SKIPPABLE_VIDEO = 256;

Appodeal.LogLevel = {
    NONE: 0,
    DEBUG: 1,
    VERBOSE: 2
};

Appodeal.Gender = {
    OTHER: 0,
    MALE: 1,
    FEMALE: 2
};

Appodeal.pluginVersion = '3.0.1';

Appodeal.initialize = function(appKey, adType) {
	exec(null, null, "AppodealPlugin", "setPluginVersion", [Appodeal.pluginVersion]);
    exec(null, null, "AppodealPlugin", "initialize", [appKey, adType]);
};

Appodeal.show = function(adType, callback) {
    exec(callback, null, "AppodealPlugin", "show", [adType]);
};

Appodeal.showWithPlacement = function(adType, placement, callback) {
    exec(callback, null, "AppodealPlugin", "showWithPlacement", [adType, placement]);
};

Appodeal.isLoaded = function(adType, callback) {
    exec(callback, null, "AppodealPlugin", "isLoaded", [adType]);
};

Appodeal.cache = function(adType) {
    exec(null, null, "AppodealPlugin", "cache", [adType]);
};

Appodeal.hide = function(adType) {
    exec(null, null, "AppodealPlugin", "hide", [adType]);
};

Appodeal.setAutoCache = function(adType, autoCache) {
    exec(null, null, "AppodealPlugin", "setAutoCache", [adType, autoCache]);
};

Appodeal.isPrecache = function(adType, callback) {
    exec(callback, null, "AppodealPlugin", "isPrecache", [adType]);
};

Appodeal.setBannerBackground = function(value) {
    exec(null, null, "AppodealPlugin", "setBannerBackground", [value]);
};

Appodeal.setBannerAnimation = function(value) {
    exec(null, null, "AppodealPlugin", "setBannerAnimation", [value]);
};

Appodeal.setSmartBanners = function(value) {
    exec(null, null, "AppodealPlugin", "setSmartBanners", [value]);
};

Appodeal.set728x90Banners = function(value) {
    exec(null, null, "AppodealPlugin", "set728x90Banners", [value]);
};

Appodeal.setBannerOverLap = function(value) {
    exec(null, null, "AppodealPlugin", "setBannerOverLap", [value]);
};

Appodeal.setTesting = function(testing) {
    exec(null, null, "AppodealPlugin", "setTesting", [testing]);
};

Appodeal.setLogLevel = function(loglevel) {
    exec(null, null, "AppodealPlugin", "setLogLevel", [loglevel]);
};

Appodeal.setChildDirectedTreatment = function(value) {
    exec(null, null, "AppodealPlugin", "setChildDirectedTreatment", [value]);
};

Appodeal.setTriggerOnLoadedOnPrecache = function(set) {
    exec(null, null, "AppodealPlugin", "setOnLoadedTriggerBoth", [set]);
};

Appodeal.disableNetwork = function(network, adType) {
    exec(null, null, "AppodealPlugin", "disableNetwork", [network]);
};

Appodeal.disableNetworkType = function(network, adType) {
    exec(null, null, "AppodealPlugin", "disableNetworkType", [network, adType]);
};

Appodeal.disableLocationPermissionCheck = function() {
    exec(null, null, "AppodealPlugin", "disableLocationPermissionCheck", []);
};

Appodeal.disableWriteExternalStoragePermissionCheck = function() {
    exec(null, null, "AppodealPlugin", "disableWriteExternalStoragePermissionCheck", []);
};

Appodeal.muteVideosIfCallsMuted = function(value) {
    exec(null, null, "AppodealPlugin", "muteVideosIfCallsMuted", [value]);
};

Appodeal.showTestScreen = function(value) {
    exec(null, null, "AppodealPlugin", "showTestScreen", []);
};

Appodeal.getVersion = function(callback) {
    exec(callback, null, "AppodealPlugin", "getVersion", []);
};

Appodeal.getPluginVersion = function(){
    return Appodeal.pluginVersion;
};

Appodeal.isInitialized = function(callback) {
    exec(callback, null, "AppodealPlugin", "isInitalized", []);
};

Appodeal.canShow = function(adType, callback) {
    exec(callback, null, "AppodealPlugin", "canShow", [adType]);
};

Appodeal.canShowWithPlacement = function(adType, placement, callback) {
    exec(callback, null, "AppodealPlugin", "canShowWithPlacement", [adType, placement]);
};

Appodeal.setCustomBooleanRule = function(name, rule) {
    exec(null, null, "AppodealPlugin", "setCustomBooleanRule", [name, rule]);
};

Appodeal.setCustomIntegerRule = function(name, rule) {
    exec(null, null, "AppodealPlugin", "setCustomIntegerRule", [name, rule]);
};

Appodeal.setCustomDoubleRule = function(name, rule) {
    exec(null, null, "AppodealPlugin", "setCustomDoubleRule", [name, rule]);
};

Appodeal.setCustomStringRule = function(name, rule) {
    exec(null, null, "AppodealPlugin", "setCustomStringRule", [name, rule]);
};

Appodeal.getRewardParameters = function(callback) {
    exec(callback, null, "AppodealPlugin", "getRewardParameters", []);
};

Appodeal.getRewardParametersForPlacement = function(placement, callback) {
    exec(callback, null, "AppodealPlugin", "getRewardParametersForPlacement", [placement]);
};

Appodeal.setAge = function(age) {
    exec(null, null, "AppodealPlugin", "setAge", [age]);
};

Appodeal.setGender = function(gender) {
    exec(null, null, "AppodealPlugin", "setGender", [gender]);
};

Appodeal.setUserId = function(userid){
    exec(null, null, "AppodealPlugin", "setUserId", [userid]);
};

Appodeal.trackInAppPurchase = function(amount, currency){
    exec(null, null, "AppodealPlugin", "trackInAppPurchase", [amount, currency]);
};

Appodeal.setInterstitialCallbacks = function(callback) {
    exec(callback, null, "AppodealPlugin", "setInterstitialCallbacks", [])
};

Appodeal.setNonSkippableVideoCallbacks = function(callbacks) {
    exec(callbacks, null, "AppodealPlugin", "setNonSkippableVideoCallbacks", []);
};

Appodeal.setRewardedVideoCallbacks = function(callbacks) {
    exec(callbacks, null, "AppodealPlugin", "setRewardedVideoCallbacks", []);
};

Appodeal.setBannerCallbacks = function(callbacks) {
    exec(callbacks, null, "AppodealPlugin", "setBannerCallbacks", []);
};
});
