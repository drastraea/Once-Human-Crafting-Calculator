const _0xad0cc0=_0x3770;(function(t,e){const a=_0x3770,n=_0x5408();for(;;)try{if(857695===parseInt(a(546))/1+parseInt(a(535))/2*(parseInt(a(500))/3)+-parseInt(a(559))/4*(-parseInt(a(527))/5)+-parseInt(a(521))/6*(-parseInt(a(507))/7)+parseInt(a(532))/8*(parseInt(a(513))/9)+-parseInt(a(543))/10+-parseInt(a(520))/11)break;n.push(n.shift())}catch(t){n.push(n.shift())}})(),document.addEventListener("DOMContentLoaded",(function(){loadCategories(),loadMaterials()}));let categoriesData={},itemsData={},materialsData={},selectedCategory=null;const itemsUrl=_0xad0cc0(502),materialsUrl=_0xad0cc0(494),secretKey=_0xad0cc0(554);function base64ToUint8Array(t){const e=_0xad0cc0;try{const e=atob(t),a=e.length,n=new Uint8Array(a);for(let t=0;t<a;t++)n[t]=e.charCodeAt(t);return n}catch(t){throw new Error(e(537))}}async function deriveKey(t){const e=_0xad0cc0;try{const a=(new TextEncoder)[e(514)](t);return await crypto.subtle[e(533)]("SHA-256",a)}catch(t){throw new Error(e(550))}}async function decryptData(t){const e=_0xad0cc0,a=new TextDecoder;try{const n=await deriveKey(secretKey),c=base64ToUint8Array(t),o=16,s=c[e(541)](0,o),r=c[e(541)](o),i=await crypto[e(549)].importKey("raw",n,{name:e(486)},!1,["decrypt"]),l=await crypto.subtle[e(531)]({name:e(486),iv:s},i,r);return a.decode(l)}catch(t){throw new Error(e(493))}}async function loadCategories(){const t=_0xad0cc0;try{const e=await fetch(itemsUrl),a=await e[t(539)](),n=await decryptData(a);categoriesData=JSON[t(538)](n),itemsData=categoriesData,populateCategoryButtons()}catch(t){}}async function loadMaterials(){const t=_0xad0cc0;try{const e=await fetch(materialsUrl),a=await e[t(539)](),n=await decryptData(a);materialsData=JSON[t(538)](n)}catch(t){}}function populateCategoryButtons(){const t=_0xad0cc0,e=document[t(551)](t(530));e&&(e[t(506)]="",Object[t(483)](categoriesData)[t(489)]((a=>{const n=t,c=document[n(492)]("button");c[n(485)]=n(530),c[n(517)]=a,c[n(515)](n(555),(function(){selectedCategory=a,populateItemsOptions(a)})),e[n(508)](c)})))}function populateItemsOptions(t){const e=_0xad0cc0,a=document[e(551)](e(526));if(!a)return;a[e(506)]="";const n=document[e(492)](e(501));n[e(536)]="",n[e(517)]="== Choose One ==",a[e(508)](n);const c=categoriesData[t];Object[e(483)](c)[e(489)]((t=>{const n=e,o=c[t],s=document[n(492)](n(501));s[n(536)]=t,s[n(517)]=o[n(488)],a.appendChild(s)})),a.addEventListener("change",(function(){const t=e,a=this[t(536)],n=c[a];n&&n[t(523)]?populateChoosableMaterials(n[t(523)]):hideChoosableMaterialsForm()}))}function populateChoosableMaterials(t){const e=_0xad0cc0,a=document.getElementById(e(553));if(!a)return;a[e(506)]="";const n=document[e(492)]("option");n[e(536)]="",n[e(517)]=e(511),a[e(508)](n),Object[e(483)](t)[e(489)]((t=>{const n=e,c=document[n(492)](n(501));c[n(536)]=t,c[n(517)]=materialsData[t]?.[n(539)]||t,a[n(508)](c)})),document[e(551)](e(552))[e(524)][e(499)]=e(482)}function hideChoosableMaterialsForm(){const t=_0xad0cc0,e=document[t(551)]("choosable-materials-form");e&&(e.style.display=t(496))}function _0x5408(){const t=["4026051tCOJRz","encode","addEventListener",'<span class="label">Material Cost:</span>',"innerText","Error fetching or decrypting categories:","classList","32739586rQzOHZ","1125906mJvJDE","Error fetching or decrypting materials data:","choosable","style",")</span>\n    ","items-select","15aMYfsZ","Error deriving key:","crafted-item","category-button","decrypt","8XTqRrs","digest","Error converting Base64 to Uint8Array:","62112cQnJon","value","Base64 decoding failed","parse","text","Result container not found.","slice","div","9402220srbiXB","Material ","material","1558221dWWJzR","error","quantity-input","subtle","Key derivation failed","getElementById","choosable-materials-form","choosable-materials-select","zybzVQRyrtSMkH5qxo1DPi648NJcrdO+","click","calculate-btn","non_choosable","getElementsByTagName","1360456euQOHg","Please select an item.","block","keys",'" onerror="this.style.display=\'none\'">\n        </div>\n        <span class="item-name">',"className","AES-CBC","querySelector","name","forEach",'\n        <div class="item-icon">\n            <img src="',")</span>\n            ","createElement","Decryption failed","https://mayicu.id/tools/ohcmaterials","material-cost","none","output_quantity",".result-container","display","42cMISKY","option","https://mayicu.id/tools/ohcitems","spinner",'" alt="','\n                <div class="material-icon">\n                    <img src="',"innerHTML","49MlusWn","appendChild",'" onerror="this.style.display=\'none\'">\n                </div>\n                <span class="material-name">',"selected","== Choose One ==","remove"];return(_0x5408=function(){return t})()}function displayResults(t,e){const a=_0xad0cc0,n=document[a(487)](a(498));if(!n)return;n[a(506)]="";const c=document[a(492)](a(542));c.className=a(529),c.innerHTML=a(490)+t.icon+'" alt="'+t[a(488)]+a(484)+t[a(488)]+" (x"+t[a(497)]*e+a(525),n.appendChild(c);const o=document[a(492)]("div");o[a(485)]=a(495),o[a(506)]=a(516);const s={...t[a(557)]},r=document[a(551)](a(553)).value;t.choosable&&r&&(s[r]=t.choosable[r]),Object[a(483)](s)[a(489)]((t=>{const n=a,c=materialsData[t];if(c){const a=document.createElement(n(542));a[n(485)]=n(545),a.innerHTML=n(505)+c.icon+n(504)+c[n(539)]+n(509)+c.text+" (x"+s[t]*e+n(491),o.appendChild(a)}})),n[a(508)](o)}function _0x3770(t,e){const a=_0x5408();return(_0x3770=function(t,e){return a[t-=481]})(t,e)}document[_0xad0cc0(551)](_0xad0cc0(556)).addEventListener(_0xad0cc0(555),(function(){const t=_0xad0cc0,e=document.getElementById(t(548));let a=parseInt(e[t(536)],10);isNaN(a)||a<1?(a=1,e[t(536)]=a):a>99&&(a=99,e.value=a);const n=document.getElementById(t(526))[t(536)],c=itemsData[selectedCategory]?.[n];if(!c)return void alert(t(481));const o=document.getElementById(t(503)),s=document[t(551)]("spinner-text");o&&(o[t(524)][t(499)]="block"),s&&(s.style[t(499)]=t(482)),setTimeout((()=>{const e=t;o&&(o.style[e(499)]=e(496)),s&&(s[e(524)][e(499)]="none"),displayResults(c,a)}),2e3)})),document[_0xad0cc0(551)]("reset-btn")[_0xad0cc0(515)](_0xad0cc0(555),(function(){const t=_0xad0cc0;document[t(551)](t(526))[t(506)]="",hideChoosableMaterialsForm(),document[t(551)]("quantity-input")[t(536)]=1,document[t(487)](t(498))[t(506)]="",selectedCategory=null;const e=document.getElementById("category-button")[t(558)]("button");for(const a of e)a[t(519)][t(512)](t(510))}));