(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[4],{100:function(e,t,n){"use strict";var a=n(0),i=n.n(a),u=n(101),r=n.n(u);t.a=function(e){var t=null,n=[r.a.InputEl];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(r.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n,value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{value:e.value,key:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:n},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:r.a.Input},i.a.createElement("label",{className:r.a.Label},e.label),t)}},101:function(e,t,n){e.exports={Input:"Input_Input__3F4Cp",Label:"Input_Label__2zlOW",InputEl:"Input_InputEl__3NeKz",Invalid:"Input_Invalid__3RpkF"}},104:function(e,t,n){e.exports={Auth:"Auth_Auth__2PWUk"}},106:function(e,t,n){"use strict";n.r(t);var a=n(25),i=n(4),u=n(5),r=n(7),l=n(6),o=n(8),s=n(0),c=n.n(s),p=n(100),d=n(20),h=n(104),g=n.n(h),m=n(15),v=n(17),f=n(21),b=n(3),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var u=arguments.length,o=new Array(u),s=0;s<u;s++)o[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,maxLength:6,isNumeric:!0},valid:!1,touched:!1}},inSignupMode:!0},n.inputChangedHandler=function(e,t){var i=b.b(n.state.controls,Object(a.a)({},t,b.b(n.state.controls[t],{value:e.target.value,valid:b.a(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:i})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.inSignupMode)},n.switchAuthModeHandler=function(){n.setState((function(e){return{inSignupMode:!e.inSignupMode}}))},n}return Object(o.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){!this.props.buildingBurger&&this.props.authRedirectPath&&this.props.onSetAuthRedirectPath("/burger-builder")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return c.a.createElement(p.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),i=c.a.createElement("form",{onSubmit:function(t){return e.submitHandler(t)}},c.a.createElement("h4",null,this.state.inSignupMode?"Signup":"Sign In"," Here:"),a,c.a.createElement(d.a,{btnType:"Success"},this.state.inSignupMode?"Signup":"Sign In")),u=null;this.props.error&&(u=c.a.createElement("p",{style:{color:"red"}},this.props.error.message));var r=null;return this.props.isAuthenticated&&(r=c.a.createElement(f.a,{to:this.props.authRedirectPath}),u=null),c.a.createElement("div",{className:g.a.Auth},r,u,i,c.a.createElement(d.a,{btnType:"Danger",clicked:this.switchAuthModeHandler},"Switch to ",this.state.inSignupMode?"Sign In":"Signup"))}}]),t}(s.Component);t.default=Object(v.b)((function(e){return{buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath,error:e.auth.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onAuth:function(t,n,a){return e(m.b(t,n,a))},onSetAuthRedirectPath:function(t){return e(m.k(t))}}}))(S)}}]);
//# sourceMappingURL=4.b1e10822.chunk.js.map