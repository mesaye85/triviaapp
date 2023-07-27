(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{4951:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/QuestionProcessor",function(){return n(8136)}])},4576:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(7294),s=n(6154);t.default=e=>{let{onQuestionFetched:t}=e,[n,o]=(0,r.useState)(null);return((0,r.useEffect)(()=>{let e=async()=>{try{let e=await s.Z.post("https://api.openai.com/v1/engines/davinci-codex/completions",{prompt:"Create a trivia question about science with multiple choice answers.",max_tokens:100},{headers:{Authorization:"Bearer YOUR_OPEN_AI_KEY"}}),n=e.data.choices[0].text.trim(),[i,...r]=n.split("\n"),o={text:i,options:r.map(e=>e.slice(3))};t(o)}catch(e){console.error(e),o("Failed to fetch question from GPT-3 API.")}};e()},[t]),n)?(0,i.jsxs)("div",{children:["Error: ",n]}):(0,i.jsx)("div",{children:"Loading question..."})}},8136:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(7294),s=n(6154),o=n(4576);t.default=e=>{let{category:t,onGameOver:n}=e,[l,a]=(0,r.useState)([]),[c,u]=(0,r.useState)(null),[h,d]=(0,r.useState)(20),[f,p]=(0,r.useState)(0),[x,v]=(0,r.useState)(null),[j,_]=(0,r.useState)(null),[g,E]=(0,r.useState)(!1);function m(e){v(e.target.value),e.target.value===c.correctOption?(p(e=>e+100),function(){let e=l.findIndex(e=>e.id===c.id);if(e>=l.length-1)E(!0);else{let t=l[e+1];v(null),u(t)}}()):n(f)}if((0,r.useEffect)(()=>{"ChatGPT"!==t&&s.Z.get("/api/questions/".concat(t)).then(e=>{let t=function(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}(e.data);if(!t.length){_("No questions available for this category");return}a(t),u(t[0])}).catch(e=>{console.error("Error fetching questions:",e),_("Error fetching questions")})},[t]),(0,r.useEffect)(()=>{if(c){d(20);let e=setInterval(()=>{d(t=>(t<=0&&(clearInterval(e),n(f)),t-1))},1e3);return()=>clearInterval(e)}},[c,n,f]),j)return(0,i.jsxs)("div",{children:["Error: ",j]});if("ChatGPT"===t&&!c)return(0,i.jsx)(o.default,{onQuestionFetched:function(e){a([e]),u(e)}});if(g)return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Congratulations! You have answered all questions."}),(0,i.jsxs)("p",{children:["Your final score is: ",f]}),(0,i.jsx)("button",{onClick:()=>{v(null),u(l[0]),p(0),E(!1)},children:"Play Again"}),(0,i.jsx)("button",{onClick:w,children:"Exit"})]});let w=()=>{n(f)};return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:null==c?void 0:c.question}),(0,i.jsxs)("p",{children:["Time remaining: ",h," seconds"]}),c&&Object.entries(c.options).map(e=>{let[t,n]=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"radio",id:t,name:"option",value:t,checked:x===t,onChange:m}),(0,i.jsx)("label",{htmlFor:t,children:"".concat(t,": ").concat(n)})]},t)}),(0,i.jsxs)("p",{children:["Score: ",f]})]})}}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=4951)}),_N_E=e.O()}]);