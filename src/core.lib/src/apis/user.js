const _0x2f9c92=_0x3489;(function(_0x4bfcd0,_0x5b7014){const _0x935d18=_0x3489,_0x592563=_0x4bfcd0();while(!![]){try{const _0x1e1a35=-parseInt(_0x935d18(0x1f6))/0x1*(-parseInt(_0x935d18(0x1f3))/0x2)+parseInt(_0x935d18(0x202))/0x3+parseInt(_0x935d18(0x1d4))/0x4*(-parseInt(_0x935d18(0x1c4))/0x5)+parseInt(_0x935d18(0x1ff))/0x6*(-parseInt(_0x935d18(0x1f7))/0x7)+-parseInt(_0x935d18(0x1fb))/0x8+-parseInt(_0x935d18(0x1f8))/0x9+-parseInt(_0x935d18(0x1f9))/0xa*(-parseInt(_0x935d18(0x206))/0xb);if(_0x1e1a35===_0x5b7014)break;else _0x592563['push'](_0x592563['shift']());}catch(_0x1bd596){_0x592563['push'](_0x592563['shift']());}}}(_0x529c,0x2d871));function _0x3489(_0x1d96d7,_0x182bae){const _0x529c55=_0x529c();return _0x3489=function(_0x348914,_0xc67bcf){_0x348914=_0x348914-0x1c2;let _0x18424f=_0x529c55[_0x348914];return _0x18424f;},_0x3489(_0x1d96d7,_0x182bae);}import{Credentials,selfInfo}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';function _0x529c(){const _0x484555=['HYcWH','IkeLE','CreatTime','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','getMsgService','getUserDetailInfo','errMsg','forceFetchClientKey','uSWul','now','clientKey','length','getUserInfo','response','8NPTBzs','like','getSelfInfo','13525TFeohq','304997faaCky','664848CLQOcj','968210YRCFJN','forEach','1288384kKCQqf','SxqId','DxpzD','set','6nqCwBF','addListener','getUserDetailInfo\x20timeout','899961ABwmOv','Hlaag','setHeader','getPSkey','44UvxLjC','CrIji','gmOrd','push','XqxtM','NteFC','setBuddyProfileLike','getRobotUinRange','robotUinRanges','460665oTXisO','delete','&clientkey=','Skey','getProfileLikeService','keyIndex','getSkey','skey','gfLGD','获取Pskey失败','session','setQQAvatar','uin','rrbeC','kVLJW','PskeyTime','12zgIymY','getPskey','getRobotService','DfbyN','PskeyData','domainPskeyMap','setSelfOnlineStatus','uid','onLoginSuccess','get','getProfileService','getTicketService','getTipOffService','pVrYV','entries','result','then'];_0x529c=function(){return _0x484555;};return _0x529c();}import{randomUUID}from'crypto';import{HttpGetCookies}from'../../../common/utils/request';import{logError}from'@/common/utils/log';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener['onProfileDetailInfoChanged']=_0x1871e9=>{const _0xf012fb=_0x3489;userInfoCache[_0x1871e9[_0xf012fb(0x1db)]]=_0x1871e9,userDetailHandlers[_0xf012fb(0x1fa)](_0x18c8ac=>_0x18c8ac(_0x1871e9));},setTimeout(()=>{const _0x561cbe=_0x3489;napCatCore[_0x561cbe(0x1dc)](()=>{const _0x510d24=_0x561cbe;napCatCore[_0x510d24(0x200)](profileListener);});},0x64);export class NTQQUserApi{static async[_0x2f9c92(0x1da)](_0x46b61d,_0x114c91,_0x54dbe6){const _0x7ab2c6=_0x2f9c92;return napCatCore[_0x7ab2c6(0x1ce)][_0x7ab2c6(0x1e9)]()['setStatus']({'status':_0x46b61d,'extStatus':_0x114c91,'batteryStatus':_0x54dbe6});}static async[_0x2f9c92(0x1f4)](_0x4f4ed3,_0x59de52=0x1){const _0x56131d=_0x2f9c92;return napCatCore[_0x56131d(0x1ce)][_0x56131d(0x1c8)]()[_0x56131d(0x20c)]({'friendUid':_0x4f4ed3,'sourceId':0x47,'doLikeCount':_0x59de52,'doLikeTollCount':0x0});}static async[_0x2f9c92(0x1cf)](_0xff6a88){const _0x4e866e=_0x2f9c92,_0x2d4edd=napCatCore[_0x4e866e(0x1ce)][_0x4e866e(0x1de)]()[_0x4e866e(0x204)](_0xff6a88);return{'result':_0x2d4edd?.[_0x4e866e(0x1e3)],'errMsg':_0x2d4edd?.[_0x4e866e(0x1eb)]};}static async[_0x2f9c92(0x1f5)](){}static async[_0x2f9c92(0x1f1)](_0x5b5933){}static async[_0x2f9c92(0x1ea)](_0x284cda){const _0x1f4868=_0x2f9c92,_0x5777c9={'RNcDP':function(_0x56c8da,_0x362adf){return _0x56c8da(_0x362adf);},'SxqId':_0x1f4868(0x201),'eYdjd':function(_0x18f32a){return _0x18f32a();}},_0x502487=napCatCore['session'][_0x1f4868(0x1de)]();return new Promise((_0x3ff372,_0x5a2f27)=>{const _0x209c8a=_0x1f4868,_0x4e8f45={'CrIji':function(_0x53021b,_0x8d006a){return _0x53021b===_0x8d006a;},'XqxtM':function(_0x42674c,_0x48f72f){return _0x42674c(_0x48f72f);}},_0xd8b4c2=_0x5777c9['eYdjd'](randomUUID);let _0x14a63d=![];setTimeout(()=>{const _0x3e7e38=_0x3489;!_0x14a63d&&_0x5777c9['RNcDP'](_0x5a2f27,_0x5777c9[_0x3e7e38(0x1fc)]);},0x1388),userDetailHandlers[_0x209c8a(0x1fe)](_0xd8b4c2,_0xec72d1=>{const _0x70ece1=_0x209c8a;_0x4e8f45[_0x70ece1(0x207)](_0xec72d1[_0x70ece1(0x1db)],_0x284cda)&&(_0x14a63d=!![],userDetailHandlers[_0x70ece1(0x1c5)](_0xd8b4c2),_0x4e8f45[_0x70ece1(0x20a)](_0x3ff372,_0xec72d1));}),_0x502487['getUserDetailInfoWithBizInfo'](_0x284cda,[0x0])[_0x209c8a(0x1e4)](_0x43fb53=>{});});}static async[_0x2f9c92(0x205)](_0x1bb2db,_0xd65ee2=!![]){const _0x41621d=_0x2f9c92,_0x1b8115={'DfbyN':function(_0x1d4cb9,_0x11ae76){return _0x1d4cb9>_0x11ae76;},'CzSgL':function(_0x5e8bce,_0x312f0d){return _0x5e8bce-_0x312f0d;},'gmOrd':function(_0x4c96f9,_0x1cd822){return _0x4c96f9*_0x1cd822;},'rrbeC':function(_0x2635eb,_0x28a7a0){return _0x2635eb===_0x28a7a0;},'DxpzD':function(_0x35bb9d,_0x2433e5,_0x45aa10){return _0x35bb9d(_0x2433e5,_0x45aa10);},'IkeLE':_0x41621d(0x1cd)};let _0x2e47b3=[],_0x8beef3={};for(let _0x4f6fc5 in _0x1bb2db){let _0x5921d3=Credentials[_0x41621d(0x1d8)]['get'](_0x1bb2db[_0x4f6fc5]),_0x4497df=Credentials[_0x41621d(0x1d3)]['get'](_0x1bb2db[_0x4f6fc5]);!_0x5921d3||!_0x4497df||_0x1b8115[_0x41621d(0x1d7)](_0x1b8115['CzSgL'](Date[_0x41621d(0x1ee)](),_0x4497df),_0x1b8115[_0x41621d(0x208)](0x708,0x3e8))||!_0xd65ee2?_0x2e47b3[_0x41621d(0x209)](_0x1bb2db[_0x4f6fc5]):_0x8beef3[_0x1bb2db[_0x4f6fc5]]=_0x5921d3;}let _0x163689={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x1b8115['DfbyN'](_0x2e47b3[_0x41621d(0x1f0)],0x0)&&(_0x163689=await napCatCore[_0x41621d(0x1ce)][_0x41621d(0x1e0)]()[_0x41621d(0x1d5)](_0x2e47b3,!![]));let _0x11f06d=_0x163689[_0x41621d(0x1d9)];for(let _0x503a9 of _0x11f06d[_0x41621d(0x1e2)]()){Credentials[_0x41621d(0x1d8)][_0x41621d(0x1fe)](_0x503a9[0x0],_0x503a9[0x1]),Credentials[_0x41621d(0x1d3)]['set'](_0x503a9[0x0],Date['now']());}let _0x47b1e3=Object['assign'](Object['fromEntries'](_0x11f06d),_0x8beef3);if(_0x1b8115[_0x41621d(0x1d1)](_0x163689[_0x41621d(0x1e3)],0x0))return _0x47b1e3;else _0x1b8115[_0x41621d(0x1fd)](logError,_0x1b8115[_0x41621d(0x1e6)],_0x163689[_0x41621d(0x1eb)]);return{};}static async[_0x2f9c92(0x1c2)](){const _0x3f88a1=_0x2f9c92,_0x5a6c6a=await napCatCore[_0x3f88a1(0x1ce)][_0x3f88a1(0x1d6)]()[_0x3f88a1(0x1c2)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x5a6c6a?.[_0x3f88a1(0x1f2)]?.[_0x3f88a1(0x1c3)];}static async[_0x2f9c92(0x1ca)](_0xc82625=!![]){const _0x1bd60=_0x2f9c92,_0x3fd1b0={'uSWul':function(_0x1365eb,_0x521db4){return _0x1365eb>_0x521db4;},'hDEbO':function(_0x143601,_0x1d5efd){return _0x143601-_0x1d5efd;},'fuoSq':function(_0x55b19c,_0x59347c){return _0x55b19c*_0x59347c;},'PvfYO':function(_0x195e80,_0x1978bd){return _0x195e80!==_0x1978bd;},'Hlaag':function(_0x385f71,_0x12d369){return _0x385f71+_0x12d369;},'gfLGD':function(_0x17eb00,_0x1cea2e){return _0x17eb00+_0x1cea2e;},'pVrYV':function(_0x2f124d,_0x1c887b){return _0x2f124d+_0x1c887b;},'NteFC':'https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','kVLJW':_0x1bd60(0x1c6),'HYcWH':_0x1bd60(0x1e8)};try{if(Credentials['CreatTime']==0x0||_0x3fd1b0[_0x1bd60(0x1ed)](_0x3fd1b0['hDEbO'](Date['now'](),Credentials[_0x1bd60(0x1e7)]),_0x3fd1b0['fuoSq'](0x3e8,0xe10))||!_0xc82625){const _0x293397=await napCatCore['session'][_0x1bd60(0x1df)]()[_0x1bd60(0x1ec)]('');if(_0x3fd1b0['PvfYO'](_0x293397[_0x1bd60(0x1e3)],0x0))return'';const _0x16001a=_0x293397[_0x1bd60(0x1ef)],_0x1f66e9=_0x293397[_0x1bd60(0x1c9)],_0x191e33=_0x3fd1b0[_0x1bd60(0x203)](_0x3fd1b0[_0x1bd60(0x1cc)](_0x3fd1b0[_0x1bd60(0x1cc)](_0x3fd1b0['Hlaag'](_0x3fd1b0[_0x1bd60(0x1e1)](_0x3fd1b0[_0x1bd60(0x20b)],selfInfo[_0x1bd60(0x1d0)]),_0x3fd1b0[_0x1bd60(0x1d2)]),_0x16001a),_0x3fd1b0[_0x1bd60(0x1e5)]),_0x1f66e9),_0x1b4a85=await HttpGetCookies(_0x191e33),_0x1ae7b2=_0x1b4a85[_0x1bd60(0x1dd)](_0x1bd60(0x1cb));if(!_0x1ae7b2)return'';return Credentials[_0x1bd60(0x1e7)]=Date[_0x1bd60(0x1ee)](),Credentials['Skey']=_0x1ae7b2,_0x1ae7b2;}return Credentials[_0x1bd60(0x1c7)];}catch(_0x545de5){}return undefined;}}