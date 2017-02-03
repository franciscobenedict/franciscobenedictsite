//Debug switch
var debug = false;
if (debug) console.log('debug = ' + debug);

var 
    apiKeyEnc =             atob("QUl6YVN5QUxsaTBpd3otTThtYUQ5dk55a2wzT1pBb1FxdU1mN3Jj"),
    authDomainEnc =         atob("ZnJhbmNpc2NvYmVuZWRpY3QtMWFhN2IuZmlyZWJhc2VhcHAuY29t"),
    databaseURLEnc =        atob("aHR0cHM6Ly9mcmFuY2lzY29iZW5lZGljdC0xYWE3Yi5maXJlYmFzZWlvLmNvbQ=="),
    storageBucketEnc =      atob("ZnJhbmNpc2NvYmVuZWRpY3QtMWFhN2IuYXBwc3BvdC5jb20="),
    messagingSenderIdEnc =  atob("MzcyNjQzNTE5MDQ0");

var firebase_config = {
	apiKey: apiKeyEnc,
    authDomain: authDomainEnc,
    databaseURL: databaseURLEnc,
    storageBucket: storageBucketEnc,
    messagingSenderId: messagingSenderIdEnc
};

if (debug) console.log('firebase_config', firebase_config);

firebase.initializeApp(firebase_config);