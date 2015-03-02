/*	Based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	under the MIT License:<http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false);return;}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressinstall&&A()){var ai={};ai.data=o[af].expressinstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+encodeURI(O.location).toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressinstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showexpressinstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressinstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var flexmonster = new FlexMonster();
function FlexMonster() {
	this.addCondition=function(object){this.componentObject.addCondition(object)}
	this.addDataArray=function(array){this.componentObject.addDataArray(array)}
	this.addDataRecord=function(record){this.componentObject.addDataRecord(record)}
	this.addDimension=function(object){this.componentObject.addDimension(object)}
	this.addHierarchy=function(object){this.componentObject.addHierarchy(object)}
	this.addMeasure=function(object){this.componentObject.addMeasure(object)}
	this.addStyleToMember=function(hierarchyName,memberName,style){this.componentObject.addStyleToMember(hierarchyName,memberName,style)}
	this.addUrlToMember=function(hierarchyName,memberName,url){this.componentObject.addUrlToMember(hierarchyName,memberName,url)}
	this.clear=function(){this.componentObject.clear()}
	this.clearFilter=function(hierarchyName){this.componentObject.clearFilter(hierarchyName)}
	this.closeFieldsList=function(){this.componentObject.closeFieldsList()}
	this.collapseAllData=function(){this.componentObject.collapseAllData()}
	this.collapseData=function(hierarchyName){this.componentObject.collapseData(hierarchyName)}
	this.connectTo=function(params,callbackHandler){this.componentObject.connectTo(params,callbackHandler)}
	this.expandAllData=function(children){this.componentObject.expandAllData(children)}
	this.expandData=function(hierarchyName){this.componentObject.expandData(hierarchyName)}
	this.exportTo=function(type,params,callbackHandler){this.componentObject.exportTo(type,params,callbackHandler)}
	this.fullScreen=function(){this.componentObject.fullScreen()}
	this.hidePreloader=function(){this.componentObject.hidePreloader()}
	this.getAllConditions=function(){return this.componentObject.getAllConditions()}
	this.getAllHierarchies=function(){return this.componentObject.getAllHierarchies()}
	this.getAllMeasures=function(){return this.componentObject.getAllMeasures()}
	this.getCell=function(rowIdx,colIdx){return this.componentObject.getCell(rowIdx,colIdx)}
	this.getColumns=function(){return this.componentObject.getColumns()}
	this.getColumnWidth=function(idx){return this.componentObject.getColumnWidth(idx)}
	this.getCondition=function(id){return this.componentObject.getCondition(id)}
	this.getFilter=function(hierarchyName){return this.componentObject.getFilter(hierarchyName)}
	this.getFilterProperties=function(hierarchyName){return this.componentObject.getFilterProperties(hierarchyName)}
	this.getFormat=function(measureName){return this.componentObject.getFormat(measureName)}
	this.getLabels=function(){return this.componentObject.getLabels()}
	this.getMeasures=function(){return this.componentObject.getMeasures()}
	this.getMembers=function(hierarchyName,memberName,callbackHandler){return this.componentObject.getMembers(hierarchyName,memberName,callbackHandler)}
	this.getOptions=function(){return this.componentObject.getOptions()}
	this.getPages=function(){return this.componentObject.getPages()}
	this.getReport=function(format){return this.componentObject.getReport(format)}
	this.getRowHeight=function(idx){return this.componentObject.getRowHeight(idx)}
	this.getRows=function(){return this.componentObject.getRows()}
	this.getSelectedCell=function(){return this.componentObject.getSelectedCell()}
	this.getSort=function(hierarchyName){return this.componentObject.getSort(hierarchyName)}
	this.getValue=function(rowIdx,colIdx){return this.componentObject.getValue(rowIdx,colIdx)}
	this.getXMLACatalogs=function(proxyURL,dataSource,callbackHandler,username,password){return this.componentObject.getXMLACatalogs(proxyURL,dataSource,callbackHandler,username,password)}
	this.getXMLACubes=function(proxyURL,dataSource,catalog,callbackHandler,username,password){return this.componentObject.getXMLACubes(proxyURL,dataSource,catalog,callbackHandler,username,password)}
	this.getXMLADataSources=function(proxyURL,callbackHandler,username,password){return this.componentObject.getXMLADataSources(proxyURL,callbackHandler,username,password)}
	this.getXMLAProviderName=function(proxyURL,callbackHandler,username,password){return this.componentObject.getXMLAProviderName(proxyURL,callbackHandler,username,password)}
	this.gridColumnCount=function(){return this.componentObject.gridColumnCount()}
	this.gridRowCount=function(){return this.componentObject.gridRowCount()}
	this.load=function(url){this.componentObject.load(url)}
	this.open=function(){this.componentObject.open()}
	this.openFieldsList=function(){this.componentObject.openFieldsList()}
	this.percentZoom=function(num){this.componentObject.percentZoom(num)}
	this.print=function(){this.componentObject.print()}
	this.refresh=function(){this.componentObject.refresh()}
	this.removeAllConditions=function(){this.componentObject.removeAllConditions()}
	this.removeAllMeasures=function(){this.componentObject.removeAllMeasures()}
	this.removeCondition=function(id){this.componentObject.removeCondition(id)}
	this.removeMeasure=function(measureName){this.componentObject.removeMeasure(measureName)}
	this.removeSelection=function(){this.componentObject.removeSelection()}
	this.runQuery=function(slice){this.componentObject.runQuery(slice)}
	this.save=function(filename,destination,callbackHandler,url){return this.componentObject.save(filename,destination,callbackHandler,url)}
	this.setBottomX=function(hierarchyName,num,measureName){this.componentObject.setBottomX(hierarchyName,num,measureName)}
	this.setChartTitle=function(title){this.componentObject.setChartTitle(title)}
	this.setColumnWidth=function(idx,width){this.componentObject.setColumnWidth(idx,width)}
	this.setFilter=function(hierarchyName,items,negation){this.componentObject.setFilter(hierarchyName,items,negation)}
	this.setFormat=function(format,measureName){this.componentObject.setFormat(format,measureName)}
	this.setGridTitle=function(title){this.componentObject.setGridTitle(title)}
	this.setHandler=function(eventName,functionName){this.componentObject.setHandler(eventName,functionName)}
	this.setLabels=function(object){this.componentObject.setLabels(object)}
	this.setOptions=function(params){this.componentObject.setOptions(params)}
	this.setReport=function(object){this.componentObject.setReport(object)}
	this.setRowHeight=function(idx,height){this.componentObject.setRowHeight(idx,height)}
	this.setSelectedCell=function(rowIdx,colIdx){return this.componentObject.setSelectedCell(rowIdx,colIdx)}
	this.setSort=function(hierarchyName,sortType){this.componentObject.setSort(hierarchyName,sortType)}
	this.setStyle=function(url){this.componentObject.setStyle(url)}
	this.setTopX=function(hierarchyName,num,measureName){this.componentObject.setTopX(hierarchyName,num,measureName)}
	this.showCharts=function(type, multiple){this.componentObject.showCharts(type, multiple)}
	this.showGrid=function(){this.componentObject.showGrid()}
	this.showGridAndCharts=function(type, multiple){this.componentObject.showGridAndCharts(type, multiple)}
	this.showPreloader=function(message,details){this.componentObject.showPreloader(message,details)}
	this.sortValues=function(axisName,type,tuple,measureName){this.componentObject.sortValues(axisName,type,tuple,measureName)}
	this.zoomTo=function(num){this.componentObject.zoomTo(num)}
	this.handle=function(delta){if(this.componentObject) {if(this.componentObject.mousewheelHandler){this.componentObject.mousewheelHandler(delta);}}}
	this.wheel=function(event,obj){var delta=0;if(!event){event = window.event;}if(event.wheelDelta){delta=event.wheelDelta/120;}else if(event.detail){delta=-event.detail/3;}if(delta)obj.handle(delta);if (event.preventDefault){event.preventDefault();}event.returnValue=false;};
	this.showAlerts = true;
}
flexmonster.embedPivotComponent = function(path, containerId, _width, _height, params, _type, withToolbar, toolbarLabels) {
	if (!document.getElementById) return;
	var isHTML5 = false;
	if (_type == "html5") {
		isHTML5 = true;
	} else if (_type == "flash") {
		isHTML5 = false;
	} else {
		isHTML5 = flexmonster.isMobile.any() || !swfobject.hasFlashPlayerVersion("10.0");	
	}
	if (isHTML5 && !flexmonster.isHTML5Supported()) {
		if (flexmonster.showAlerts) {
			var r = confirm("Flexmonster Pivot Table is not completely supported by this version of browser. Please update your browser or use Flash version of the component. Continue anyway?");
			if (r == false) return;
		} else {
			console.warn("Warning: Flexmonster Pivot Table is not completely supported by this version of browser. Please update your browser or use Flash version of the component.");
		}
	}
	if (document.getElementById(containerId) == null && isHTML5) {
		flexmonster.alert("There is no DOM element with id '" + containerId + "'");
		return;
	}
	if (!params) params = {};
	params.componentFolder = path;
	var obj = (flexmonster.instances++ == 0) ? flexmonster : new FlexMonster();
	obj.toolbarLabels = toolbarLabels;
	var loader = new FlexmonsterLoader(obj, path, (isHTML5)?containerId:"__flexmonsterPivotComponent__"+flexmonster.instances, _width, _height, params, isHTML5, withToolbar);
	
	if (withToolbar) {
		loader.loadCSS(path + 'toolbar/flexmonster.toolbar.css');
		loader.scripts = ['toolbar/flexmonster.toolbar.js'];
		loader.loadScript();
	};

	if (!isHTML5) {
		if (swfobject.getFlashPlayerVersion().major == 0) {
			var pageHost = ((document.location.protocol == "https:") ? "https://" : "http://"); 
            document.getElementById(containerId).innerHTML = "<a href='http://www.adobe.com/go/getflashplayer'><img src='" 
               + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a>"; 
		}
		flexmonster.embedFlashComponent(obj, path, containerId, _width, _height, params);
	} else if (isHTML5) {
		loader.preloadImage(path+"html5-assets/assets/img/preloader.gif");
		flexmonster.empty(containerId);
		loader.scripts = [
			"html5-assets/js/preloader.js",
		//	"html5-assets/js/jquery.min.js", 
		//	"html5-assets/js/jqueryui.min.js", 
		//	"html5-assets/js/jqueryhelpers.min.js"
			"html5-assets/js/pivot.min.js",
			"html5-assets/js/file.min.js",
		//	"html5-assets/js/d3.v3.min.js",
			"html5-assets/js/zlib.min.js",
			"html5-assets/js/jszip.min.js",
			"html5-assets/js/jspdf.min.js",
			"html5-assets/js/html2canvas.min.js",
			"html5-assets/js/canvg.min.js"
		];
		var insertBefore = function (arr, insertItem, insertBeforeThisItem) {
	    	for (var i = 0; i < arr.length; i++) {
	        	if (arr[i] == insertBeforeThisItem) {
	        	  	arr.splice(i, 0, insertItem);
	          		return;
	    	   	}
	    	}
	    };
	    if (typeof window.jQuery == 'undefined') {
	    	insertBefore(loader.scripts, "html5-assets/js/jquery.min.js", "html5-assets/js/pivot.min.js");
	    	insertBefore(loader.scripts, "html5-assets/js/jqueryui.min.js", "html5-assets/js/pivot.min.js");
	    } else {
			if (typeof window.jQuery.ui == 'undefined') {
		    	insertBefore(loader.scripts, "html5-assets/js/jqueryui.min.js", "html5-assets/js/pivot.min.js");
		    }
		    insertBefore(loader.scripts, "html5-assets/js/jqueryhelpers.min.js", "html5-assets/js/pivot.min.js");
	    }
		if (typeof window.d3 == 'undefined') insertBefore(loader.scripts, "html5-assets/js/d3.v3.min.js", "html5-assets/js/zlib.min.js");

		loader.loadScript();
		loader.loadCSS(path + 'html5-assets/flexmonster.css');
	} else {
		loader.scripts = [];
		flexmonster.embedFlashComponent(obj, path, containerId, _width, _height, params); 
	}
	return obj;
}
flexmonster.instances=0;
flexmonster.flashVarsArray=[];
flexmonster.getFlashVars=function(id){return flexmonster.flashVarsArray[id]};
flexmonster.embedFlashComponent=function(obj,path,container,w,h,flashVars){
	var attributes={id:"__flexmonsterPivotComponent__"+flexmonster.instances,name:"__flexmonsterPivotComponent__"+flexmonster.instances};
	var params={allowScriptAccess:"always",menu:"false",allowFullScreen:"true", wmode:"opaque"};
	flashVars.id=attributes.id;
	flexmonster.flashVarsArray[attributes.id]=flashVars;
	obj.id=attributes.id;
	obj.containerId=container;
	obj.instanceNum=flexmonster.instances;
	if (flexmonster.instances==1){flexmonster.id=attributes.id;flexmonster.containerId=container;}
	flexmonster.componentPath=path+"PivotTable.swf?v=2";
	swfobject.embedSWF(flexmonster.componentPath,container,w,h,"10.1.0",path+"expressinstall.swf",flashVars,params,attributes,function(e){
		if(e.success){
			if(obj.instanceNum==0)flexmonster.componentObject=e.ref;
			obj.componentObject=e.ref;
			obj.counter=0;
			setTimeout(function(){flexmonster.checkIfExists(obj)},100);
		}
	});
	return obj;
}
flexmonster.checkIfExists=function(obj){ // check if swf exists
	try {
		if(obj.componentObject.PercentLoaded()>0){
			obj.exists=true;
			if(obj.instanceNum==0)flexmonster.exists=true;
			setTimeout(function(){flexmonster.checkIfLoaded(obj)},100);
		}
	} catch (e) {}
	if(!obj.exists){
		if (obj.counter>100||(location.host==""&&obj.counter>5)||(location.host=="localhost"&&window.opera&&obj.counter>5)){
			flexmonster.alert("Can't find Flexmonster Pivot Table component. Please check whether the path '"+flexmonster.componentPath+"' is correct.");
		} else {
			obj.counter++;
			setTimeout(function(){flexmonster.checkIfExists(obj)},100); // check again
		}
	}
}
flexmonster.checkIfLoaded=function(obj) { // check if swf is loaded
	if(obj.componentObject.PercentLoaded()<100) {
		setTimeout(function(){flexmonster.checkIfLoaded(obj)},100); // check again
	} else {
		setTimeout(function(){flexmonster.checkJSSecurity(obj)},500);
	}
}
var flexmonsterSecurityDiv;
flexmonster.checkJSSecurity=function(obj) { // check if location is trusted
	try {if(obj.componentObject.isTrusted()){
		flexmonster.trusted=true;
		flexmonster.initScrollListening(obj);
	}}catch(e){}
	var flexmonsterWarningMessage = "";
	if (!flexmonster.trusted) {// add security alert
		if (flexmonster.checkPepperPlayer()) {// add Chrome Pepper alert
		flexmonsterWarningMessage = 'To enable communication between JavaScript and Flash component in Chrome Browser you should <a href="http://helpx.adobe.com/flash-player/kb/enable-system-flash-player-google-chrome.html" target="_blank">enable system Flash Player</a> first';
		}else if (flexmonster.getInternetExplorerVersion() > 10) {
		flexmonsterWarningMessage = 'To see this demo please use another browser or place it on your web server.';
		}else{ 
		flexmonsterWarningMessage = 'To enable communication between JavaScript and Flash component you should setup <a href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04a.html" target="_blank">Flash Player Security Settings</a>. Please visit website to find detailed step by step <a href="http://www.flexmonster.com/pivot-table-component-docs#page=security.html" target="_blank">instructions</a>';
		}
	}
	if (flexmonsterWarningMessage.length>0) {
		flexmonsterSecurityDiv = document.createElement('div');
		flexmonsterSecurityDiv.innerHTML = '<p style="line-height: 15px;"><font color="#DD0000"><b>Warning!</b></font></br>' + flexmonsterWarningMessage + '.</p>';
		flexmonsterSecurityDiv.style.display="";
		flexmonsterSecurityDiv.style.border="solid 2px #D00"; 
		flexmonsterSecurityDiv.style.padding="10px"; 
		flexmonsterSecurityDiv.style.margin="3px"; 
		flexmonsterSecurityDiv.style["border-radius"]="5px";
		if (flexmonster.checkPepperPlayer() || flexmonster.getInternetExplorerVersion() > 10) flexmonsterSecurityDiv.style.background="#FFEAEE"; 
		else flexmonsterSecurityDiv.style.background="#F9F3D6";
		try {flexmonster.componentObject.parentNode.insertBefore(flexmonsterSecurityDiv, obj.componentObject);} catch (e) {}
		flexmonster.checkActivity(obj);
	}
}
flexmonster.active=false;
flexmonster.checkActivity=function(obj){ // for inactive tabs. do not remove.
	try {
		if (!flexmonster.trusted) if (obj.componentObject.isTrusted()){flexmonster.trusted=true;flexmonsterSecurityDiv.parentNode.removeChild(flexmonsterSecurityDiv);}
	} catch (e) {}	
	if(!flexmonster.active&&!flexmonster.trusted)setTimeout(function(){flexmonster.checkActivity(obj)},100); // check again
}
flexmonster.initScrollListening=function(obj) { // enable mouse scrolling
	if(navigator.appName.indexOf("Microsoft")==-1) {
		if(obj.componentObject.addEventListener) {
			/** DOMMouseScroll is for mozilla. */
			obj.componentObject.addEventListener('DOMMouseScroll',function(event){obj.wheel(event,obj)},false);
			/** Chrome */
			obj.componentObject.addEventListener('mousewheel', function(event){obj.wheel(event,obj)}, false);
		} else if(window.opera) {/** Opera*/
			obj.componentObject.onmousewheel = function(event){obj.wheel(event,obj)};
		}
	} else {
		/** IE */obj.componentObject.onmousewheel = function(event){obj.wheel(event,obj)};
	}
}

