(window["webpackJsonpgoit-react-hw-01-components"]=window["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{2:function(t,e,a){t.exports={transactionHistory:"TransactionHistory_transactionHistory__1b1Sq",head:"TransactionHistory_head__2pLKb",type:"TransactionHistory_type__1yjkT",body:"TransactionHistory_body__3ysE0",bodyItem:"TransactionHistory_bodyItem__NFCLg",amount:"TransactionHistory_amount__1fiQg"}},20:function(t,e,a){t.exports=a(39)},38:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),r=a(3),s=a.n(r),c=a(17),i=a(11),l=a(12),u=a(18),m=a(13),p=a(19),d=a(14),_=a.n(d),b=a(8),y=(a(33),a(4)),h=a.n(y),f=function(t){var e=t.inputValue,a=t.handleInput,n=t.handleTransaction;return o.a.createElement("section",{className:h.a.controls},o.a.createElement("input",{type:"number",className:h.a.input,value:e,onChange:a}),o.a.createElement("button",{type:"button",className:h.a.buttonDeposit,name:"Deposit",onClick:n},"Deposit"),o.a.createElement("button",{type:"button",className:h.a.button,name:"Withdrawal",onClick:n},"Withdraw"))},E={outOfMoney:"\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",emptyField:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"},w=function(t,e){return t.filter((function(t){return t.type===e})).reduce((function(t,e){return t+Number(e.amount)}),0)},N=a(7),g=a.n(N),v=function(t){var e=t.transactions;return o.a.createElement("section",{className:g.a.balance},o.a.createElement("span",{role:"img","aria-label":"deposit",className:g.a.arrowUp},"\u2b06\ufe0f",w(e,"Deposit"),"$"),o.a.createElement("span",{role:"img","aria-label":"widthdrawal",className:g.a.arrowDown},"\u2b07\ufe0f",w(e,"Withdrawal"),"$"),o.a.createElement("span",null,"Balance:",w(e,"Deposit")-w(e,"Withdrawal"),"$"))},D=a(2),T=a.n(D),k=function(t){var e=t.transactions;return o.a.createElement("table",{className:T.a.transactionHistory},o.a.createElement("thead",{className:T.a.head},o.a.createElement("tr",null,o.a.createElement("th",{className:T.a.type},"Transaction"),o.a.createElement("th",{className:T.a.amount},"Amount"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",{className:T.a.body},e.map((function(t){return o.a.createElement("tr",{className:T.a.bodyItem,key:t.id},o.a.createElement("td",{className:T.a.type},t.type),o.a.createElement("td",{className:T.a.amount},t.amount,"$"),o.a.createElement("td",null,t.date))}))))},C=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={transactions:[],inputValue:""},a.handleInput=function(t){var e=t.target.value;a.setState({inputValue:e})},a.handleTransaction=function(t){var e=t.target.name,n=a.state,o=n.inputValue,r=n.transactions,s=0===r.length?0:w(r,"Deposit")-w(r,"Withdrawal");if(Number(o)<=0)b.b.error(E.emptyField);else if("Deposit"!==e&&Number(o)>s)b.b.error(E.outOfMoney);else{var i={id:_.a.generate(),type:e,amount:o,date:(new Date).toLocaleString("en-US",{hour12:!1})};a.setState((function(t){return{transactions:[].concat(Object(c.a)(t.transactions),[i])}}))}a.reset()},a.reset=function(){a.setState({inputValue:""})},a}return Object(p.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("transactions"));t&&this.setState({transactions:t})}},{key:"componentDidUpdate",value:function(t){var e=this.state.transactions;e!==t.transactions&&localStorage.setItem("transactions",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.transactions,a=t.inputValue;return o.a.createElement("div",{className:"dashboard"},o.a.createElement(f,{inputValue:a,handleInput:this.handleInput,handleTransaction:this.handleTransaction}),o.a.createElement(v,{transactions:e}),o.a.createElement(k,{transactions:e}),o.a.createElement(b.a,{autoClose:2500,position:"bottom-right"}))}}]),e}(n.Component),S=function(){return o.a.createElement(C,null)};a(38);s.a.render(o.a.createElement(S,null),document.getElementById("root"))},4:function(t,e,a){t.exports={controls:"Controls_controls__P_B_r",input:"Controls_input__2YEyx",button:"Controls_button__2nhzk",buttonDeposit:"Controls_buttonDeposit__2tL0Y Controls_button__2nhzk"}},7:function(t,e,a){t.exports={balance:"Balance_balance__2eXTg",arrowUp:"Balance_arrowUp__6iWRw",arrowDown:"Balance_arrowDown__3UsG-"}}},[[20,1,2]]]);
//# sourceMappingURL=main.47135538.chunk.js.map