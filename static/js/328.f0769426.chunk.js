"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[328],{328:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r,i,c=n(885),a=n(739),o=n(791),s=n(168),h=n(444),l=h.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0;\n"]))),f=h.ZP.span(i||(i=(0,s.Z)(["\n  font-weight: 500;\n"]))),u=n(184);function d(){var t=(0,o.useState)([{}]),e=(0,c.Z)(t,2),n=e[0],r=e[1],i=(0,a.UO)().id;return(0,o.useEffect)((function(){fetch("  https://api.themoviedb.org/3/movie/".concat(i,"/credits?api_key=").concat("0729fc5ff166ac1f365f9bc4f7e8ce78")).then((function(t){if(t.ok)return t.json();throw new Error("Something went wrong")})).then((function(t){var e=t.cast;r(e.map((function(t){return{name:t.name,character:t.character,img:"https://image.tmdb.org/t/p/w400".concat(t.profile_path),id:t.id}})))})).catch((function(t){return alert(t)}))}),[i]),(0,u.jsx)(u.Fragment,{children:0!==n.length?(0,u.jsx)(l,{children:n.map((function(t){var e=t.name,n=t.img,r=t.character,i=t.id;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{style:{width:150},src:"https://image.tmdb.org/t/p/w400null"!==n?n:"https://via.placeholder.com/400x600",alt:e}),(0,u.jsx)("h4",{style:{margin:0},children:e}),(0,u.jsxs)("p",{style:{margin:0},children:[(0,u.jsx)(f,{children:"Character: "}),r]})]},""+i)}))}):(0,u.jsx)("p",{children:"We do not have cast for this movie"})})}}}]);
//# sourceMappingURL=328.f0769426.chunk.js.map