flexmonster.getInternetExplorerVersion=function(){
	var rv=-1;
	if(navigator.appName=='Microsoft Internet Explorer'){
		var ua=navigator.userAgent;
		var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);
	}else if(navigator.appName=='Netscape'){
		var ua=navigator.userAgent;
		var re=new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if(re.exec(ua)!=null)rv=parseFloat(RegExp.$1);
	}
	return rv;
}

flexmonster.checkPepperPlayer=function(){
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	if (is_chrome) {
		var pluginsList = navigator.plugins;
		for (var plugin in pluginsList) {
			if (plugin && pluginsList[plugin] && pluginsList[plugin].filename) {
				var filename = pluginsList[plugin].filename;
				//Platform:			Adobe Flash Player plug-in integrated with Chrome:
				//----------------	--------------------------------------------------
				//Windows			pepflashplayer.dll
				//Mac				PepperFlashPlayer.plugin
				//Linux, Chrome OS	libpepflashplayer.so
				if (filename == "pepflashplayer.dll" || filename == "PepperFlashPlayer.plugin" || filename == "libpepflashplayer.so") {
					return true;
				}
			}
		}
	}
	return false;
};

flexmonster.isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    any: function() {
        return (flexmonster.isMobile.Android() || flexmonster.isMobile.iOS());
    }
};

