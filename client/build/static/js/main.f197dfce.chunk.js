(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/showcase.9b63113b.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/open-laptop.0abf3b75.jpg"},50:function(e,t,a){e.exports=a(90)},78:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),i=a.n(l),o=a(2),s=a(3),c=a(5),m=a(4),u=a(6),d=a(19),h=a.n(d),p=a(10),E=a.n(p),b=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},v=function(e){return function(t){E.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),b(a);var n=h()(a);t(f(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}},f=function(e){return{type:"SET_CURRENT_USER",payload:e}},g=function(){return function(e){localStorage.removeItem("jwtToken"),b(!1),e(f({}))}},y=a(7),O=a(17),N=a(46),j=a(16),C=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},w={isAuthenticated:!1,user:{}},k={},S={profile:null,profiles:null,loading:!1},R={zones:null},T=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(j.a)({},e,{isAuthenticated:!C(t.payload),role:C(t.payload)?null:t.payload.auth.role,user:t.payload});case"GET_AUTH":return Object(j.a)({},e,{isAuthenticated:!C(t.payload),user:t.payload});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE_LOADING":return Object(j.a)({},e,{loading:!0});case"GET_PROFILE":return Object(j.a)({},e,{profile:t.payload,loading:!1});case"GET_PROFILEs":return Object(j.a)({},e,{profiles:t.payload,loading:!1});case"CLEAR_CURRENT_PROFILE":return Object(j.a)({},e,{profile:null});default:return e}},zone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ZONES":return Object(j.a)({},e,{zones:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;case"CLEAR_ERRORS":return{};default:return e}}}),P=[N.a],x=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();x=function(e){return e};var D=Object(O.e)(T,{},Object(O.d)(O.a.apply(void 0,P),x)),_=(a(78),a(79),a(94)),I=a(92),L=a(96),z=function(e,t,a){var l=function(n){function l(){return Object(o.a)(this,l),Object(c.a)(this,Object(m.a)(l).apply(this,arguments))}return Object(u.a)(l,n),Object(s.a)(l,[{key:"componentDidMount",value:function(){var e=this.props.user,n=e.isAuthenticated,r=e.role;n?a?"admin"!==r&&"manager"!==r||this.props.history.push("/admin/dashboard"):!1===t&&this.props.history.push("/client/dashboard"):t&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement(e,null)}}]),l}(n.Component);return Object(y.b)(function(e){return{user:e.auth}})(l)},A=a(91),U=a(95),G=function(){return function(e){E.a.get("/api/zones/all-zones").then(function(t){return e({type:"GET_ZONES",payload:t.data})}).catch(function(t){return e({type:"GET_ZONES",payload:{}})})}},F=function(e,t,a){return function(n){E.a.post("/api/profiles/edit-create",e).then(function(e){return n(Z(t,a))}).catch(function(e){return n({type:"GET_ERRORS",payload:e.response.data})})}},Z=function(e,t){return function(a){E.a.post("/api/profiles/add-edit-academic",e).then(function(e){return t.push("/profile")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}},Y=function(){return{type:"PROFILE_LOADING"}},B=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.history.push("/"),this.props.clearCurrentProfile(),this.props.logoutUser()}},{key:"render",value:function(){var e,t=this.props.auth,a=t.isAuthenticated,n=t.user,l=t.role;return"client"===l?e=r.a.createElement("div",{className:"right menu"},r.a.createElement(A.a,{className:"ui item",to:"/client/profile"},"Profile"),r.a.createElement(A.a,{className:"ui item",to:"/client/dashboard"},"Dashboard"),r.a.createElement(A.a,{className:"ui item",to:"/client/create-job"},"Create Job"),r.a.createElement(A.a,{to:"/",onClick:this.onLogoutClick.bind(this),className:"ui item"},"Logout")):"admin"===l&&(e=r.a.createElement("div",{className:"right menu"},r.a.createElement(A.a,{to:"/",onClick:this.onLogoutClick.bind(this),className:"ui item"},"Logout"))),r.a.createElement("div",{className:"ui secondary menu"},a&&"client"===n.auth.role?r.a.createElement(A.a,{className:"item",to:"/client/dashboard"},"ROUNDPRINT"):null,e)}}]),t}(n.Component),M=Object(y.b)(function(e){return{auth:e.auth}},{logoutUser:g,clearCurrentProfile:function(){return{type:"CLEAR_CURRENT_PROFILE"}}})(Object(U.a)(B)),H=a(15),W=a(11),J=a(48),X=a(29),q=a.n(X),V=a(49),K=a.n(V),Q=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("client/dashboard")}},{key:"render",value:function(){this.props.auth.isAuthenticated;return r.a.createElement("div",{className:"register-landing"},r.a.createElement("div",null,r.a.createElement("h1",{className:"ui large header center aligned"},"ROUNDPRINT"),r.a.createElement(J.Carousel,{showArrows:!1,showStatus:!1,showIndicators:!1,showThumbs:!1,autoPlay:!0,infiniteLoop:!0,interval:6e3},r.a.createElement("div",null,r.a.createElement("img",{src:q.a})),r.a.createElement("div",null,r.a.createElement("img",{src:K.a}),r.a.createElement("p",{className:"legend",style:{backgroundColor:"transparent",color:"#2185d0"}},"Yes Round Print The way")),r.a.createElement("div",null,r.a.createElement("img",{src:q.a}),r.a.createElement("p",{className:"legend"},"Legend 3")))))}}]),t}(n.Component),$=Object(y.b)(function(e){return{auth:e.auth}})(Object(U.a)(Q)),ee=(a(44),function(e){var t=e.name,a=e.placeholder,n=e.value,l=(e.label,e.error),i=(e.info,e.type),o=e.onChange;e.disabled;return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input focus"},r.a.createElement("i",{className:"envelope icon"}),r.a.createElement("input",{placeholder:a,name:t,value:n,type:i,onChange:o}),l&&r.a.createElement("div",{className:"invalid-feedback"},l)))});ee.defaultProps={type:"text"};var te=ee,ae=function(e){var t=e.name,a=e.placeholder,n=e.value,l=e.error,i=(e.icon,e.type),o=e.onChange;return r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input focus"},r.a.createElement("i",{className:"lock icon"}),r.a.createElement("input",{placeholder:a,name:t,value:n,type:i,onChange:o}),l&&r.a.createElement("div",{className:"invalid-feedback"},l)))};ae.defaultProps={type:"text"};var ne=ae,re=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={name:"",lastname:"",phonenumber:"",email:"",password:"",password2:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("client/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,lastname:this.state.lastname,phonenumber:this.state.phonenumber,email:this.state.email,password:this.state.password,password2:this.state.password2};this.props.registerUser(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ten wide column"},r.a.createElement($,null)),r.a.createElement("div",{className:"six wide column"},r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"ui icon tiny header center aligned"},r.a.createElement("i",{className:"address book icon",style:{color:"#f50057"}}),r.a.createElement("h1",null,"Sign Up")),r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement(te,{placeholder:"First Name",name:"name",value:this.state.name,onChange:this.onChange,error:e.name}),r.a.createElement(te,{placeholder:"Last Name",name:"lastname",value:this.state.lastname,onChange:this.onChange,error:e.lastname}),r.a.createElement(te,{placeholder:"Email",name:"email",type:"email",value:this.state.email,onChange:this.onChange,error:e.email,info:"This site uses Gravatar so if you want a profile image, use a Gravatar email"}),r.a.createElement(te,{placeholder:"Phone Number",name:"phonenumber",type:"text",value:this.state.phonenumber,onChange:this.onChange,error:e.phonenumber}),r.a.createElement(ne,{placeholder:"Password",name:"password",type:"password",value:this.state.password,onChange:this.onChange,error:e.password}),r.a.createElement(ne,{placeholder:"Confirm Password",name:"password2",type:"password",value:this.state.password2,onChange:this.onChange,error:e.password2}),r.a.createElement("button",{className:"ui fluid large primary button",type:"submit"},"Register")),r.a.createElement("hr",null),r.a.createElement("div",{className:""},r.a.createElement("p",null,"Already have an account?",r.a.createElement("span",{className:"mini ui button",style:{marginLeft:"1em"}},r.a.createElement(A.a,{to:"/"},"Sign In"))))))))}}]),t}(n.Component),le=Object(y.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){E.a.post("/api/users/register",e).then(function(e){return t.push("/")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(U.a)(re)),ie=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-landing"},r.a.createElement("div",null,r.a.createElement("h1",{className:"ui large header center aligned"},"ROUNDPRINT")))}}]),t}(n.Component),oe=Object(y.b)(function(e){return{auth:e.auth}})(Object(U.a)(ie)),se=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){"client"===this.props.auth.role&&this.props.history.push("/client/dashboard")}},{key:"componentWillReceiveProps",value:function(e){"client"===e.auth.role&&this.props.history.push("/client/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password,role:"client"};this.props.loginUser(t)}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ten wide column"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"six wide column"},r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"ui icon tiny header center aligned"},r.a.createElement("i",{className:"lock icon",style:{color:"#2185d0"}}),r.a.createElement("h1",null,"Sign In")),r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement(te,{placeholder:"Email Address",name:"email",type:"email",value:this.state.email,onChange:this.onChange,error:e.email}),r.a.createElement(ne,{placeholder:"Password",name:"password",type:"password",value:this.state.password,onChange:this.onChange,error:e.password}),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui checkbox"},r.a.createElement("input",{type:"checkbox",tabIndex:"0",className:"hidden"}),r.a.createElement("label",null,"I agree to the Terms and Conditions"))),r.a.createElement("button",{className:"ui fluid large primary button",type:"submit",style:{marginTop:"1.5em"}},"Sign in")),r.a.createElement("hr",{style:{marginBottom:"1em",marginTop:"1em"}}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"six wide column"},r.a.createElement(A.a,{to:"/client/register"},"Forget password")),r.a.createElement("div",{className:"ten wide column"},r.a.createElement("p",null,"Don't have an account?",r.a.createElement("span",{className:"mini ui button",style:{marginLeft:"1em"}},r.a.createElement(A.a,{to:"/client/register"},"Sign Up")))))))))}}]),t}(n.Component),ce=Object(y.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:v})(Object(U.a)(se)),me=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"ui container"},"Dashboard"))}}]),t}(n.Component),ue=Object(y.b)(function(e){return{profile:e.profile,auth:e.auth}})(me),de=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Job")}}]),t}(n.Component),he=a(93),pe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",lastname:"",email:"",regnumber:"",program:"",year:"",semester:"",deliveryzone:"",redirect:!1,errors:{}},a.onChange=a.onChange.bind(Object(W.a)(a)),a.onSubmit=a.onSubmit.bind(Object(W.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getZones()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t,a,n,r=this.props.profile.profile,l=this.props.auth.user;t=Object.keys(r).length>0&&r.academic[0].program?r.academic[0].program:this.state.program,n=Object.keys(r).length>0&&r.regnumber?r.regnumber:this.state.regnumber,a=l.email?l.email:this.state.email;var i={regnumber:n,zonename:this.state.deliveryzone,email:a},o={program:t,year:this.state.year,semester:this.state.semester};this.props.createProfile(i,o,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e,t=this.props.auth.user,a=this.props.profile.profile,n=this.props.zones.zones,l=this.state.errors;return null===n||Object.keys(n).length<=0?r.a.createElement(he.a,{to:"/client/job"}):(e=n.map(function(e){return r.a.createElement("option",{key:e._id,value:e.name},e.name)}),r.a.createElement("div",{className:"ui"},r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"ui animated button",tabIndex:"0"},r.a.createElement(A.a,{to:"/client/profile"},r.a.createElement("div",{className:"visible content"},"Back"),r.a.createElement("div",{className:"hidden content"},r.a.createElement("i",{className:"left arrow icon"})))),r.a.createElement("h4",{className:"ui center aligned dividing large header",style:{marginBottom:"1em"}},"Hi ",r.a.createElement("span",null,t.auth.name),", ",Object.keys(a).length>0?"Edit Your Profile":"Create Your Profile"," "),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",readonly:"",value:t.auth.name,name:"name",onChange:this.onChange,placeholder:t.auth.name})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",readonly:"",value:t.auth.lastname,name:"lastname",onChange:this.onChange,placeholder:t.auth.lastname})))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",value:this.state.email,name:"email",onChange:this.onChange,placeholder:t.auth.email?t.auth.email:"Email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Default Delivery Zone"),r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.deliveryzone,name:"deliveryzone",onChange:this.onChange,placeholder:"Default Delivery Zone"},r.a.createElement("option",{value:""},"Select Delivery Zone"),e),l.zonename&&r.a.createElement("div",{className:"invalid-feedback"},l.zonename)))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Field Of Study"),Object.keys(a).length>0&&a.academic[0].program?r.a.createElement("input",{type:"text",readonly:"",value:a.academic[0].program,name:"program",onChange:this.onChange,placeholder:a.academic[0].program}):r.a.createElement("input",{type:"text",value:this.state.program,name:"program",onChange:this.onChange,placeholder:"Degree Program e.g HACC,HBSCT"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Reg #"),Object.keys(a).length>0&&a.regnumber?r.a.createElement("input",{type:"text",readonly:"",value:a.regnumber,name:"regnumber",onChange:this.onChange,placeholder:a.regnumber}):r.a.createElement("input",{type:"text",value:this.state.regnumber,name:"regnumber",onChange:this.onChange,placeholder:"Registration Number"})))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.year,onChange:this.onChange,name:"year",placeholder:"Year"},r.a.createElement("option",{value:""},"Year"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",{className:"field"},r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.semester,onChange:this.onChange,name:"semester",placeholder:"Semester"},r.a.createElement("option",{value:""},"Semester"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2")))),r.a.createElement("button",{className:"ui button",type:"submit",tabIndex:"0"},Object.keys(a).length>0?"Edit":"Create"))))}}]),t}(n.Component),Ee=Object(y.b)(function(e){return{auth:e.auth,profile:e.profile,zones:e.zone,errors:e.errors}},{createProfile:F,addAcademic:Z,getZones:G})(pe),be=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(!this.props.getCurrentProfile())return r.a.createElement(he.a,{to:"/client/dashboard"});this.props.getCurrentProfile()}},{key:"render",value:function(){var e=this.props.profile,t=e.profile,a=e.loading,n=this.props.auth.user;return a?r.a.createElement("div",{className:"ui"},r.a.createElement("div",{className:"ui active inverted dimmer"},r.a.createElement("div",{className:"ui huge text loader"},"Loading"))):r.a.createElement("div",{className:"profile"},null!==t&&Object.keys(t).length>0?r.a.createElement("span",null,r.a.createElement("div",{className:"ui equal width center aligned padded grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{style:{paddingTop:"2em"}},r.a.createElement("span",null,n.auth.name),r.a.createElement("span",{style:{paddingLeft:".5em"}},n.auth.lastname)),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h5",null,"Phone : ",r.a.createElement("span",null,t.client.phonenumber)),r.a.createElement("h5",null,"Email : ",r.a.createElement("span",null,t.client.email)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{className:"ui large header",style:{paddingTop:"2em"}},"Programme : ",r.a.createElement("span",null,t.academic[0].program)),r.a.createElement("h5",{className:"ui header"},"REG NUMBER : ",r.a.createElement("span",null,t.regnumber)),r.a.createElement("h5",null,"Year : ",r.a.createElement("span",null,t.academic[0].year)),r.a.createElement("h5",null,"Semester : ",r.a.createElement("span",null,t.academic[0].semester)),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"ui animated button",tabIndex:"0"},r.a.createElement(A.a,{to:"/client/create-profile"},r.a.createElement("div",{className:"visible content"},"Edit Profile"),r.a.createElement("div",{className:"hidden content"},r.a.createElement("i",{className:"right arrow icon"})))))):r.a.createElement("span",null,r.a.createElement("div",{className:"ui equal width center aligned padded grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("h2",{style:{paddingTop:"2em"}}," Welcome ",r.a.createElement("span",null,n.auth.name),r.a.createElement("span",{style:{paddingLeft:".5em"}},n.auth.lastname)),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h3",{style:{paddingTop:"1em"}}," You Don't Have Profile Yet !"),r.a.createElement("button",{type:"submit",className:"ui animated button",tabIndex:"0"},r.a.createElement(A.a,{to:"/client/create-profile"},r.a.createElement("div",{className:"visible content"},"Create Profile"),r.a.createElement("div",{className:"hidden content"},r.a.createElement("i",{className:"right arrow icon"})))))))))}}]),t}(n.Component),ve=Object(y.b)(function(e){return{auth:e.auth,profile:e.profile}},{getCurrentProfile:function(){return function(e){e(Y()),E.a.get("/api/profiles").then(function(t){e({type:"GET_PROFILE",payload:t.data}),e(G())}).catch(function(t){return e({type:"GET_PROFILE",payload:{}})})}}})(be),fe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",lastname:"",email:"",regnumber:"",program:"",year:"",semester:"",deliveryzone:"",redirect:!1,errors:{}},a.onChange=a.onChange.bind(Object(W.a)(a)),a.onSubmit=a.onSubmit.bind(Object(W.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getZones()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t,a,n,r=this.props.profile.profile,l=this.props.auth.user;t=Object.keys(r).length>0&&r.academic[0].program?r.academic[0].program:this.state.program,n=Object.keys(r).length>0&&r.regnumber?r.regnumber:this.state.regnumber,a=l.email?l.email:this.state.email;var i={regnumber:n,zonename:this.state.deliveryzone,email:a},o={program:t,year:this.state.year,semester:this.state.semester};this.props.createProfile(i,o,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e,t=this.props.auth.user,a=this.props.profile.profile,n=this.props.zones.zones,l=this.state.errors;return null===n||Object.keys(n).length<=0?r.a.createElement(he.a,{to:"/client/profile"}):(e=n.map(function(e){return r.a.createElement("option",{key:e._id,value:e.name},e.name)}),r.a.createElement("div",{className:"ui"},r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"ui animated button",tabIndex:"0"},r.a.createElement(A.a,{to:"/client/profile"},r.a.createElement("div",{className:"visible content"},"Back"),r.a.createElement("div",{className:"hidden content"},r.a.createElement("i",{className:"left arrow icon"})))),r.a.createElement("h4",{className:"ui center aligned dividing large header",style:{marginBottom:"1em"}},"Hi ",r.a.createElement("span",null,t.auth.name),", ",Object.keys(a).length>0?"Edit Your Profile":"Create Your Profile"," "),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",readonly:"",value:t.auth.name,name:"name",onChange:this.onChange,placeholder:t.auth.name})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",readonly:"",value:t.auth.lastname,name:"lastname",onChange:this.onChange,placeholder:t.auth.lastname})))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",value:this.state.email,name:"email",onChange:this.onChange,placeholder:t.auth.email?t.auth.email:"Email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Default Delivery Zone"),r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.deliveryzone,name:"deliveryzone",onChange:this.onChange,placeholder:"Default Delivery Zone"},r.a.createElement("option",{value:""},"Select Delivery Zone"),e),l.zonename&&r.a.createElement("div",{className:"invalid-feedback"},l.zonename)))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Field Of Study"),Object.keys(a).length>0&&a.academic[0].program?r.a.createElement("input",{type:"text",readonly:"",value:a.academic[0].program,name:"program",onChange:this.onChange,placeholder:a.academic[0].program}):r.a.createElement("input",{type:"text",value:this.state.program,name:"program",onChange:this.onChange,placeholder:"Degree Program e.g HACC,HBSCT"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Reg #"),Object.keys(a).length>0&&a.regnumber?r.a.createElement("input",{type:"text",readonly:"",value:a.regnumber,name:"regnumber",onChange:this.onChange,placeholder:a.regnumber}):r.a.createElement("input",{type:"text",value:this.state.regnumber,name:"regnumber",onChange:this.onChange,placeholder:"Registration Number"})))),r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.year,onChange:this.onChange,name:"year",placeholder:"Year"},r.a.createElement("option",{value:""},"Year"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("div",{className:"field"},r.a.createElement("select",{className:"ui fluid dropdown",value:this.state.semester,onChange:this.onChange,name:"semester",placeholder:"Semester"},r.a.createElement("option",{value:""},"Semester"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2")))),r.a.createElement("button",{className:"ui button",type:"submit",tabIndex:"0"},Object.keys(a).length>0?"Edit":"Create"))))}}]),t}(n.Component),ge=Object(y.b)(function(e){return{auth:e.auth,profile:e.profile,zones:e.zone,errors:e.errors}},{createProfile:F,addAcademic:Z,getZones:G})(fe),ye=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"ui container"},"Admin Dashboard"))}}]),t}(n.Component),Oe=Object(y.b)(function(e){return{profile:e.profile,auth:e.auth}})(ye),Ne=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-landing"},r.a.createElement("div",null,r.a.createElement("h1",{className:"ui large header center aligned"},"ROUNDPRINT")))}}]),t}(n.Component),je=(Object(y.b)(function(e){return{auth:e.auth}})(Object(U.a)(Ne)),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={email:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(W.a)(e)),e.onSubmit=e.onSubmit.bind(Object(W.a)(e)),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){"admin"===this.props.auth.role&&this.props.history.push("/admin/dashboard")}},{key:"componentWillReceiveProps",value:function(e){"admin"===e.auth.role&&this.props.history.push("/admin/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};this.props.loginUser(t)}},{key:"onChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"ui icon tiny header center aligned"},r.a.createElement("i",{className:"lock icon",style:{color:"#2185d0"}}),r.a.createElement("h1",null,"Sign In")),r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement(te,{placeholder:"Email Address",name:"email",type:"email",value:this.state.email,onChange:this.onChange,error:e.email}),r.a.createElement(ne,{placeholder:"Password",name:"password",type:"password",value:this.state.password,onChange:this.onChange,error:e.password}),r.a.createElement("button",{className:"ui fluid large primary button",type:"submit",style:{marginTop:"1.5em"}},"Sign in")))}}]),t}(n.Component)),Ce=Object(y.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:v})(Object(U.a)(je)),we=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"Page Not Found"),r.a.createElement("p",null,"Sorry, this page does not exist"))},ke=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,null,r.a.createElement("div",null,r.a.createElement(I.a,{exact:!0,path:"/client/register",component:z(le,!1)}),r.a.createElement(I.a,{exact:!0,path:"/",component:z(ce,!1)}),r.a.createElement("div",{className:"ui container"},r.a.createElement(M,null),r.a.createElement(L.a,null,r.a.createElement(I.a,{exact:!0,path:"/print",component:z(Ce,!1)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{path:"/client/dashboard",exact:!0,component:z(ue,!0)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{exact:!0,path:"/client/job",component:z(de,!0)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{exact:!0,path:"/client/create-job",component:z(Ee,!0)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{exact:!0,path:"/client/profile",component:z(ve,!0)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{exact:!0,path:"/client/create-profile",component:z(ge,!0)})),r.a.createElement(L.a,null,r.a.createElement(I.a,{path:"/admin/dashboard",exact:!0,component:z(Oe,!0,!0)})),r.a.createElement(I.a,{exact:!0,path:"/not-found",component:z(we,null)}))))}}]),t}(n.Component);if(localStorage.jwtToken){b(localStorage.jwtToken);var Se=h()(localStorage.jwtToken);D.dispatch(f(Se));var Re=Date.now()/1e3;Se.exp<Re&&(D.dispatch(g()),window.location.href="/")}var Te=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{store:D},r.a.createElement(ke,null))}}]),t}(n.Component);i.a.render(r.a.createElement(Te,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f197dfce.chunk.js.map