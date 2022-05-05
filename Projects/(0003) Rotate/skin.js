// Garden Gnome Software - Skin
// Object2VR 2.0.2/2407
// Filename: Menu_001_HTML.ggsk
// Generated Ср 12. Січ 13:57:51 2022

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/_3__o.png';
		preLoadImg.src=basePath + 'images/_2__o.png';
		preLoadImg.src=basePath + 'images/_10__o.png';
		preLoadImg.src=basePath + 'images/_1__o.png';
		preLoadImg.src=basePath + 'images/_0__o.png';
		preLoadImg.src=basePath + 'images/___o.png';
	}
	
	this.addSkin=function() {
		this.__4=document.createElement('div');
		this.__4.ggId='\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435'
		this.__4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__4.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 106px;';
		hs+='top:  560px;';
		hs+='width: 166px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__4.setAttribute('style',hs);
		this.divSkin.appendChild(this.__4);
		this._image_15=document.createElement('div');
		this._image_15.ggId='Image 15'
		this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_15.ggVisible=true;
		this._image_15.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-67 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -67px;';
		hs+='width: 100px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_15.setAttribute('style',hs);
		this._image_15__img=document.createElement('img');
		this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
		this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_15__img);
		this._image_15.appendChild(this._image_15__img);
		this.__3=document.createElement('div');
		this.__3.ggId='\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0442\u0438\u0432'
		this.__3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3.ggVisible=true;
		this.__3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(1 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  -47px;';
		hs+='width: 46px;';
		hs+='height: 44px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__3.setAttribute('style',hs);
		this.__3__img=document.createElement('img');
		this.__3__img.setAttribute('src',basePath + 'images/_3.png');
		this.__3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.__3__img);
		this.__3.appendChild(this.__3__img);
		this.__3.onclick=function () {
			me.player.startAutorotate("-0.1");
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='hidden';
			me.__2.ggVisible=false;
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='inherit';
			me.__10.ggVisible=true;
		}
		this.__3.onmouseover=function () {
			me.__3__img.src=basePath + 'images/_3__o.png';
		}
		this.__3.onmouseout=function () {
			me.__3__img.src=basePath + 'images/_3.png';
		}
		this._image_15.appendChild(this.__3);
		this.__2=document.createElement('div');
		this.__2.ggId='\u0412\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043f\u043e'
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-47 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -47px;';
		hs+='top:  -47px;';
		hs+='width: 46px;';
		hs+='height: 44px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__2.setAttribute('style',hs);
		this.__2__img=document.createElement('img');
		this.__2__img.setAttribute('src',basePath + 'images/_2.png');
		this.__2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.__2__img);
		this.__2.appendChild(this.__2__img);
		this.__2.onclick=function () {
			me.player.startAutorotate("0.1");
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='hidden';
			me.__2.ggVisible=false;
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='inherit';
			me.__10.ggVisible=true;
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
		}
		this.__2.onmouseover=function () {
			me.__2__img.src=basePath + 'images/_2__o.png';
		}
		this.__2.onmouseout=function () {
			me.__2__img.src=basePath + 'images/_2.png';
		}
		this._image_15.appendChild(this.__2);
		this.__10=document.createElement('div');
		this.__10.ggId='\u041f\u0430\u0443\u0437\u04301'
		this.__10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__10.ggVisible=true;
		this.__10.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-45 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-47 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -45px;';
		hs+='top:  -47px;';
		hs+='width: 91px;';
		hs+='height: 42px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__10.setAttribute('style',hs);
		this.__10__img=document.createElement('img');
		this.__10__img.setAttribute('src',basePath + 'images/_10.png');
		this.__10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.__10__img);
		this.__10.appendChild(this.__10__img);
		this.__10.onclick=function () {
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='hidden';
			me.__10.ggVisible=false;
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='inherit';
			me.__2.ggVisible=true;
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='inherit';
			me.__3.ggVisible=true;
			me.player.stopAutorotate();
		}
		this.__10.onmouseover=function () {
			me.__10__img.src=basePath + 'images/_10__o.png';
		}
		this.__10.onmouseout=function () {
			me.__10__img.src=basePath + 'images/_10.png';
		}
		this._image_15.appendChild(this.__10);
		this.divSkin.appendChild(this._image_15);
		this.__1=document.createElement('div');
		this.__1.ggId='\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0451'
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-70 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -70px;';
		hs+='top:  217px;';
		hs+='width: 46px;';
		hs+='height: 44px;';
		hs+=cssPrefix + 'transform-origin: 50% 100%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__1.setAttribute('style',hs);
		this.__1__img=document.createElement('img');
		this.__1__img.setAttribute('src',basePath + 'images/_1.png');
		this.__1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.__1__img);
		this.__1.appendChild(this.__1__img);
		this.__1.onclick=function () {
			me.player.toggleFullscreen();
		}
		this.__1.onmouseover=function () {
			me.__1__img.src=basePath + 'images/_1__o.png';
		}
		this.__1.onmouseout=function () {
			me.__1__img.src=basePath + 'images/_1.png';
		}
		this.divSkin.appendChild(this.__1);
		this.__0=document.createElement('div');
		this.__0.ggId='\u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u0432\u043b\u0435\u0432\u043e'
		this.__0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__0.ggVisible=true;
		this.__0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-60 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -129px;';
		hs+='top:  -60px;';
		hs+='width: 22px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__0.setAttribute('style',hs);
		this.__0__img=document.createElement('img');
		this.__0__img.setAttribute('src',basePath + 'images/_0.png');
		this.__0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.__0__img);
		this.__0.appendChild(this.__0__img);
		this.__0.onclick=function () {
			me.player.changePan(1,true);
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='hidden';
			me.__10.ggVisible=false;
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='inherit';
			me.__2.ggVisible=true;
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='inherit';
			me.__3.ggVisible=true;
			me.player.stopAutorotate();
		}
		this.__0.onmouseover=function () {
			me.__0__img.src=basePath + 'images/_0__o.png';
		}
		this.__0.onmouseout=function () {
			me.__0__img.src=basePath + 'images/_0.png';
		}
		this.divSkin.appendChild(this.__0);
		this.__=document.createElement('div');
		this.__.ggId='\u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u0432\u043f\u0440\u0430\u0432\u043e'
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(127 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-60 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 127px;';
		hs+='top:  -60px;';
		hs+='width: 22px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__.setAttribute('style',hs);
		this.____img=document.createElement('img');
		this.____img.setAttribute('src',basePath + 'images/_.png');
		this.____img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this.____img);
		this.__.appendChild(this.____img);
		this.__.onclick=function () {
			me.player.changePan(-1,true);
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='hidden';
			me.__10.ggVisible=false;
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='inherit';
			me.__2.ggVisible=true;
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='inherit';
			me.__3.ggVisible=true;
			me.player.stopAutorotate();
		}
		this.__.onmouseover=function () {
			me.____img.src=basePath + 'images/___o.png';
		}
		this.__.onmouseout=function () {
			me.____img.src=basePath + 'images/_.png';
		}
		this.divSkin.appendChild(this.__);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me.player.startAutorotate("0.1");
			me.__3.style[domTransition]='none';
			me.__3.style.visibility='hidden';
			me.__3.ggVisible=false;
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='hidden';
			me.__2.ggVisible=false;
			me.__10.style[domTransition]='none';
			me.__10.style.visibility='inherit';
			me.__10.ggVisible=true;
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
		var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
	};
	this.addSkin();
};