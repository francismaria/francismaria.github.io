(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(31)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),l=n.n(i),c=(n(15),n(1)),o=n(2),s=n(4),m=n(3),u=n(5),d=n(7),h=(n(16),["profile-container","personal-container","areas-interest-container","portfolio-container","contact-container"]),f=100,p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){e.preventDefault();var t=parseInt(n.props.index),a=document.getElementById(h[t]).offsetTop-f;window.scrollTo({top:a,behavior:"smooth"}),0!==t&&n.props.showMenuMethod()},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.elementID=n.props.id,n.linkElement=document.getElementById(n.elementID),n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){l.a.findDOMNode(this).addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){l.a.findDOMNode(this).removeEventListener("click",this.handleClick)}},{key:"smoothDownScroll",value:function(e,t){var n,a=t;e-=20,n=setInterval(function(){a>=e?clearInterval(n):(a+=4,window.scrollTo(0,a))},2)}},{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("button",{id:this.elementID,className:"link"},this.props.name))}}]),t}(a.Component),E=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={refLinksToggled:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"toggleRefLinks",value:function(){if(!(window.innerWidth>600)){var e=document.getElementById("ref-links"),t=document.getElementById("menuBtn");this.state.refLinksToggled?(t.style.opacity="1",e.style.height="0px"):(t.style.opacity="0.6",e.style.height="170px"),this.setState({refLinksToggled:!this.state.refLinksToggled})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"top-navbar"},r.a.createElement("div",{id:"home-container"},r.a.createElement(p,{id:"Home",index:"0",name:"FM @ Software Developer",showMenuMethod:this.toggleRefLinks.bind(this)}),r.a.createElement("div",{id:"menuBtn",className:"menu-icon",onClick:function(){e.toggleRefLinks()}},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("ul",{id:"ref-links"},r.a.createElement(p,{id:"personal-info-link",index:"1",name:"Personal Info",showMenuMethod:this.toggleRefLinks.bind(this)}),r.a.createElement(p,{id:"interests-link",index:"2",name:"Areas of Interest",showMenuMethod:this.toggleRefLinks.bind(this)}),r.a.createElement(p,{id:"portfolio-link",index:"3",name:"Portfolio",showMenuMethod:this.toggleRefLinks.bind(this)}),r.a.createElement(p,{id:"contact-link",index:"4",name:"Contact",showMenuMethod:this.toggleRefLinks.bind(this)})))}}]),t}(a.Component)),b=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"profile-container"},r.a.createElement("div",{id:"img-container",className:"halfDivision"},r.a.createElement("img",{src:"profile.png",alt:"Profile pic"})),r.a.createElement("div",{id:"nameTitle",className:"halfDivision"},r.a.createElement("p",null,"FRANCISCO"),r.a.createElement("p",null,"MARIA ."),r.a.createElement("div",{id:"mini-container"},r.a.createElement("p",null,"Software Developer. Student @ FEUP."))))}}]),t}(a.Component)),g=(n(19),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return"left"===this.props.side?r.a.createElement("div",{style:{margin:"0.25em 2em 0.25em 0",flex:2,width:"30%",backgroundColor:"#2E6296"},className:"separation-line"}):r.a.createElement("div",{style:{margin:"0.25em 0 0.25em 2em",flex:2,width:"30%",backgroundColor:"#2E6296"},className:"separation-line"})}}]),t}(a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"#2E6296"}})}}]),t}(a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(g,{side:"left"}),r.a.createElement(v,null),r.a.createElement(g,{side:"right"}))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{style:{fontFamily:"Poppins, sans-serif",fontSize:"2em",color:"#08415C"}},this.props.title)}}]),t}(a.Component),k=(n(20),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-elem-container"},r.a.createElement("i",{className:this.props.iconClass}),r.a.createElement("p",null,this.props.text))}}]),t}(a.Component)),y=(n(21),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getCurrentAge",value:function(){var e=new Date(1997,6,29),t=new Date,n=e.getMonth(),a=t.getMonth();if(a===n){var r=e.getDate();return t.getDate()>=r?t.getFullYear()-e.getFullYear():t.getFullYear()-e.getFullYear()-1}return a>n?t.getFullYear()-e.getFullYear():t.getFullYear()-e.getFullYear()-1}},{key:"render",value:function(){var e=this.getCurrentAge()+" Years Old";return r.a.createElement("section",{id:"personal-info-container"},r.a.createElement("div",{className:"info-header"},r.a.createElement("h2",null,"About Me")),r.a.createElement(k,{iconClass:"far fa-address-card",text:"Francisco Maria"}),r.a.createElement(k,{iconClass:"fas fa-birthday-cake",text:e}),r.a.createElement(k,{iconClass:"fas fa-university",text:"Master's Degree in Computer Science  - FEUP (4th Year)"}),r.a.createElement(k,{iconClass:"fas fa-map-marker-alt",text:"Porto, Portugal"}),r.a.createElement(k,{iconClass:"fas fa-football-ball",text:"Rugby, Running, Cycling, Squash and Gym Workout"}),r.a.createElement(k,{iconClass:"far fa-envelope",text:"Click me"}))}}]),t}(a.Component)),C=(n(22),n(23),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"double-skills-container"},r.a.createElement("div",{className:"left-container skill-container"},r.a.createElement("p",null,r.a.createElement("strong",null,this.props.left))),r.a.createElement("div",{className:"right-container skill-container"},r.a.createElement("p",null,r.a.createElement("strong",null,this.props.right))))}}]),t}(a.Component)),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"top-skills-container"},r.a.createElement("div",{className:"info-header"},r.a.createElement("h2",null,"Top Programming Skills")),r.a.createElement("div",{className:"skills-wrap"},r.a.createElement(C,{left:"Java",right:"JavaScript"}),r.a.createElement(C,{left:"SQLite3",right:"C"}),r.a.createElement(C,{left:"C++",right:"Python"}),r.a.createElement(C,{left:"ANTLR4",right:"React"}),r.a.createElement(C,{left:"CSS",right:"NodeJS"})))}}]),t}(a.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"personal-container"},r.a.createElement(j,{title:"Personal Information"}),r.a.createElement(O,null),r.a.createElement("section",{id:"content-container"},r.a.createElement(y,null),r.a.createElement(w,null)))}}]),t}(a.Component),S=(n(24),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this))).interest=parseInt(e.interest),n.area=e.name,n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"buildStrokeDasharray",value:function(){var e=100-this.interest;return this.interest.toString()+" "+e.toString()}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid-element"},r.a.createElement("svg",{width:"80%",height:"80%",viewBox:"0 0 42 42",className:"donut"},r.a.createElement("circle",{className:"donut-hole",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent"}),r.a.createElement("circle",{className:"donut-ring",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"#FE5F55",strokeWidth:"2"}),r.a.createElement("circle",{className:"donut-segment",cx:"21",cy:"21",r:"15.91549430918954",fill:"transparent",stroke:"#2E6296",strokeWidth:"2",strokeDasharray:this.buildStrokeDasharray(),strokeDashoffset:"25"}),r.a.createElement("text",{x:"42",y:"42",transform:"scale(0.5, 0.5)",textAnchor:"middle",stroke:"#d1d1d1",strokeWidth:"2px",dy:".3em"},this.interest,"%")),r.a.createElement("h3",null,this.area))}}]),t}(a.Component)),M=(n(25),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"areas-interest-container"},r.a.createElement(j,{title:"Areas Of Interest"}),r.a.createElement(O,null),r.a.createElement("div",{className:"grid-container"},r.a.createElement(S,{name:"Network Security",interest:"95"}),r.a.createElement(S,{name:"Software Security",interest:"100"}),r.a.createElement(S,{name:"Web Development",interest:"90"}),r.a.createElement(S,{name:"Distributed Systems",interest:"85"}),r.a.createElement(S,{name:"Compilers",interest:"85"}),r.a.createElement(S,{name:"Operating Systems",interest:"80"})))}}]),t}(a.Component)),x=(n(26),n(27),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return e="active"===this.props.status?"Active":"Finished",r.a.createElement("section",{className:"project-container"},r.a.createElement("div",{className:"date-container"},r.a.createElement("i",{className:"far fa-calendar-alt"}),r.a.createElement("p",null,r.a.createElement("strong",null,this.props.date))),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"text-container"},r.a.createElement("h3",null,this.props.title),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,r.a.createElement("strong",null,"Description:")),r.a.createElement("p",null,this.props.description)),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,r.a.createElement("strong",null,"Languages / Technologies:")),r.a.createElement("p",null,this.props.languages)),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,r.a.createElement("strong",null,"Status:")),r.a.createElement("p",null,e))),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:this.props.imgPath,alt:"Project logo"}))))}}]),t}(a.Component)),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio-container"},r.a.createElement(j,{title:"Portfolio"}),r.a.createElement(O,null),r.a.createElement(x,{title:"INESC-TEC Network Security Scolarship",date:"15th June, 2019",description:"Consists on defining the behaviour of the communications between IoT devices, which use the publish-subscribe communication pattern, in ROS (Robot Operating Systems) environments, encompassing normal and intrusive traffic. This characterization of the behaviour between IoT systems/devices is a crucial feature for today's communication security.",languages:"ROS + Python",status:"active",imgPath:"/images/projects/inesc-tec_logo.png"}))}}]),t}(a.Component),I=(n(28),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).toggleEmail=function(t){var n=document.getElementById("email-container");e.state.mailVisible?(n.innerHTML="SHOW ME THE EMAIL",e.setState({mailVisible:!1})):(n.innerHTML="franciscomaria97@hotmail.com",e.setState({mailVisible:!0}))},e.state={mailVisible:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("email-container");l.a.findDOMNode(e).addEventListener("click",this.toggleEmail)}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("email-container");l.a.findDOMNode(e).removeEventListener("click",this.toggleEmail)}},{key:"render",value:function(){return r.a.createElement("section",{id:"contact-container"},r.a.createElement(j,{title:"Contact"}),r.a.createElement(O,null),r.a.createElement("p",null,"For any questions, proposals or if you just want to get in touch with me, please send an email to my personal email address. I'll get back to you as soon as possible."),r.a.createElement("button",{id:"email-container"},"SHOW ME THE EMAIL"))}}]),t}(a.Component)),L=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"This website was created by me using the ",r.a.createElement("a",{href:"https://reactjs.org/"},r.a.createElement("u",null,"React"))," framework."),r.a.createElement("p",null,"\xa9 ",r.a.createElement("a",{href:"https://github.com/francismaria"},r.a.createElement("u",null,"francismaria")),", ",e),r.a.createElement("div",{id:"social-icons"},r.a.createElement("a",{href:"https://github.com/francismaria"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/francismaria/"},r.a.createElement("i",{className:"fab fa-linkedin"}))))}}]),t}(a.Component));n(30);var T=function(){return r.a.createElement("div",{id:"general-container"},r.a.createElement(E,null),r.a.createElement(b,null),r.a.createElement(N,null),r.a.createElement(M,null),r.a.createElement(D,null),r.a.createElement(I,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.c734d024.chunk.js.map