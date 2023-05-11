import{r as a,j as e,f as r,g as m,u as g,M as f}from"./index-cbe68948.js";import{S as _}from"./Section-cdddded4.js";function v({pictures:n}){const t=a.useRef(null),c=a.useRef(null),[i,l]=a.useState(0),[s,d]=a.useState(0),u=()=>{t.current&&l(t.current.getBoundingClientRect().width)},p=()=>{s!==n.length-1&&(d(s+1),console.log(s))},x=()=>{s!==0&&(d(s-1),console.log(s))};return a.useEffect(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[]),e.jsxs("div",{className:r.galleryContainer,children:[e.jsxs("div",{className:r.gallery,ref:t,children:[e.jsx("div",{className:r.wrapper,ref:c,style:{marginLeft:`-${i*s}px`},children:n.map(h=>e.jsx("div",{className:r.pictureContainer,style:{width:i},children:e.jsx("img",{src:h.url,loading:"lazy"})}))}),s!==0&&e.jsx("button",{className:r.prev,onClick:x,children:"󰒮"}),s!==n.length-1&&e.jsx("button",{className:r.next,onClick:p,children:"󰒮"}),e.jsx("div",{className:r.navigation,children:n.map((h,j)=>e.jsx("button",{onClick:()=>d(j),className:s===j?r.current:"",children:j+1},h.url))})]}),e.jsx("div",{className:r.pictureDescription,children:n[s].description})]})}function q(n){const t={a:` ### 
#   #
#####
#   #
#   #`,b:`#### 
#   #
#### 
#   #
#### `,c:` ####
#    
#    
#    
 ####`,d:`#### 
#   #
#   #
#   #
#### 
`,e:`#####
#    
#####
#    
#####`,f:`#####
#    
#####
#    
#    `,g:`#####
#    
#  ##
#   #
#####`,h:`#   #
#   #
#####
#   #
#   #`},c=`#####
#   #
#   #
#   #
#####`,i=[];for(let l=0;l<n.length;l++){if(!(n[l]in t)){i.push(c);continue}i.push(t[n[l]])}return i}function y({text:n}){const t=q(n);return e.jsx("div",{className:m.asciiTitle,children:t.map((c,i)=>e.jsx("div",{className:m.char,children:c},i))})}const N="_big_4zqqn_66",b="_red_4zqqn_70",z="_blue_4zqqn_77",C="_project_4zqqn_85",w="_title_4zqqn_85",S="_cover_4zqqn_98",k="_description_4zqqn_112",E="_gallery_4zqqn_115",o={"button-link":"_button-link_4zqqn_55",big:N,red:b,blue:z,project:C,title:w,cover:S,description:k,gallery:E};function L(){const n=g();return e.jsx(f,{children:e.jsxs(_,{className:o.project,promptCommand:"cat *",promptDir:`~/projects/${n.slugId}`,children:[e.jsxs("div",{className:o.title,children:["VK RSS Parser",e.jsx("br",{}),e.jsx(y,{text:"abcdefghijklmnopqrstuvwzyx"})]}),e.jsx("div",{className:o.cover,children:e.jsx("img",{src:n.coverUrl})}),e.jsx("div",{className:o.description,children:n.fullView.description}),e.jsx("div",{className:o.gallery,children:n.fullView.galleryPictures&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Галерея"}),e.jsx(v,{pictures:n.fullView.galleryPictures})]})})]})})}export{L as Project,L as default};
