(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),l=(n(15),n(6)),u=n(1),i=n(5),s=n(9),m=function(e){var t=e.onCreateHandler,n=e.contacts,r=Object(a.useState)({name:"",number:""}),o=Object(i.a)(r,2),l=o[0],m=o[1];return c.a.createElement("form",{id:"contact-creation-form",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("label",null,"Name",c.a.createElement("input",{value:l.name,onChange:function(e){return m((function(t){return Object(u.a)(Object(u.a)({},t),{},{name:e.target.value})}))},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})),c.a.createElement("label",null,"Number",c.a.createElement("input",{value:l.number,onChange:function(e){return m((function(t){return Object(u.a)(Object(u.a)({},t),{},{number:e.target.value})}))},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})),c.a.createElement("button",{onClick:function(){var e=Object(u.a)({},l);e.id=Object(s.a)();var a=n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));return a?alert("".concat(a.name," is already in contacts.")):l.name&&l.number?(m({name:"",number:""}),void t(e)):alert("Enter name and number!")}},"Add contact"))},d=function(e){var t=e.value,n=e.onChangeHandler;return c.a.createElement("div",null,c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{type:"text",name:"filter",value:t,onChange:n})))},b=n(4),f=n.n(b),p=function(e){var t=e.id,n=e.idx,a=e.name,r=e.number,o=e.deleteHandler;return c.a.createElement("li",{className:f.a.contact},n+1,". ",a,": ",r,c.a.createElement("button",{onClick:function(){return o(t)}},"Delete"))},E=function(e){var t=e.contacts,n=e.deleteHandler;return c.a.createElement("div",null,c.a.createElement("ul",{className:f.a.contactList},t&&t.length?t.map((function(e,t){var a=e.id,r=e.name,o=e.number;return c.a.createElement(p,{key:a,id:a,idx:t,name:r,number:o,deleteHandler:n})})):c.a.createElement("p",null,"Contacts not found!")))};var h=function(){var e=Object(a.useState)({contacts:[],filter:""}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=e?JSON.parse(e):null;t&&r((function(e){return Object(u.a)(Object(u.a)({},e),{},{contacts:Object(l.a)(t)})}))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n.contacts))}),[n.contacts]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(m,{onCreateHandler:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:[].concat(Object(l.a)(t.contacts),[e])})}))},contacts:n.contacts}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(d,{value:n.filter,onChangeHandler:function(e){r((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:e.target.value})}))}}),c.a.createElement(E,{contacts:n.contacts.filter((function(e){return e.name.toLowerCase().includes(n.filter.toLowerCase())})),deleteHandler:function(e){var t=n.contacts.filter((function(t){return t.id!==e}));r((function(e){return Object(u.a)(Object(u.a)({},e),{},{contacts:Object(l.a)(t)})}))}}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))},4:function(e,t,n){e.exports={contactList:"ContactList_contactList__aqknG",contact:"ContactList_contact__200RK"}}},[[10,1,2]]]);
//# sourceMappingURL=main.fe69eeb1.chunk.js.map