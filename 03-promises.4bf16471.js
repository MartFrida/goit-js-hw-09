!function(){function e(e,t){var n=Math.random()>.3;return new Promise((function(o,a){setTimeout((function(){n?o({position:e,delay:t}):a({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=t.target.elements.amount.value,o=Number(t.target.elements.delay.value),a=Number(t.target.elements.step.value),i=1;i<=n;i++)e(i,o).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),o+=a}))}();
//# sourceMappingURL=03-promises.4bf16471.js.map
