function i(){this.i=null}i.prototype.addListener=function(i){null!=this.i?this.i.push(i):this.i=[i]},i.prototype.t=function(i){null!=this.i&&this.i.forEach((n=>n(i)))};var n=new i;document.addEventListener("readystatechange",(i=>{"interactive"==document.readyState&&n.t()}));var e,t=new Map,o=new i;n.addListener((()=>{o.t();var i,n=(i="imageCarousel",t.get(i));null!=n&&gallery.data.forEach((i=>{i.images.forEach(((e,t)=>{var o=document.getElementById("gallery_image_button_"+i.id+"_"+t);o.addEventListener("click",(()=>{n.show(i.id,t,o)}))}))}))})),n.addListener((()=>{e=document.getElementById("topBar");for(var i=document.getElementsByClassName("content_padding_top"),n=0;n<i.length;n++)i[n].style.paddingTop=e.offsetHeight+"px"}));var l,a,c,s='<svg role="img" viewBox="0 0 36 24" class="symbol icon_text"><title>Menu</title><path d="m0 24v-3h36v3zm0-10.5v-3h36v3zm0-10.5v-3h36v3z"/></svg>',d='<svg role="img" viewBox="0 0 27.3 27.3" class="symbol icon_text"><title>Chiudi menu</title><path d="M 2.1,27.3 0,25.2 11.55,13.65 0,2.1 2.1,0 13.65,11.55 25.2,0 27.3,2.1 15.75,13.65 27.3,25.2 25.2,27.3 13.65,15.75 Z"/></svg>',u=!1;function m(){u&&(u=!1,l.innerHTML=s,l.ariaLabel="Menu",a.classList.remove("visible"),a.classList.add("hidden"),c.classList.remove("visible"),c.classList.add("hidden"))}function h(i){i.matches&&u&&(u=!1,l.innerHTML=s,l.ariaLabel="Menu",a.style.display="none",a.classList.remove("visible"),c.style.display="none",c.classList.remove("visible"))}function v(i){this.element=i,this.o=0;for(var n=0;n<i.children.length-1;n++)this.o+=i.children[n].children[0].width;document.body.clientWidth>this.o&&this.element.classList.add("image_roll_static"),window.addEventListener("resize",(i=>{document.body.clientWidth>this.o?this.element.classList.add("image_roll_static"):this.element.classList.remove("image_roll_static")}))}n.addListener((()=>{l=document.getElementById("navMenuButton"),a=document.getElementById("drawer"),c=document.getElementById("drawerScrim"),a.children[0].addEventListener("animationend",(i=>{"slide_out_top"==i.animationName&&(a.style.display="none")})),c.addEventListener("animationend",(i=>{"fade_out"==i.animationName&&(c.style.display="none")})),l.addEventListener("click",(i=>{u?m():u||(u=!0,l.innerHTML=d,l.ariaLabel="Chiudi menu",a.style.display="block",a.classList.remove("hidden"),a.classList.add("visible"),c.style.display="block",c.classList.remove("hidden"),c.classList.add("visible"))})),c.addEventListener("click",(i=>{m()})),window.matchMedia("(min-width: 50em)").addEventListener("change",h)})),o.addListener((()=>{document.querySelectorAll("div.image_roll").forEach((i=>function(i,n){""!=i.id&&t.set(i.id,n)}(i,new v(i))))}));
