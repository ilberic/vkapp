(this.webpackJsonpvkapp=this.webpackJsonpvkapp||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(12),r=n.n(i),u=n(2),c=n(3),o=n(5),l=n(4),m=(n(20),n(21),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.questionAnswers.map((function(t){return s.a.createElement("div",{className:"question__wrapper-answers_item",onClick:function(){e.props.setChange(t)}.bind(e)},s.a.createElement("div",{className:"question__wrapper-answers_item-checkbox  ".concat(e.props.questionChanged===t?"active":"")}),s.a.createElement("span",null,t))}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"question__wrapper-answers"},t))}}]),n}(a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.questionState.questions.map((function(t){return s.a.createElement("span",{className:"question__wrapper"},s.a.createElement("span",{className:"question__wrapper-title"},t.questionTitle),s.a.createElement(m,{setChange:function(n){e.props.setChange(t.questionTitle,n)}.bind(e),questionChanged:t.changed,questionAnswers:t.questionAnswers}))}));return s.a.createElement("div",{className:"wrapper"},t)}}]),n}(a.Component),h=(n(22),n(23),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.changed.map((function(e){return"".concat(e.name,": ").concat(e.changed)}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{name:"source",type:"hidden",value:"\u041e\u043f\u0440\u043e\u0441 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"}),s.a.createElement("input",{type:"hidden",value:e,name:"comments"}),s.a.createElement("input",{type:"hidden",value:this.props.number,name:"comments"}))}}]),n}(a.Component)),d=n(14),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={questions:[{name:"\u0424\u043e\u0440\u043c\u0430",questionTitle:"\u041a\u0430\u043a\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u0431\u0443\u0434\u0435\u0442 \u0432\u0430\u0448\u0430 \u043a\u0443\u0445\u043d\u044f?",questionAnswers:["\u0423\u0433\u043b\u043e\u0432\u0430\u044f","\u041f\u0440\u044f\u043c\u0430\u044f","\u0421 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u043c","\u041f-\u043e\u0431\u0440\u0430\u0437\u043d\u0430\u044f"],changed:"\u0423\u0433\u043b\u043e\u0432\u0430\u044f"},{name:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",questionTitle:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u0443\u0445\u043d\u0438:",questionAnswers:["\u041b\u0414\u0421\u041f","\u041c\u0414\u0424","\u041f\u043b\u0430\u0441\u0442\u0438\u043a","\u041d\u0443\u0436\u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f"],changed:"\u041b\u0414\u0421\u041f"},{name:"\u0424\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u0430",questionTitle:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0444\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u044b:",questionAnswers:["\u042d\u043a\u043e\u043d\u043e\u043c","\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442","\u041f\u0440\u0435\u043c\u0438\u0443\u043c","\u041d\u0443\u0436\u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f"],changed:"\u042d\u043a\u043e\u043d\u043e\u043c"},{name:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",questionTitle:"\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430:",questionAnswers:["\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f","\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u043e\u044f\u0449\u0430\u044f","\u041d\u0443\u0436\u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f"],changed:"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f"},{name:"\u041f\u043e\u043a\u0443\u043f\u043a\u0430",questionTitle:"\u041a\u043e\u0433\u0434\u0430 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0443:",questionAnswers:["\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435","\u0412 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 3-\u0445 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u0412 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 6-\u0442\u0438 \u043c\u0435\u0441\u044f\u0446\u0435\u0432","\u041f\u0440\u043e\u0441\u0442\u043e \u0445\u043e\u0447\u0443 \u0443\u0437\u043d\u0430\u0442\u044c \u0446\u0435\u043d\u0443"],changed:"\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435"},{name:"\u041e\u043f\u043b\u0430\u0442\u0430",questionTitle:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043e\u043f\u043b\u0430\u0442\u044b:",questionAnswers:["\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0451\u0442","\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043f\u043b\u0430\u0442\u044b 0%"],changed:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0441\u0447\u0451\u0442"},{name:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430",questionTitle:"\u041a\u0443\u0434\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u043c \u0440\u0430\u0441\u0447\u0435\u0442:",questionAnswers:["SMS","WhatsApp","Telegram","Viber","\u0417\u0432\u043e\u043d\u043e\u043a \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"],changed:"SMS"}],text:""},a}return Object(c.a)(n,[{key:"setChange",value:function(e,t){var n=this.state.questions.map((function(n){return n.questionTitle===e?{questionTitle:n.questionTitle,questionAnswers:n.questionAnswers,changed:t}:{questionTitle:n.questionTitle,questionAnswers:n.questionAnswers,changed:n.changed}}));this.setState((function(){return{questions:n}}))}},{key:"onInputTextChange",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){window.state=this.state;var e=this.state.questions.map((function(e){return{changed:e.changed,name:e.name}}));return s.a.createElement(d.a,null,s.a.createElement("div",{className:"container"},s.a.createElement("span",{className:"title"},"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043a\u0443\u0445\u043d\u0438 \u0441\u0432\u043e\u0435\u0439 \u043c\u0435\u0447\u0442\u044b"),s.a.createElement(p,{setChange:this.setChange.bind(this),questionState:this.state}),s.a.createElement("div",{id:"number__wrapper"},s.a.createElement("span",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440:"),s.a.createElement("input",{onChange:this.onInputTextChange.bind(this),type:"text",value:this.state.text,id:"number"})),s.a.createElement("form",{action:"send.php",method:"POST"},s.a.createElement("button",{type:"submit",className:"btn"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443!"),s.a.createElement(h,{number:this.state.text,changed:e}))))}}]),n}(a.Component);r.a.render(s.a.createElement(q,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.11daffb5.chunk.js.map