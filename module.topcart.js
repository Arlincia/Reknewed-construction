export default function(e){const t=SEMICOLON.Core;if((e=t.getSelector(e,!1)).length<1)return!0;if(!document.getElementById("top-cart-trigger"))return!1;t.getVars.elBody.classList;document.getElementById("top-cart-trigger").onclick=t=>{e[0].classList.toggle("top-cart-open"),t.stopPropagation(),t.preventDefault()},document.addEventListener("click",t=>{t.target.closest("#top-cart")||e[0].classList.remove("top-cart-open")},!1)}