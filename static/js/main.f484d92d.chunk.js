(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),n=r(3),a=r(4),i=r(6),c=r(5),u=r(1),l=r.n(u),o=r(7),h=r.n(o),j=(r(14),r(0));function d(e){return Object(j.jsx)("button",{className:"col-*-*",onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),x=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();m(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=m(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to Game start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){t.jumpTo(r)},children:s})},r)}));return e=n?"Winner is: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ol",{children:a})]})]})}}]),r}(l.a.Component);function m(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],i=n[1],c=n[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return e[a]}return null}h.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.f484d92d.chunk.js.map