flexmonster.isHTML5Supported = function() {
	var getVersion = function(str) {
		return parseInt(str.replace(/[^\d]/g, ""));
	}
	var checkSafari = function() {
		return navigator.userAgent.match('Safari/') ? !navigator.userAgent.match('Version/5.') && !navigator.userAgent.match('Version/6.0') : true;
	}
	var checkOpera = function() {
		return window.opera ? window.opera.version() >= 15 : true;
	}
	var checkChrome = function() {
		return window.chrome ? getVersion(navigator.userAgent.match(/chrome.\d*/gi)[0]) >= 12 : true;
	}
	try {
		return (ArrayBuffer !== undefined && DataView !== undefined && Uint8Array !== undefined
			&& checkChrome() && checkOpera() && checkSafari());
	} catch (e) {
		return false;
	}
}

flexmonster.empty = function(id) {
	var cont = document.getElementById(id);
	while(cont.firstChild) {
		cont.removeChild(cont.firstChild);
	}
}

flexmonster.alert = function(msg) {
	flexmonster.showAlerts ? alert(msg) : console.error(msg); 
}

var FlexmonsterLoader = (function() {

	function FlexmonsterLoader(_parent, path, containerId, _width, _height, params, isHTML5, hasToolbar) {
		this._parent = _parent;
		this.isHTML5 = isHTML5;
		this.path = path;
		this.containerId = containerId;
		this._width = _width;
		this._height = _height;
		this.params = params;
		this.hasToolbar = (hasToolbar) ? undefined : false;
		this.getContext();
	}

	FlexmonsterLoader.prototype.scripts = [];

	FlexmonsterLoader.prototype.getContext = function() {
		FlexmonsterLoader.self = this;
		if (FlexmonsterLoader.instances == undefined) FlexmonsterLoader.instances = [];
		FlexmonsterLoader.instances.push(this);
	}

	FlexmonsterLoader.prototype.loadScript = function (script) {
		var src;
		var pendingScripts = [];
		var firstScript = document.scripts[0];
		if (script != null) this.scripts.push(script);

		function stateChange() {
			var pendingScript;
			while (pendingScripts[0] && pendingScripts[0].readyState == 'loaded') {
				pendingScript = pendingScripts.shift();
				pendingScript.onreadystatechange = null;
				firstScript.parentNode.insertBefore(pendingScript, firstScript);
			}
		}

		function onError(e) {
			if (!FlexmonsterLoader.isNotFoundAlertShown) {
				FlexmonsterLoader.isNotFoundAlertShown = true;
				flexmonster.alert("File " + e.target.src + " not found. Please verify that the file exists.");
			}
		}

		while (src = this.scripts.shift()) {
			src = this.path + src;
			if ('async' in firstScript) {
				script = document.createElement('script');
				script.async = false;
				script.src = src;
				script.onerror = onError;
				document.head.appendChild(script);
			} else if (firstScript.readyState) {
				script = document.createElement('script');
				pendingScripts.push(script);
				script.onreadystatechange = stateChange;
				script.src = src;
			} else {
				document.write('<script src="' + src + '" defer></'+'script>');
			}
		}
	}

	FlexmonsterLoader.prototype.loadCSS = function(src) {
		var cssfiles = document.getElementsByTagName('link');
		for (var i = cssfiles.length; i >= 0; i--) {
			if (cssfiles[i] && cssfiles[i].getAttribute("href") != null && cssfiles[i].getAttribute("href").indexOf(src) != -1) {
				return;
			}
		}

		function onError(e) {
			if (!FlexmonsterLoader.isNotFoundAlertShown) {
				FlexmonsterLoader.isNotFoundAlertShown = true;
				flexmonster.alert("File " + e.target.href + " not found. Please verify that the file exists.");
			}
		}

		var cssfile = document.createElement('link');
		cssfile.setAttribute('href', src);
		cssfile.setAttribute("rel", "stylesheet");
		cssfile.setAttribute("type", "text/css");
		cssfile.onerror = onError;
		document.getElementsByTagName('head')[0].appendChild(cssfile);
	}

    FlexmonsterLoader.prototype.preloadImage = function(url) {
        try {
            var _img = new Image();
            _img.src = url;
        } catch (e) { }
    }

	return FlexmonsterLoader;
})();
