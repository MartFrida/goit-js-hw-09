function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=t.target.elements.amount.value;let n=Number(t.target.elements.delay.value);const l=Number(t.target.elements.step.value);for(let t=1;t<=o;t++)e(t,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),n+=l}));
//# sourceMappingURL=03-promises.8377affd.js.map