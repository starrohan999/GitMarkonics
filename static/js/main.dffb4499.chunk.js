(this.webpackJsonpbeautifulreadme=this.webpackJsonpbeautifulreadme||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},258:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var c=n(5),i=n(1),a=n(82),r=n.n(a),s=(n(159),n(160),n(86)),o=n.n(s),l=n(137),d=n(138),j=n(139),h=n(149),b=n(147),u=n(27),O=(n(257),n(258),n(146)),x=n(281),g=n(277),p=n(289),f=n(148),m=n(282),C=n(70),v=n(69),k=n.n(v),w=n(288),S=n(280),y=function(e){return Object(c.jsx)(g.a,{flex:"1",bg:"white",border:"1px",borderColor:"gray.10",p:5,children:Object(c.jsxs)(w.e,{children:[Object(c.jsxs)(w.b,{children:[Object(c.jsx)(w.a,{children:"Output"}),Object(c.jsx)(w.a,{children:"Preview"})]}),Object(c.jsxs)(w.d,{children:[Object(c.jsx)(w.c,{children:Object(c.jsx)(S.a,{children:e.file})}),Object(c.jsx)(w.c,{children:Object(c.jsx)("div",{dangerouslySetInnerHTML:function(){var t=k()("_Nothing_ to show ");return e.file?(t=k()(e.file),console.log(e.file),console.log()):t=k()("_Nothing_ to show "),{__html:t}}()})})]})]})})},_=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={editorState:u.EditorState.createEmpty(),file:""},c.onChange=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.setState({editorState:t});case 2:return e.next=4,Object(O.a)(c.state.editorState.getCurrentContent());case 4:n=e.sent,c.setState({file:c.replacer(n)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c}return Object(j.a)(n,[{key:"replacer",value:function(e){return e=(e=e.replace(/<p>/g,"").replace(/<\/p>/g,"</br>").replace(/<br>/g,"").replace(/<strong>/g,"**").replace(/<\/strong>/g,"**").replace(/&nbsp;/g," ")).replace(/<em>/g,"_").replace(/<\/em>/g,"_")}},{key:"_onBoldClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"BOLD"))}},{key:"_onItalicClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"ITALIC"))}},{key:"_onUnderlineClick",value:function(){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,"UNDERLINE"))}},{key:"onDownload",value:function(){var e=document.createElement("a");e.href="data:attachment/text,"+encodeURI(this.file),e.target="_blank",e.download="README.md",e.click()}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(x.a,{color:"black",children:[Object(c.jsxs)(g.a,{flex:"1",bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2,children:[Object(c.jsxs)(p.a,{direction:"row",spacing:1,align:"center",children:[Object(c.jsx)(f.a,{onClick:this._onBoldClick.bind(this),children:Object(c.jsx)(m.a,{as:C.a})}),Object(c.jsxs)(f.a,{onClick:this._onItalicClick.bind(this),children:[" ",Object(c.jsx)(m.a,{as:C.c})]}),Object(c.jsxs)(f.a,{onClick:this.onDownload.bind(this),children:[Object(c.jsx)(m.a,{as:C.b})," \xa0Download"]})]}),Object(c.jsx)(g.a,{className:"editors-panel",children:Object(c.jsx)(u.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,placeholder:"Lets Start Documenting ..."})})]}),Object(c.jsx)(y,{file:this.state.file})]})})}}]),n}(i.Component),E=n(17),I=(n(262),n(145)),F=n(285),N=n(283),D=n(284),L=n(144),A=n.p+"static/media/white heading.e7c01da3.png";var R=function(){return Object(c.jsx)(g.a,{className:"nav_header",p:1,children:Object(c.jsxs)(x.a,{direction:"row",spacing:2,children:[Object(c.jsxs)(F.a,{children:[Object(c.jsx)(F.b,Object(E.a)({as:N.a,"aria-label":"Options",icon:L.a,bg:"#F0A6CA",border:"0.5px",borderColor:"#F0E6EF",p:1,m:2,size:"xs",variant:"solid"},"m",1)),Object(c.jsxs)(F.d,{children:[Object(c.jsx)(F.c,{command:"\u2318T",children:"New Tab"}),Object(c.jsx)(F.c,{command:"\u2318N",children:"New Window"}),Object(c.jsx)(F.c,{command:"\u2318\u21e7N",children:"Open Closed Tab"}),Object(c.jsx)(F.c,{command:"\u2318O",children:"Open File..."})]})]}),Object(c.jsx)("img",{src:A,alt:"heading",width:"120px",class:"center"}),Object(c.jsx)(D.a,{}),Object(c.jsxs)(p.a,{direction:"row",spacing:2,children:[Object(c.jsx)(f.a,{leftIcon:Object(c.jsx)(I.a,{}),colorScheme:"pink",variant:"solid",children:"Login"}),Object(c.jsx)(f.a,{colorScheme:"white",variant:"outline",children:"Register"})]})]})})};var T=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(R,{}),Object(c.jsx)(_,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))},B=n(286);r.a.render(Object(c.jsx)(B.a,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),U()}},[[263,1,2]]]);
//# sourceMappingURL=main.dffb4499.chunk.js.map