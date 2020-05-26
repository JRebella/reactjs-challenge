(this["webpackJsonpoktana-challenge"]=this["webpackJsonpoktana-challenge"]||[]).push([[0],{192:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),c=t.n(l),o=(t(91),t(92),t(198)),i=t(38),s=t(6),u=(t(93),t(75)),m=t(201),d=t(85),E=t(16),f=t(40),p=Object(f.b)({name:"riskSelector",initialState:{value:1},reducers:{setRisk:function(e,a){e.value=a.payload}}}),b=p.actions,v=p.reducer,k=(t(98),Object(s.f)((function(e){for(var a=e.history,t=Object(E.c)((function(e){return e.risk.value})),n=Object(E.b)(),l=[],c=1;c<=10;c++)l.push(r.a.createElement(u.a,{key:c,value:c,size:"lg"},c));return r.a.createElement("div",null,r.a.createElement("h3",null,"Please Select A Risk Level For Your Investment Portfolio"),r.a.createElement("div",{className:"selector-container"},r.a.createElement("div",{className:"selector-title"},r.a.createElement("div",null,"Low"),r.a.createElement("div",null,"High")),r.a.createElement(m.a,{type:"radio",name:"riskLevels",value:t,onChange:function(e){n(b.setRisk(e))}},l),r.a.createElement("div",{className:"progress selector-bar"},r.a.createElement("div",{className:"progress-bar progress-bar-striped",role:"progressbar",style:{width:10*t+"%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})),r.a.createElement(d.a,{variant:"success",onClick:function(){a.push("/reactjs-challenge/customize")}},"Continue to Portfolio Personalization")))}))),h=t(11),g=t(77),y=[{Risk:1,"Bonds %":80,"Large Cap %":20,"Mid Cap %":0,"Foreign %":0,"Small Cap %":0},{Risk:2,"Bonds %":70,"Large Cap %":15,"Mid Cap %":15,"Foreign %":0,"Small Cap %":0},{Risk:3,"Bonds %":60,"Large Cap %":15,"Mid Cap %":15,"Foreign %":10,"Small Cap %":0},{Risk:4,"Bonds %":50,"Large Cap %":20,"Mid Cap %":20,"Foreign %":10,"Small Cap %":0},{Risk:5,"Bonds %":40,"Large Cap %":20,"Mid Cap %":20,"Foreign %":20,"Small Cap %":0},{Risk:6,"Bonds %":35,"Large Cap %":25,"Mid Cap %":5,"Foreign %":30,"Small Cap %":5},{Risk:7,"Bonds %":20,"Large Cap %":25,"Mid Cap %":25,"Foreign %":25,"Small Cap %":5},{Risk:8,"Bonds %":10,"Large Cap %":20,"Mid Cap %":40,"Foreign %":20,"Small Cap %":10},{Risk:9,"Bonds %":5,"Large Cap %":15,"Mid Cap %":40,"Foreign %":25,"Small Cap %":15},{Risk:10,"Bonds %":0,"Large Cap %":5,"Mid Cap %":25,"Foreign %":30,"Small Cap %":40}],C=function(){return y},R=t(51),j=C(),N=function(e){var a=e.selectedRisk;return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(j[0]).map((function(e){return r.a.createElement("th",{key:e,scope:"col"},e)})))),r.a.createElement("tbody",null,j.map((function(e){return r.a.createElement("tr",{key:e.Risk,className:e.Risk===a?"table-primary":""},Object.keys(e).map((function(a){return r.a.createElement("td",{key:a},e[a])})))}))))},F=function(e){var a=e.selectedRisk,t=R.omit(j.find((function(e){return e.Risk===a})),"Risk"),n={labels:Object.keys(t).map((function(e){return e})),datasets:[{data:Object.keys(t).map((function(e){return t[e]})),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#3cba9f","#e8c3b9"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#3cba9f","#e8c3b9"]}]};return r.a.createElement(g.a,{data:n})},O=function(){var e=Object(E.c)((function(e){return e.risk.value})),a=Object(n.useState)(!1),t=Object(h.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",null,l?r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{variant:"outline-secondary",onClick:function(){c(!1)}},"Show Table"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(F,{selectedRisk:e})):r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{variant:"outline-secondary",onClick:function(){c(!0)}},"Show Chart"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N,{selectedRisk:e})))},w=(t(192),t(200)),x=t(196),S=t(79),B=t(199),L=t(82),M=t(80),P=t(197),T=t(81),I=t(84),D=t(17),A=t(51),z=t(51),J=C(),H=0,V=function(e){var a=e.withTitle,t=e.name,n=e.difference,l=e.newDistribution,c=e.registerHandler;return H++,r.a.createElement(M.a,null,r.a.createElement(x.a,null,r.a.createElement(S.a,null,a?r.a.createElement(L.a,null,"Current Investment"):null,r.a.createElement(P.a,null,r.a.createElement(P.a.Prepend,null,r.a.createElement(P.a.Text,{className:"input-addon",id:"basic-addon1"},t)),r.a.createElement(T.a,{tabIndex:H,type:"number",name:t,ref:c,defaultValue:0,min:0}),r.a.createElement(P.a.Append,null,r.a.createElement(P.a.Text,{id:"basic-addon1"},"$")))),r.a.createElement(S.a,null,a?r.a.createElement(L.a,null,"Difference"):null,r.a.createElement(T.a,{className:Number(n)>0?"text-success":n<0?"text-danger":"",readOnly:!0,tabIndex:-1,value:isNaN(n)?"-":n})),r.a.createElement(S.a,null,a?r.a.createElement(L.a,null,"New Investment Amount"):null,r.a.createElement(T.a,{readOnly:!0,className:"text-info",tabIndex:-1,value:isNaN(l)?"-":l}))))},Y=function(e){var a=e.riskData;return r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,Object.keys(a).map((function(e){return r.a.createElement("th",{key:e,scope:"col"},e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,Object.keys(a).map((function(e){return r.a.createElement("td",{key:e},a[e])})))))},$=Object(s.f)((function(e){var a=e.history,t=Object(E.c)((function(e){return e.risk.value})),l=Object(I.a)(),c=l.register,o=l.handleSubmit,i=Object(n.useState)(null),s=Object(h.a)(i,2),u=s[0],m=s[1],f=z.mapKeys(z.omit(J.find((function(e){return e.Risk===t})),"Risk"),(function(e,a){return a.replace("%","").trim()}));return r.a.createElement("div",null,r.a.createElement(d.a,{className:"mb-3",variant:"primary",onClick:function(){a.push("/reactjs-challenge/")}},"Back to risk selection"),r.a.createElement("h3",null,"Personalized Portfolio"),r.a.createElement("h5",null,"Investment Risk Level ",t),r.a.createElement(Y,{riskData:f}),r.a.createElement(w.a,{className:"mt-2"},r.a.createElement(w.a.Header,null,"Rebalance Your Portfolio"),r.a.createElement(w.a.Body,null,r.a.createElement("h6",null,"This tool will help you convert your current investment portfolio into our suggested ideal portfolio. This ideal suggestion is based on your desired risk factor."),r.a.createElement("p",{className:"text-muted text-sm"},"Please fill in your current investments in order to calculate the needed transfers to adapt to your new portfolio"),r.a.createElement(x.a,null,r.a.createElement(S.a,{md:9},r.a.createElement(B.a,{onSubmit:o((function(e){var a=function(e,a){return A.mapValues(a,(function(a){return+Number(a/100*e).toFixed(2)}))}(function(e){return Object.keys(e).reduce((function(a,t){return a+Number(e[t])}),0)}(e),f),t=function(e,a){return A.mapValues(e,(function(e,t){return+(a[t]-e).toFixed(2)}))}(e,a),n=function(e){var a=A.cloneDeep(e),t=[],n=Object.keys(a);return n.forEach((function(e){if(a[e]>0){var r,l=Object(D.a)(n);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(a[c]<0){var o=0;if(a[e]+a[c]>=0?(o=+a[c].toFixed(2),a[e]+=o,a[c]=0):(o=+a[e].toFixed(2),a[c]+=o,a[e]=0),t.push({from:c,to:e,amount:Math.abs(o)}),0===a[e])break}}}catch(i){l.e(i)}finally{l.f()}}})),t}(t);m({difference:t,newDistribution:a,transfers:n})}))},Object.keys(f).map((function(e,a){return r.a.createElement(V,{key:e,withTitle:0===a,name:e,registerHandler:c,difference:u?u.difference[e]:void 0,newDistribution:u?u.newDistribution[e]:void 0})})),r.a.createElement(d.a,{variant:"success",type:"submit"},"Rebalance Your Portfolio"))),r.a.createElement(S.a,null,r.a.createElement(L.a,null,r.a.createElement("strong",null,"Recommended Transfers")),r.a.createElement(w.a,null,r.a.createElement(w.a.Body,null,u?u.transfers.length>0?u.transfers.map((function(e,a){return r.a.createElement("div",{key:a},"Transfer"," ",r.a.createElement("span",{className:"text-success"},e.amount,"$")," ","from ",e.from," to ",e.to,".")})):r.a.createElement("div",null,"It appears your portfolio is already balanced according to your desired risk factor. There are no transactions needed to be done!"):r.a.createElement("div",{className:"text-muted"},"Please enter your current portfolio and click on the button to rebalance in order to see the needed transactions to adapt your portfolio to an ideal one"))))))))}));var W=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},r.a.createElement(o.a,null,r.a.createElement("a",{className:"navbar-brand",href:"https://github.com/JRebella"},"Juan Rebella"),r.a.createElement("div",{className:"text-white"},"Financial Advisor ReactJS Challenge"))),r.a.createElement(o.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/reactjs-challenge/"},r.a.createElement(k,null),r.a.createElement("hr",null),r.a.createElement(O,null)),r.a.createElement(s.a,{path:"/reactjs-challenge/customize"},r.a.createElement($,null))))))},K=Object(f.a)({reducer:{risk:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:K},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,a,t){e.exports=t(195)},91:function(e,a,t){},93:function(e,a,t){},98:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.004acecf.chunk.js.map