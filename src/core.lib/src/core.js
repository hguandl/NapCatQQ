const _0x59bad7=_0x1924;(function(_0x20842a,_0xe19870){const _0x5cefc6=_0x1924,_0x52280a=_0x20842a();while(!![]){try{const _0x36a1f2=-parseInt(_0x5cefc6(0x129))/0x1+parseInt(_0x5cefc6(0x18e))/0x2*(parseInt(_0x5cefc6(0x148))/0x3)+parseInt(_0x5cefc6(0x149))/0x4+-parseInt(_0x5cefc6(0x17f))/0x5*(-parseInt(_0x5cefc6(0x117))/0x6)+parseInt(_0x5cefc6(0x17d))/0x7*(parseInt(_0x5cefc6(0x198))/0x8)+-parseInt(_0x5cefc6(0x164))/0x9+-parseInt(_0x5cefc6(0x19f))/0xa;if(_0x36a1f2===_0xe19870)break;else _0x52280a['push'](_0x52280a['shift']());}catch(_0x313f94){_0x52280a['push'](_0x52280a['shift']());}}}(_0x5279,0x29fff));import _0x2c75d4 from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x4b3ea6 from'node:path';function _0x5279(){const _0x43d514=['本账号数据/缓存目录：','MsgListener','set','dataPathGlobal','loginService','constructor','OoQAN','quickLogin','2416IoJRtg','from','buddyList','VQtnJ','engine','jurxD','aoIUT','2792510VUiFfj','uid','proxyHandler','onQRCodeLoginSucceed','没有可快速登录的QQ号','initConfig','IZhng','140022013','登录失败','NodeIKernelProfileListener','qrcodeUrl','name','获取二维码登录超时','vLsKd','Ndmxa','loginListener','jfMlM','jMVMC','read','ycpKo','KdFyJ','mkdirSync','addKernelProfileListener','assign','LocalLoginInfoList','onSessionInitComplete','WOUdO','result','msgId','758070YBucPC','uin','consoleLog','NodeIDependsAdapter','createMemberListScene','init\x20failed\x20','onMemberListChange','then','ProfileListener','sceneId','undefined','iIJMG','ohGjC','getMsgService','-v2.db','fkviQ','initWithDeskTopConfig','quickLoginWithUin','205785YqHuXE','base64','groupMemberList_MainWindow','uORQt','getQRCodePicture','xZAaL','groupCode','HIWOb','kDgJx','onLoginFailed','qPVXA','catch','快速登录失败\x20','find','startNT','push','./NapCat/data','FhJRb','onLoginSuccessFuncList','getBuddyList','getGroupService','140022008','loginErrorInfo','NodeIKernelLoginService','addKernelLoginListener','md5','qrLogin','init','digest','util','getLoginList','193089PcjcSG','115304ZuxQib','_GW_B','onQRCodeGetPicture','NodeQQNTWrapperUtil','tBcbr','NodeIGlobalAdapter','initSession\x20failed','isQuickLogin','homedir','pzUHZ','forEach','onLoginSuccess','HJPQc','update','get','getNextMemberList','pWFfF','Vwkat','NodeIKernelMsgListener','V1_WIN_NQ_','./.config/QQ','passwordLogin','stringify','GroupListener','updateMsg','qeRtc','onBuddyListChange','684135lhxwwT','hex','DrTxQ','split','createHash','hpJgc','nzrhh','initSession','replace','getBuddyService','onQRCodeSessionFailed','pngBase64QrcodeData','oAqoA','curVersion','Sksls','OAfJj','bfjht','xLWJi','EmdBM','Windows\x2010\x20Pro','resolve','dataPath','initDataListener','NodeIKernelBuddyListener','addListener','5936oSWseM','WAcUd','5oCkWJj','NodeIKernelSessionListener','JtDOa','数据库初始化失败','session','recallTime','CXuNI','onProfileDetailInfoChanged','consoleLogLevel','DndKX','getNTUserDataInfoConfig','infos','getMsgByLongId','FRwHH','rkkcv','10yOwftz','getProfileService'];_0x5279=function(){return _0x43d514;};return _0x5279();}import _0xedd1de from'node:os';import _0xc1eb1a from'node:fs';import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';function _0x1924(_0x43e0ea,_0x230f25){const _0x5279fd=_0x5279();return _0x1924=function(_0x19243e,_0x6344b0){_0x19243e=_0x19243e-0xfe;let _0x49fdd3=_0x5279fd[_0x19243e];return _0x49fdd3;},_0x1924(_0x43e0ea,_0x230f25);}import{dbUtil}from'@/core/utils/db';import{sleep}from'@/common/utils/helper';import _0x886fcc from'node:crypto';import{friends,groupMembers,groups,selfInfo,uid2UinMap}from'@/core/data';import{enableConsoleLog,enableFileLog,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{[_0x59bad7(0x183)];[_0x59bad7(0x146)];['engine'];['loginService'];[_0x59bad7(0x109)];[_0x59bad7(0x13b)]=[];['proxyHandler']={'get'(target,prop,receiver){const _0x4ffdb4=_0x59bad7,ClcxOS={'RIfgF':function(callee,param1){return callee(param1);},'EmdBM':function(x,y){return x===y;}};if(ClcxOS[_0x4ffdb4(0x176)](typeof target[prop],_0x4ffdb4(0x121)))return(...args)=>{const _0x238c33=_0x4ffdb4;ClcxOS['RIfgF'](logDebug,target[_0x238c33(0x195)][_0x238c33(0x105)]+'\x20has\x20no\x20method\x20'+prop);};return Reflect[_0x4ffdb4(0x157)](target,prop,receiver);}};constructor(){const _0x4e2333=_0x59bad7,_0x5125f6={'vCmIw':_0x4e2333(0x14f),'VQxzY':function(_0x2be806,_0x1b9e37){return _0x2be806 instanceof _0x1b9e37;},'tBcbr':function(_0x5103c2,_0x53064f,_0x3d0c10){return _0x5103c2(_0x53064f,_0x3d0c10);},'HIWOb':function(_0x1187b7,_0x297605){return _0x1187b7(_0x297605);},'hpJgc':_0x4e2333(0x190),'jurxD':function(_0x19fa4d,_0x51d3e4,_0x2d8e8c){return _0x19fa4d(_0x51d3e4,_0x2d8e8c);}};this[_0x4e2333(0x19c)]=new _0x2c75d4['NodeIQQNTWrapperEngine'](),this['util']=new _0x2c75d4[(_0x4e2333(0x14c))](),this[_0x4e2333(0x194)]=new _0x2c75d4[(_0x4e2333(0x140))](),this[_0x4e2333(0x183)]=new _0x2c75d4['NodeIQQNTWrapperSession'](),this[_0x4e2333(0x109)]=new LoginListener(),this[_0x4e2333(0x109)][_0x4e2333(0x1a2)]=_0x33e1f4=>{const _0x26fa47=_0x4e2333,_0x4a6598={'Vwkat':function(_0xa69d87,_0x2f4b52){return _0x5125f6['VQxzY'](_0xa69d87,_0x2f4b52);},'xZAaL':_0x26fa47(0x182),'SympT':function(_0x299a93,_0x394c2d,_0x5e1b91){const _0x43de31=_0x26fa47;return _0x5125f6[_0x43de31(0x14d)](_0x299a93,_0x394c2d,_0x5e1b91);},'DndKX':function(_0x2d6f87,_0x45a9f9){return _0x5125f6['HIWOb'](_0x2d6f87,_0x45a9f9);},'FhJRb':function(_0x47fc14,_0x4b42ff){const _0x4cbf8b=_0x26fa47;return _0x5125f6[_0x4cbf8b(0x130)](_0x47fc14,_0x4b42ff);},'uORQt':function(_0xa9840f,_0x3b02f0,_0x3fa646){return _0xa9840f(_0x3b02f0,_0x3fa646);},'jMVMC':_0x5125f6[_0x26fa47(0x169)]};this[_0x26fa47(0x16b)](_0x33e1f4[_0x26fa47(0x118)],_0x33e1f4[_0x26fa47(0x1a0)])[_0x26fa47(0x11e)](_0x2b5826=>{const _0x120d3b=_0x26fa47,_0x8985da={'VQtnJ':function(_0x5238a2,_0x182238,_0x2944d2){return _0x5238a2(_0x182238,_0x2944d2);},'KOBNI':function(_0x130f29,_0x2ba2b0){const _0x1bc8b2=_0x1924;return _0x4a6598[_0x1bc8b2(0x15a)](_0x130f29,_0x2ba2b0);},'wmCVC':_0x4a6598[_0x120d3b(0x12e)]};selfInfo[_0x120d3b(0x118)]=_0x33e1f4[_0x120d3b(0x118)],selfInfo['uid']=_0x33e1f4[_0x120d3b(0x1a0)],napCatConfig[_0x120d3b(0x10c)](),_0x4a6598['SympT'](setLogLevel,napCatConfig['fileLogLevel'],napCatConfig[_0x120d3b(0x187)]),_0x4a6598['DndKX'](enableFileLog,napCatConfig['fileLog']),_0x4a6598[_0x120d3b(0x13a)](enableConsoleLog,napCatConfig[_0x120d3b(0x119)]),_0x4a6598[_0x120d3b(0x188)](setLogSelfInfo,selfInfo);const _0x3813a5=_0x4b3ea6['resolve'](this['dataPath'],_0x120d3b(0x139));_0xc1eb1a[_0x120d3b(0x10f)](_0x3813a5,{'recursive':!![]}),_0x4a6598[_0x120d3b(0x12c)](logDebug,_0x4a6598[_0x120d3b(0x10b)],_0x3813a5),dbUtil['init'](_0x4b3ea6[_0x120d3b(0x178)](_0x3813a5,'./'+_0x33e1f4[_0x120d3b(0x118)]+_0x120d3b(0x125)))[_0x120d3b(0x11e)](()=>{const _0x4e6727=_0x120d3b;this[_0x4e6727(0x17a)](),this[_0x4e6727(0x13b)]['map'](_0x21ddf8=>{const _0x2ab5e9=_0x4e6727,_0x9ea47b={'qPVXA':function(_0x3c2cba,_0x4c0c5c,_0x40b501){const _0x154672=_0x1924;return _0x8985da[_0x154672(0x19b)](_0x3c2cba,_0x4c0c5c,_0x40b501);},'Ndmxa':function(_0x4cce22,_0x2a122e){return _0x8985da['KOBNI'](_0x4cce22,_0x2a122e);}};new Promise((_0x547e7a,_0x4b344a)=>{const _0x50a048=_0x1924,_0x134e72=_0x9ea47b[_0x50a048(0x133)](_0x21ddf8,_0x33e1f4[_0x50a048(0x118)],_0x33e1f4[_0x50a048(0x1a0)]);_0x9ea47b[_0x50a048(0x108)](_0x134e72,Promise)&&_0x134e72[_0x50a048(0x11e)](_0x547e7a)['catch'](_0x4b344a);})[_0x2ab5e9(0x11e)]();});})['catch'](_0x503776=>{_0x8985da['VQtnJ'](logError,_0x8985da['wmCVC'],_0x503776);});})[_0x26fa47(0x134)](_0x286c67=>{const _0x3b83d0=_0x26fa47;logError(_0x5125f6['vCmIw'],_0x286c67);throw new Error('启动失败:\x20'+JSON[_0x3b83d0(0x15f)](_0x286c67));});},this[_0x4e2333(0x109)][_0x4e2333(0x16e)]=_0x7f8a3=>{_0x5125f6['tBcbr'](logError,'登录失败',_0x7f8a3);},this[_0x4e2333(0x109)][_0x4e2333(0x132)]=_0x370478=>{const _0x208a8f=_0x4e2333;_0x5125f6[_0x208a8f(0x19d)](logError,_0x208a8f(0x102),_0x370478);},this[_0x4e2333(0x109)]=new Proxy(this[_0x4e2333(0x109)],this[_0x4e2333(0x1a1)]),this[_0x4e2333(0x194)][_0x4e2333(0x141)](new _0x2c75d4['NodeIKernelLoginListener'](this[_0x4e2333(0x109)])),this[_0x4e2333(0xff)]();}get[_0x59bad7(0x179)](){const _0x3ff111=_0x59bad7;let _0x51f0e5=this['util'][_0x3ff111(0x189)]();return!_0x51f0e5&&(_0x51f0e5=_0x4b3ea6[_0x3ff111(0x178)](_0xedd1de[_0x3ff111(0x151)](),_0x3ff111(0x15d)),_0xc1eb1a[_0x3ff111(0x10f)](_0x51f0e5,{'recursive':!![]})),_0x51f0e5;}get[_0x59bad7(0x193)](){const _0x7025cd=_0x59bad7,_0x49d7aa={'WAcUd':'./nt_qq/global'};return _0x4b3ea6[_0x7025cd(0x178)](this[_0x7025cd(0x179)],_0x49d7aa[_0x7025cd(0x17e)]);}[_0x59bad7(0xff)](){const _0x48a30e=_0x59bad7;this[_0x48a30e(0x19c)][_0x48a30e(0x127)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo['curVersion'],'os_version':_0x48a30e(0x177),'use_xlog':!![],'qua':_0x48a30e(0x15c)+qqVersionConfigInfo[_0x48a30e(0x171)][_0x48a30e(0x16c)]('-','_')+_0x48a30e(0x14a),'global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x2c75d4[(_0x48a30e(0x14e))](new GlobalAdapter())),this[_0x48a30e(0x194)][_0x48a30e(0xff)]({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this['dataPathGlobal'],'clientVer':qqVersionConfigInfo['curVersion'],'hostName':hostname});}[_0x59bad7(0x16b)](_0x23a50c,_0x1488d0){const _0x49e762=_0x59bad7,_0x7428a8={'DrTxQ':function(_0x4a2a5f,_0x4216ae){return _0x4a2a5f(_0x4216ae);},'qPbkU':function(_0x6d84d8,_0x483eb2){return _0x6d84d8(_0x483eb2);},'qeRtc':function(_0x8a32ee,_0x19fd3c){return _0x8a32ee+_0x19fd3c;},'iIJMG':_0x49e762(0x11c)};return new Promise((_0x1654fb,_0x495f08)=>{const _0x5478ab=_0x49e762,_0x1eb8fe={'rkkcv':function(_0xd1d0e6,_0x5ade9b){const _0x174c9b=_0x1924;return _0x7428a8[_0x174c9b(0x166)](_0xd1d0e6,_0x5ade9b);},'OoQAN':function(_0x44c5bc,_0x1b1c9d){const _0x578157=_0x1924;return _0x7428a8[_0x578157(0x166)](_0x44c5bc,_0x1b1c9d);}},_0x491e7d=genSessionConfig(_0x23a50c,_0x1488d0,this[_0x5478ab(0x179)]),_0x5ee3c9=new SessionListener();_0x5ee3c9[_0x5478ab(0x113)]=_0x172782=>{const _0x4dedc7=_0x5478ab;if(_0x172782===0x0)return _0x1eb8fe[_0x4dedc7(0x18d)](_0x1654fb,0x0);_0x1eb8fe[_0x4dedc7(0x196)](_0x495f08,_0x172782);},this[_0x5478ab(0x183)][_0x5478ab(0x144)](_0x491e7d,new _0x2c75d4[(_0x5478ab(0x11a))](new DependsAdapter()),new _0x2c75d4['NodeIDispatcherAdapter'](new DispatcherAdapter()),new _0x2c75d4[(_0x5478ab(0x180))](_0x5ee3c9));try{this[_0x5478ab(0x183)][_0x5478ab(0x137)](0x0);}catch(_0x98c52b){try{this[_0x5478ab(0x183)]['startNT']();}catch(_0x3e8048){_0x7428a8['qPbkU'](_0x495f08,_0x7428a8[_0x5478ab(0x162)](_0x7428a8[_0x5478ab(0x122)],_0x3e8048));}}});}[_0x59bad7(0x17a)](){const _0x4854a8=_0x59bad7,_0x175650={'JtDOa':function(_0x530471,_0x138c44){return _0x530471===_0x138c44;},'ycpKo':_0x4854a8(0x12b)},_0xdb75c0=new MsgListener();_0xdb75c0['onMsgInfoListUpdate']=_0x2b9963=>{const _0x3bcbb2={'ohGjC':function(_0x41ff50,_0x34a6b4){const _0x5b5e92=_0x1924;return _0x175650[_0x5b5e92(0x181)](_0x41ff50,_0x34a6b4);}};_0x2b9963['map'](_0x9c8228=>{const _0x5a1edf=_0x1924;_0x3bcbb2[_0x5a1edf(0x123)](_0x9c8228['recallTime'],'0')?dbUtil['addMsg'](_0x9c8228)[_0x5a1edf(0x11e)]()['catch']():dbUtil[_0x5a1edf(0x18b)](_0x9c8228[_0x5a1edf(0x116)])[_0x5a1edf(0x11e)](_0x3dceb2=>{const _0x4b1515=_0x5a1edf;_0x3dceb2&&(_0x3dceb2[_0x4b1515(0x184)]=_0x9c8228[_0x4b1515(0x184)],dbUtil[_0x4b1515(0x161)](_0x3dceb2)[_0x4b1515(0x11e)]());});});},this[_0x4854a8(0x17c)](_0xdb75c0);const _0x272898=new BuddyListener();_0x272898[_0x4854a8(0x163)]=_0x28fc5e=>{const _0x32b683=_0x4854a8;for(const _0x1ee101 of _0x28fc5e){for(const _0x286859 of _0x1ee101[_0x32b683(0x19a)]){const _0x3e801c=friends[_0x32b683(0x157)](_0x286859[_0x32b683(0x1a0)]);uid2UinMap[_0x286859[_0x32b683(0x1a0)]]=_0x286859[_0x32b683(0x118)],_0x3e801c?Object[_0x32b683(0x111)](_0x3e801c,_0x286859):friends[_0x32b683(0x192)](_0x286859[_0x32b683(0x1a0)],_0x286859);}}},this[_0x4854a8(0x17c)](_0x272898),this[_0x4854a8(0x183)][_0x4854a8(0x16d)]()[_0x4854a8(0x13c)](!![])['then'](_0x55768f=>{});const _0xb26ecc=new ProfileListener();_0xb26ecc[_0x4854a8(0x186)]=_0x56d34b=>{const _0x4b92e9=_0x4854a8;_0x56d34b[_0x4b92e9(0x1a0)]===selfInfo['uid']&&Object[_0x4b92e9(0x111)](selfInfo,_0x56d34b);},this[_0x4854a8(0x17c)](_0xb26ecc);const _0x403b65=new GroupListener();_0x403b65['onGroupListUpdate']=(_0x4d3241,_0x2502dd)=>{const _0x1abd24=_0x4854a8,_0x9aeaa5={'jfMlM':_0x175650[_0x1abd24(0x10d)]};_0x2502dd['map'](_0x589b37=>{const _0x339a9b=_0x1abd24,_0x57ebc1=groups[_0x339a9b(0x157)](_0x589b37[_0x339a9b(0x12f)]);if(_0x57ebc1)Object[_0x339a9b(0x111)](_0x57ebc1,_0x589b37);else{groups[_0x339a9b(0x192)](_0x589b37['groupCode'],_0x589b37);const _0x336d20=this[_0x339a9b(0x183)]['getGroupService']()[_0x339a9b(0x11b)](_0x589b37['groupCode'],_0x9aeaa5[_0x339a9b(0x10a)]);this[_0x339a9b(0x183)]['getGroupService']()[_0x339a9b(0x158)](_0x336d20,undefined,0xbb8)[_0x339a9b(0x11e)](_0x2cb141=>{});}});},_0x403b65[_0x4854a8(0x11d)]=_0x17e61c=>{const _0x492828=_0x4854a8,_0x10d269=_0x17e61c[_0x492828(0x120)][_0x492828(0x167)]('_')[0x0];if(groupMembers['has'](_0x10d269)){const _0x3d7f1c=groupMembers[_0x492828(0x157)](_0x10d269);_0x17e61c[_0x492828(0x18a)]['forEach']((_0xd7f4a5,_0x44c0b0)=>{const _0x14891b=_0x492828,_0x2dba7e=_0x3d7f1c[_0x14891b(0x157)](_0x44c0b0);_0x2dba7e?Object[_0x14891b(0x111)](_0x2dba7e,_0xd7f4a5):_0x3d7f1c[_0x14891b(0x192)](_0x44c0b0,_0xd7f4a5);});}else groupMembers[_0x492828(0x192)](_0x10d269,_0x17e61c['infos']);},_0x403b65['onMemberInfoChange']=(_0x5a5fd1,_0x17b57d,_0x51bb16)=>{const _0x14f062=_0x4854a8;_0x51bb16[_0x14f062(0x153)]((_0x48e12e,_0x513cf6)=>{uid2UinMap[_0x513cf6]=_0x48e12e['uin'];});const _0x241dbc=groupMembers['get'](_0x5a5fd1);_0x241dbc?_0x51bb16[_0x14f062(0x153)]((_0x2cb5aa,_0x15c02c)=>{const _0x2dc635=_0x14f062,_0x23935f=_0x241dbc['get'](_0x15c02c);_0x23935f?Object[_0x2dc635(0x111)](_0x23935f,_0x2cb5aa):_0x241dbc['set'](_0x15c02c,_0x2cb5aa);}):groupMembers[_0x14f062(0x192)](_0x5a5fd1,_0x51bb16);},this[_0x4854a8(0x17c)](_0x403b65);}[_0x59bad7(0x17c)](_0x1056ed){const _0x1768e9=_0x59bad7,_0x31a23d={'oAqoA':'BuddyListener','IZhng':_0x1768e9(0x160),'aoIUT':_0x1768e9(0x191)};_0x1056ed=new Proxy(_0x1056ed,this['proxyHandler']);switch(_0x1056ed[_0x1768e9(0x195)][_0x1768e9(0x105)]){case _0x31a23d[_0x1768e9(0x170)]:{return this[_0x1768e9(0x183)][_0x1768e9(0x16d)]()['addKernelBuddyListener'](new _0x2c75d4[(_0x1768e9(0x17b))](_0x1056ed));}case _0x31a23d[_0x1768e9(0x100)]:{return this['session'][_0x1768e9(0x13d)]()['addKernelGroupListener'](new _0x2c75d4['NodeIKernelGroupListener'](_0x1056ed));}case _0x31a23d[_0x1768e9(0x19e)]:{return this[_0x1768e9(0x183)][_0x1768e9(0x124)]()['addKernelMsgListener'](new _0x2c75d4[(_0x1768e9(0x15b))](_0x1056ed));}case _0x1768e9(0x11f):{return this[_0x1768e9(0x183)][_0x1768e9(0x18f)]()[_0x1768e9(0x110)](new _0x2c75d4[(_0x1768e9(0x103))](_0x1056ed));}default:return-0x1;}}[_0x59bad7(0x154)](_0x1ac889){const _0x50b0f0=_0x59bad7;this[_0x50b0f0(0x13b)][_0x50b0f0(0x138)](_0x1ac889);}async[_0x59bad7(0x197)](_0x4ad4e5){const _0x2aeaf7=_0x59bad7,_0xc7f275={'KdFyJ':_0x2aeaf7(0xfe),'fkviQ':function(_0x358039,_0x52efae){return _0x358039(_0x52efae);},'nzrhh':function(_0x4472b0,_0xedf0ba){return _0x4472b0+_0xedf0ba;}},_0x3aaff7=await this[_0x2aeaf7(0x194)][_0x2aeaf7(0x147)]();if(_0x3aaff7['result']!==0x0)throw new Error(_0xc7f275[_0x2aeaf7(0x10e)]);const _0x881798=_0x3aaff7[_0x2aeaf7(0x112)][_0x2aeaf7(0x136)](_0x1aae9e=>_0x1aae9e[_0x2aeaf7(0x118)]===_0x4ad4e5);if(!_0x881798||!_0x881798?.[_0x2aeaf7(0x150)])throw new Error(_0x4ad4e5+'快速登录不可用');await _0xc7f275[_0x2aeaf7(0x126)](sleep,0x3e8);const _0x22df9d=await this[_0x2aeaf7(0x194)][_0x2aeaf7(0x128)](_0x4ad4e5);if(!_0x22df9d['result'])throw new Error(_0xc7f275[_0x2aeaf7(0x16a)](_0x2aeaf7(0x135),_0x22df9d[_0x2aeaf7(0x13f)]['errMsg']));return _0x22df9d;}async[_0x59bad7(0x143)](){const _0x1eecc7=_0x59bad7,_0x5f1d87={'xLWJi':function(_0x73210e,_0x7e43a3){return _0x73210e(_0x7e43a3);},'kDgJx':'data:image/png;base64,','pWFfF':_0x1eecc7(0x12a),'HJPQc':function(_0x380131,_0x5e26b0){return _0x380131(_0x5e26b0);}};let _0x412bb7=![];return new Promise((_0x377182,_0x47fe3b)=>{const _0x2be763=_0x1eecc7,_0x280676={'vLsKd':_0x5f1d87[_0x2be763(0x131)],'Sksls':_0x5f1d87[_0x2be763(0x159)],'aLDSg':function(_0x20a03b,_0x327550){const _0xcff596=_0x2be763;return _0x5f1d87[_0xcff596(0x155)](_0x20a03b,_0x327550);}};setTimeout(()=>{const _0x51cdae=_0x2be763;!_0x412bb7&&_0x5f1d87[_0x51cdae(0x175)](_0x47fe3b,_0x51cdae(0x106));},0x2710),this[_0x2be763(0x109)][_0x2be763(0x14b)]=_0x59679=>{const _0x497c03=_0x2be763;_0x412bb7=!![];const _0x2bba56=_0x59679[_0x497c03(0x16f)]['split'](_0x280676[_0x497c03(0x107)])[0x1],_0x30229d=Buffer[_0x497c03(0x199)](_0x2bba56,_0x280676[_0x497c03(0x172)]);_0x280676['aLDSg'](_0x377182,{'url':_0x59679[_0x497c03(0x104)],'base64':_0x59679[_0x497c03(0x16f)],'buffer':_0x30229d});},this[_0x2be763(0x194)][_0x2be763(0x12d)]();});}async[_0x59bad7(0x15e)](_0x1624db,_0x1a602a,_0x56fc4a,_0x2d559e,_0x3f384e){const _0x39110a=_0x59bad7,_0x4779a8={'pzUHZ':_0x39110a(0x142),'FRwHH':_0x39110a(0x165),'UmqZZ':function(_0x43fb97,_0x18cc54){return _0x43fb97&&_0x18cc54;},'WOUdO':function(_0x4073b1,_0x2c6f47){return _0x4073b1||_0x2c6f47;},'OAfJj':function(_0x311be7,_0xd07bb5){return _0x311be7||_0xd07bb5;},'CXuNI':_0x39110a(0x13e),'bfjht':_0x39110a(0x101)},_0x2235be=_0x886fcc[_0x39110a(0x168)](_0x4779a8[_0x39110a(0x152)])[_0x39110a(0x156)](_0x1a602a)[_0x39110a(0x145)](_0x4779a8[_0x39110a(0x18c)]),_0xd2852a={'uin':_0x1624db,'passwordMd5':_0x2235be,'step':_0x4779a8['UmqZZ'](_0x56fc4a,_0x2d559e)&&_0x3f384e?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x4779a8[_0x39110a(0x114)](_0x56fc4a,''),'proofWaterRand':_0x2d559e||'','proofWaterSid':_0x4779a8[_0x39110a(0x173)](_0x3f384e,'')};await this[_0x39110a(0x194)][_0x39110a(0x147)](),await sleep(0x3e8);const _0x30043d=await this['loginService']['passwordLogin'](_0xd2852a);switch(_0x30043d[_0x39110a(0x115)]){case'0':{break;}case _0x4779a8[_0x39110a(0x185)]:{break;}case'4':case _0x4779a8[_0x39110a(0x174)]:default:}}}export const napCatCore=new NapCatCore();