(function(){function install(){try{if(!manifest)throw"install.js requires pkgname and manifest";eval("var myapp = appi.install"+packaged+"(manifest);"),myapp.onsuccess=function(e){this.parentNode.removeChild(this)},myapp.onerror=function(){alert(this.error.name)}}catch(e){alert("e:"+e)}}var ins=undefined,scripts=document.getElementsByTagName("script");if(scripts)for(var i=0;i<scripts.length;i++)if("install.js"==scripts[i].getAttribute("src")){ins=scripts[i];break}if(!ins)return;const manifest=ins.getAttribute("manifest"),packaged=ins.getAttribute("packaged")=="true"?"Package":"",appi=navigator.mozApps;var request=appi.checkInstalled(manifest);request.onsuccess=function(){request.result||install()},request.onerror=function(){alert("Error checking installation status: "+this.error.message)}})();