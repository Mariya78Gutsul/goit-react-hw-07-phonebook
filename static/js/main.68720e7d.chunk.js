(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={list:"ContactList_list__1o0Zr",item:"ContactList_item__10kz_",TaskList_text:"ContactList_TaskList_text__6Ql-P",button:"ContactList_button__2I4uz"}},57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(14),u=n.n(a),o=n(9),i=n(16),s=n(3),l=n(2),b=n(6),f=n(30),j={addContact:Object(s.b)("contact/add",(function(t,e){return{payload:{id:Object(f.a)(3),name:t,number:e}}})),deleteContact:Object(s.b)("contact/delete"),changeFilter:Object(s.b)("contact/changeFilter"),getContacts:Object(s.b)("contact/get")},p=n(7),d=n(4),O=n.n(d),m=n(11),h=n.n(m);function v(){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return _.apply(this,arguments)}function _(){return(_=Object(p.a)(O.a.mark((function t(e){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(O.a.mark((function t(e){var n,r,c,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,r=e.number,t.next=3,h.a.post("/contacts",{name:n,number:r});case 3:return c=t.sent,a=c.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}h.a.defaults.baseURL="https://61c4d1aff1af4a0017d997fd.mockapi.io";var w,k,L,F=Object(s.c)("contacts/fetchContacts",function(){var t=Object(p.a)(O.a.mark((function t(e,n){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,v();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(s.c)("contacts/deleteContacts",function(){var t=Object(p.a)(O.a.mark((function t(e,n){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,C(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),S=Object(s.c)("contacts/createContacts",function(){var t=Object(p.a)(O.a.mark((function t(e,n){var r,c,a,u;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,c=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,g({name:r,number:c});case 5:return u=t.sent,t.abrupt("return",u);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),R=Object(s.d)([],(w={},Object(l.a)(w,F.fulfilled,(function(t,e){return e.payload})),Object(l.a)(w,S.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(l.a)(w,N.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),T=Object(s.d)(!1,(k={},Object(l.a)(k,F.pending,(function(){return!0})),Object(l.a)(k,F.fulfilled,(function(){return!1})),Object(l.a)(k,F.rejected,(function(){return!1})),Object(l.a)(k,S.pending,(function(){return!0})),Object(l.a)(k,S.fulfilled,(function(){return!1})),Object(l.a)(k,S.rejected,(function(){return!1})),Object(l.a)(k,N.pending,(function(){return!0})),Object(l.a)(k,N.fulfilled,(function(){return!1})),Object(l.a)(k,N.rejected,(function(){return!1})),k)),V=Object(s.d)(null,(L={},Object(l.a)(L,F.rejected,(function(t,e){return e.payload})),Object(l.a)(L,F.pending,(function(){return null})),Object(l.a)(L,S.rejected,(function(t,e){return e.payload})),Object(l.a)(L,S.pending,(function(){return null})),Object(l.a)(L,N.rejected,(function(t,e){return e.payload})),Object(l.a)(L,N.pending,(function(){return null})),L)),W=Object(s.d)("",Object(l.a)({},j.changeFilter,(function(t,e){return e.payload}))),I=Object(b.b)({items:R,filter:W,isLoading:T,error:V}),J=Object(s.a)({reducer:{contacts:I},devTools:!1,middleware:function(t){return Object(i.a)(t())}}),P=(n(57),n(19)),z=n.n(P),A=n(1),E=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(A.jsx)("ul",{className:z.a.list,children:e.map((function(t){return Object(A.jsxs)("li",{className:z.a.item,children:[Object(A.jsxs)("p",{children:[t.name,": ",t.number]}),Object(A.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})};function B(t){var e=t.filter,n=t.onChangeFilter;return Object(A.jsxs)("div",{children:["Find contacts by name",Object(A.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})}var D=n(20),G=n(8),M=n.n(G);function Q(t){var e=t.onSubmit,n=Object(r.useState)(""),c=Object(D.a)(n,2),a=c[0],u=c[1],o=Object(r.useState)(""),i=Object(D.a)(o,2),s=i[0],l=i[1],b=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":u(r);break;case"number":l(r);break;default:return}};return Object(A.jsxs)("form",{className:M.a.list,onSubmit:function(t){t.preventDefault(),e(a,s),u(""),l("")},children:[Object(A.jsxs)("label",{className:M.a.label,children:["Name",Object(A.jsx)("input",{className:M.a.input,type:"text",name:"name",value:a,onChange:b})]}),Object(A.jsxs)("label",{className:M.a.label,children:["Number",Object(A.jsx)("input",{className:M.a.input,type:"text",name:"number",value:s,onChange:b})]}),Object(A.jsx)("button",{className:M.a.button,type:"submit",children:"Add contact"})]})}var U=function(t){return t.contacts.filter},X=function(t){var e=function(t){return t.contacts.items}(t),n=U(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))};function Y(){var t=Object(o.b)(),e=Object(o.c)(U),n=Object(o.c)(X);Object(r.useEffect)((function(){!function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(V){return null}}("contacts",n)}),[n]);return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(Q,{onSubmit:function(e,n){t(j.addContact(e,n))}}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(B,{filter:e,onChangeFilter:function(e){t(j.changeFilter(e.currentTarget.value))}}),Object(A.jsx)(E,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),onRemoveContact:function(e){t(j.deleteContact(e))}})]})}u.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(o.a,{store:J,children:Object(A.jsx)(Y,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactForm_list__RuXRV",label:"ContactForm_label__36r0G",input:"ContactForm_input__PeW9Y",button:"ContactForm_button__1vwA_"}}},[[59,1,2]]]);
//# sourceMappingURL=main.68720e7d.chunk.js.map