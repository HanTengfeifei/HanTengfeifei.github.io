"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},s="Intro",i={unversionedId:"intro",id:"intro",title:"Intro",description:"swapchat-js is a small sdk that allows you to use swapchat more quickly",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/button-sdk-documentation/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"SwapChat-SDK",permalink:"/button-sdk-documentation/docs/Tutorial/SwapChat-SDK"}},p={},l=[{value:"Installation",id:"installation",level:2},{value:"Using swapchat-js in react",id:"using-swapchat-js-in-react",level:2},{value:"Twitter 1v1 chat",id:"twitter-1v1-chat",level:4},{value:"Group chat with Twitter space",id:"group-chat-with-twitter-space",level:4},{value:"Opensea 1v1 chat",id:"opensea-1v1-chat",level:4},{value:"Group chat with opensea collection",id:"group-chat-with-opensea-collection",level:4},{value:"Opensea nft item create thread chat",id:"opensea-nft-item-create-thread-chat",level:4},{value:"Discord 1v1 chat",id:"discord-1v1-chat",level:4},{value:"Using swapchat-js in vue",id:"using-swapchat-js-in-vue",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"swapchat-js is a small sdk that allows you to use swapchat more quickly"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can install and experience swapchat in chrome first"),(0,o.kt)("p",{parentName:"blockquote"},"Downloads: ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail"},"https://chrome.google.com/webstore/detail")),(0,o.kt)("br",null),"/swapchat/cljogniamdljbpeapjdbdigbjmipfpgh"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"npm i swap-chat-js "),(0,o.kt)("p",{parentName:"blockquote"},"or\nyarn add swap-chat-js"),(0,o.kt)("hr",{parentName:"blockquote"}),(0,o.kt)("p",{parentName:"blockquote"},"Methods\nMethods|Description\n------- |:---------:|\nconstructor(dom1,dom2,optionsObj,paramsObj)|The method to create a SwapChatSdk instance accepts four parameters|\nexect()|After creating a SwapChatSdk instance, call the exect method of the instance without passing any parameters |"),(0,o.kt)("hr",{parentName:"blockquote"}),(0,o.kt)("p",{parentName:"blockquote"},"Parameters of constructor\nParameter|Description|Required\n------- |:---------:|:-----\n|dom1|This dom1 is the first parameter of constructor and must be a real dom element. It will act as a container for the button that triggers the chat window|yes\n|dom2 |This dom2 is the second parameter of constructor and must be a real dom element. It will act as a container for the chat window|yes\n|options |This options is the third parameter of constructor, which is an ordinary object. His width and height properties are number type and will control the width and height of the chat window|no\n|params |This params is the fourth parameter of the constructor, which is an ordinary object. including six properties,see the following table for specific usage details|yes"),(0,o.kt)("hr",{parentName:"blockquote"}),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the params parameter object\nProperties|Type|Value|Default|Description|Required\n---|:----:|:----:|:-----:|:-----:|:---------:|\n|platform|string|twitter,",(0,o.kt)("br",null),"discord,",(0,o.kt)("br",null),"opensea,",(0,o.kt)("br",null),"swapchat|swapchat|The platform ",(0,o.kt)("br",null)," that will use",(0,o.kt)("br",null),"the sdk, ",(0,o.kt)("br",null)," currently supports ",(0,o.kt)("br",null)," twitter, ",(0,o.kt)("br",null),"discord, ",(0,o.kt)("br",null),"opensea, ",(0,o.kt)("br",null),"swapchat|no\n|type |string|single,",(0,o.kt)("br",null),"group,",(0,o.kt)("br",null),"thread|single|The way of",(0,o.kt)("br",null),"using sdk,",(0,o.kt)("br",null)," currently supports",(0,o.kt)("br",null)," single,",(0,o.kt)("br",null)," group,",(0,o.kt)("br",null)," thread|no\n|room_payload|object|{}|Parameters required to create room_id|For",(0,o.kt)("br",null)," different platforms",(0,o.kt)("br",null)," and different ways",(0,o.kt)("br",null)," of calling up",(0,o.kt)("br",null)," the chat window,",(0,o.kt)("br",null)," you need to",(0,o.kt)("br",null)," set the",(0,o.kt)("br",null),"corresponding parameters|If the value of the room_id attribute is set, room_payload does not need to be set. If room_id is not set, then room_payload is required\n|room_id |string|Generate ",(0,o.kt)("br",null),"a room_id",(0,o.kt)("br",null)," according to ",(0,o.kt)("br",null),"the official ",(0,o.kt)("br",null),"api documentation|none|room_id corresponding to the chat room|If the value of the room_payload property is set, room_id does not need to be set. If room_payload is not set, then room_id is required\n|login_payload|object|{signature,",(0,o.kt)("br",null),"wallet_address,",(0,o.kt)("br",null),"login_random_secret,",(0,o.kt)("br",null),"user_avatar}|{}|Login parameters",(0,o.kt)("br",null)," that need ",(0,o.kt)("br",null),"to be set|If the value of the access_token attribute is set, the login_payload does not need to be set. If the access_token is not set, then the login_payload is required.\n|access_token |string|Generate a",(0,o.kt)("br",null)," access_token ",(0,o.kt)("br",null),"according to ",(0,o.kt)("br",null),"the official",(0,o.kt)("br",null)," api documentation|none|access_token corresponding to the login user|If the value of the login_payload property is set, access_token does not need to be set. If login_payload is not set, then access_token is required"),(0,o.kt)("hr",{parentName:"blockquote"}),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the login_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|signature|string|Generate a signature according to the official api documentation|none|The signature of the currently logged in user|yes\n|wallet_address |string|Generate a wallet_address according to the official api documentation|none|The address of the currently logged in user|yes\n|login_random_secret|string|Generate a login_random_secret according to the official api documentation|none|none|yes\n|user_avatar |string|none|none|User avatar address|no"),(0,o.kt)("hr",{parentName:"blockquote"}),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-opensea-and-the-type-is-thread"},"When platform is opensea and the type is thread"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|opensea_coll_slug|string|none|none|none|yes\n|opensea_item_token_id |string|none|none|none|yes\n|opensea_item_contract_address|string|none|none|none|yes\n|chain_name |string|none|none|User avatar address|yes"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-swapchat-and-the-type-is-thread"},"When platform is swapchat and the type is thread"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|room_id|string|none|none|none|yes\n|msg_id |string|none|none|none|yes"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-swapchat-and-the-type-is-single"},"When platform is swapchat and the type is single"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|user_id|string|none|none|user_id of the user to chat|yes\n|user_name |string|none|none|user_name of the user to chat|none\n|user_avatar |string|none|none|user_avatar of the user to chat\uff5cno"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-opensea-and-the-type-is-single"},"When platform is opensea and the type is single"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|user_name |string|none|none|user_name of the user to chat|yes\n|user_avatar |string|none|none|user_avatar of the user to chat\uff5cno"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-discord-and-the-type-is-single"},"When platform is discord and the type is single"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|user_id|string|none|none|user_id of the user to chat|yes\n|user_name |string|none|none|user_name of the user to chat|yes"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-twitter-and-the-type-is-single"},"When platform is twitter and the type is single"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|user_name |string|none|none|user_name of the user to chat|yes\n|user_avatar |string|none|none|user_avatar of the user to chat\uff5cno"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-swapchat-and-the-type-is-group"},"When platform is swapChat and the type is group"),(0,o.kt)("p",{parentName:"blockquote"},"Not currently supported"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-opensea-and-the-type-is-group"},"When platform is opensea and the type is group"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|collection_name |string|none|none|collection_name of the ollection to chat|yes"),(0,o.kt)("h2",{parentName:"blockquote",id:"when-platform-is-twitter-and-the-type-is-group"},"When platform is twitter and the type is group"),(0,o.kt)("p",{parentName:"blockquote"},"Properties for the room_payload parameter object\nProperties|Type|Value|Default|Description|Required\n------- |:---------:|:---------:|:---------:|:---------:|:---------:|\n|space_id |string|none|none|space_id of the space to chat|yes\n|space_title |string|none|none|collection_name of the ollection to chat|no"),(0,o.kt)("h2",{parentName:"blockquote",id:"usage"},"Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import SwapChatSdk from 'swap-chat-js';\n\n// You need to create an instance of SwapChatSdk Pass in two dom elements as parameters.\n// The first element is the trigger that brings up the element and the second element is the slot container for the chat tool\nconst SwapChatSdkStance = new SwapChatSdk({\n    dom1,\n    dom2\n    {width:400,height:600},{\n      platform:'twitter',\n      type:'single',\n      room_payload:{\n        user_name:'yihang1314'\n      }\n    }\n  }\n    );\n//  Methods requiring calls to instances instance.exect()\nSwapChatSdkStance.exect()\n")),(0,o.kt)("h2",{id:"using-swapchat-js-in-react"},"Using swapchat-js in react"),(0,o.kt)("h4",{id:"twitter-1v1-chat"},"Twitter 1v1 chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  platform: "twitter",\n  type: "single",\n  room_payload: {\n    user_name: "SwapChatNFT",\n    user_avatar:\n      "https://pbs.twimg.com/profile_images/1506560330876731393/tLk4jXKq_400x400.jpg",\n  },\n};\n')),(0,o.kt)("h4",{id:"group-chat-with-twitter-space"},"Group chat with Twitter space"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const params = {\n      platform: 'twitter',\n      type: 'group',\n      room_payload: {\n        space_id: '1BdxYwElXVoGX',\n        space_title: '\u6d4b\u8bd53',\n      },\n    };\n")),(0,o.kt)("h4",{id:"opensea-1v1-chat"},"Opensea 1v1 chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const params = {\n      platform: 'opensea',\n      type: 'single',\n      room_payload: {\n        user_name: 'king250',\n      },\n    };\n")),(0,o.kt)("h4",{id:"group-chat-with-opensea-collection"},"Group chat with opensea collection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const params = {\n      platform: 'opensea',\n      type: 'group',\n      room_payload: {\n        collection_name: 'founders-coins',\n      },\n    };\n")),(0,o.kt)("h4",{id:"opensea-nft-item-create-thread-chat"},"Opensea nft item create thread chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const params = {\n      platform: 'opensea',\n      type: 'thread',\n      room_payload: {\n        opensea_coll_slug: 'yoloholiday',\n        opensea_item_token_id: '4096',\n        opensea_item_contract_address:\n          '0xb5643598496b159263c67bd0d25728713f5aad04',\n        chain_name: 'ethereum',\n      },\n    };\n")),(0,o.kt)("h4",{id:"discord-1v1-chat"},"Discord 1v1 chat"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const params = {\n      platform: 'discord',\n      type: 'single',\n      room_payload: {\n        user_name: '\u65b9\u5ead',\n        user_id: '3162',\n      },\n    };\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import SwapChatSdk from 'swap-chat-js';\nimport react, { useEffect, useRef } from \"react\";\nfunction App() {\n  const buttonRef = useRef();\n  const containRef = useRef();\n  useEffect(() => {\n    const params = {\n      platform:'twitter',\n      type:'group',\n      room_payload:{\n          // user_name:'yihang1314'\n         space_id: '1MYxNnoyanwxw',\n      }\n    };\n    const SwapChatSdkStance = new SwapChatSdk(\n      buttonRef.current,\n      containRef.current,\n      {\n        width:400,\n        height:600,\n      },\n       { ...params }\n    );\n    SwapChatSdkStance.exect();\n  }, []);\n  return (\n    <div className=\"App\">\n      <button ref={buttonRef}>swapChat</button>\n      <div ref={containRef}></div>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("h2",{id:"using-swapchat-js-in-vue"},"Using swapchat-js in vue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <div class=\"hello\">\n    <button ref=\"button\"></button>\n    <div ref=\"container\">\n    </div>\n  </div>\n</template>\n<script>\nimport { getCurrentInstance} from 'vue';\nimport SwapChatSdk from 'swap-chat-js'\nexport default {\n  name: 'HelloWorld',\n  props: {\n    msg: String\n  },\n  mounted() {\n    const instance = getCurrentInstance()\n     const SwapChatSdkStance = new SwapChatSdk(\n      instance.refs.button,\n      instance.refs.container,\n      {\n        width: 400,\n        height: 600\n        },\n      {\n      platform:'discord',\n      type:'single',\n      room_payload:{\n          user_name:'\u65b9\u5ead#3162'\n        //  space_id: '1MYxNnoyanwxw',\n      }\n    }\n    );\n    SwapChatSdkStance.exect();\n  }\n}\n<\/script>\n")))}u.isMDXComponent=!0}}]);