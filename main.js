!function(){"use strict";var e={145:function(e,t,o){e.exports=o.p+"418980fdb81d7ceb84cc.jpg"},195:function(e,t,o){e.exports=o.p+"da7ae2ac910426f62176.jpg"},837:function(e,t,o){e.exports=o.p+"b431bbb397d7a39486fd.jpg"},713:function(e,t,o){e.exports=o.p+"44b92084d1c40cb0a70b.jpg"},574:function(e,t,o){e.exports=o.p+"ac218ab8ae2c025add31.jpg"},129:function(e,t,o){e.exports=o.p+"f37cd48ce187723b17f6.jpg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.m=e,o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.b=document.baseURI||self.location.href,function(){const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button-submit",inactiveButtonClass:"modal__button-submit_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__input_error_visible"},t=(e,t,o)=>{const n=e.querySelector(`#${t.id}-error`);n.textContent="",n.classList.remove(o.errorClass),t.classList.remove(o.inputErrorClass)},n=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?c(t,o):r(t,o)},r=(e,t)=>{e.classList.remove(t.inactiveButtonClass),e.disabled=!1},c=(e,t)=>{e.classList.add(t.inactiveButtonClass),e.disabled=!0},a=new URL(o(145),o.b),l=new URL(o(195),o.b),d=new URL(o(837),o.b),i=new URL(o(713),o.b),s=new URL(o(574),o.b),u=new URL(o(129),o.b),m=document.querySelector(".profile__edit-btn"),p=document.querySelectorAll(".modal__button-close"),_=document.querySelector(".profile__name"),f=document.querySelector(".profile__description"),v=document.querySelector("#edit-modal"),b=document.querySelector("#profile-name-input"),y=document.querySelector("#profile-description-input"),S=document.querySelector("#profile-form");function q(e){"Escape"===e.key&&k(document.querySelector(".modal_opened"))}function L(e){e.classList.add("modal_opened"),document.addEventListener("keydown",q)}function k(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",q)}document.querySelectorAll(".modal").forEach((e=>{e.addEventListener("mousedown",(t=>{(t.target.classList.contains("modal")||t.target.classList.contains("modal__button-close"))&&k(e)}))})),m.addEventListener("click",(()=>{var o,n;b.value=_.textContent,y.value=f.textContent,o=S,n=e,[b,y].forEach((e=>{t(o,e,n)})),L(v)})),S.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=b.value,f.textContent=y.value,k(v)}));const E=document.querySelector(".profile__new-post-btn"),C=document.querySelector("#add-card-form"),g=document.querySelector("#profile-add-card-link-input"),x=document.querySelector("#profile-add-card-caption-input"),w=document.querySelector("#add-card-modal");E.addEventListener("click",(()=>{L(w)})),C.addEventListener("submit",(function(t){t.preventDefault();const o=B({name:x.value,link:g.value});O.prepend(o),k(w),C.reset(),c(t.submitter,e)}));const h=[{name:"Joseph, OR",link:a},{name:"Oregon Coast",link:l},{name:"Tumalo Falls, OR",link:d},{name:"Central Oregon Cascade Range",link:i},{name:"Multnomah Falls, OR",link:s},{name:"Southern Oregon",link:u}],R=document.querySelector("#card-template"),O=document.querySelector(".cards__list"),j=document.querySelector("#card-preview-modal"),U=document.querySelector(".modal__image-preview"),A=document.querySelector(".modal__image-caption");function B(e){const t=R.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image"),r=t.querySelector(".card__like-button"),c=t.querySelector(".card__delete-button");return o.textContent=e.name,n.src=e.link,n.alt=e.name,r.addEventListener("click",(()=>{r.classList.toggle("card__like-button_liked")})),c.addEventListener("click",(()=>{t.remove()})),n.addEventListener("click",(()=>{U.src=e.link,U.alt=e.name,A.textContent=e.name,L(j)})),t}var D;h.forEach((e=>{const t=B(e);O.prepend(t)})),p.forEach((e=>{e.addEventListener("click",(()=>{k(e.closest(".modal"))}))})),D=e,document.querySelectorAll(D.formSelector).forEach((e=>{((e,o)=>{const r=Array.from(e.querySelectorAll(o.inputSelector)),c=e.querySelector(o.submitButtonSelector);n(r,c,o),r.forEach((a=>{a.addEventListener("input",(function(){((e,o,n)=>{o.validity.valid?t(e,o,n):((e,t,o,n)=>{const r=e.querySelector(`#${t.id}-error`);r.textContent=o,r.classList.add(n.errorClass),t.classList.add(n.inputErrorClass)})(e,o,o.validationMessage,n)})(e,a,o),n(r,c,o)}))}))})(e,D)}))}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCWCxFQUFZSSxjQUFjRixFQUFPUCxzQkFDdkRjLEVBQWtCQyxFQUFXQyxFQUFlVCxHQUU1Q1EsRUFBVWtDLFNBQVMzQyxJQUNqQkEsRUFBYXlDLGlCQUFpQixTQUFTLFdBbkRoQjJDLEVBQUNyRixFQUFhQyxFQUFjQyxLQUNoREQsRUFBYVksU0FBU0MsTUFRekJmLEVBQWVDLEVBQWFDLEVBQWNDLEdBdkJ2Qm9GLEVBQUN0RixFQUFhQyxFQUFjc0YsRUFBY3JGLEtBQy9ELE1BQU1DLEVBQWVILEVBQVlJLGNBQWMsSUFBSUgsRUFBYUksWUFDaEVGLEVBQWFHLFlBQWNpRixFQUMzQnBGLEVBQWFJLFVBQVVZLElBQUlqQixFQUFPSixZQUNsQ0csRUFBYU0sVUFBVVksSUFBSWpCLEVBQU9MLGdCQUFnQixFQVloRHlGLENBQ0V0RixFQUNBQyxFQUNBQSxFQUFhdUYsa0JBQ2J0RixFQUlKLEVBMENJbUYsQ0FBbUJyRixFQUFhQyxFQUFjQyxHQUM5Q08sRUFBa0JDLEVBQVdDLEVBQWVULEVBQzlDLEdBQUUsR0FDRixFQU1BZ0YsQ0FBa0JsRixFQUFhRSxFQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDE3OTogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImNvbnN0IHNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLm1vZGFsX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvbi1zdWJtaXRcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uLXN1Ym1pdF9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3Qgc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5lcnJvckNsYXNzKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG59O1xuXG5jb25zdCBoaWRlSW5wdXRFcnJvciA9IChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JFbGVtZW50ID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xuICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuZXJyb3JDbGFzcyk7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dJbnB1dEVycm9yKFxuICAgICAgZm9ybUVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgZW5hYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGVuYWJsZUJ1dHRvbiA9IChidXR0b25FbGVtZW50LCBjb25maWcpID0+IHtcbiAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xufTtcblxuY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChidXR0b25FbGVtZW50LCBjb25maWcpID0+IHtcbiAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG59O1xuXG5jb25zdCByZXNldFZhbGlkYXRpb24gPSAoZm9ybUVsZW1lbnQsIGlucHV0TGlzdCwgY29uZmlnKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dCwgY29uZmlnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9IChmb3JtRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuaW5wdXRTZWxlY3RvcilcbiAgKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBjb25maWcpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGZvcm1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuZm9ybVNlbGVjdG9yKTtcbiAgZm9ybUxpc3QuZm9yRWFjaCgoZm9ybUVsZW1lbnQpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCwgY29uZmlnKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBlbmFibGVWYWxpZGF0aW9uLCByZXNldFZhbGlkYXRpb24sIGRpc2FibGVCdXR0b24sIHNldHRpbmdzIH07XG4iLCJpbXBvcnQge1xuICBlbmFibGVWYWxpZGF0aW9uLFxuICByZXNldFZhbGlkYXRpb24sXG4gIGRpc2FibGVCdXR0b24sXG4gIHNldHRpbmdzLFxufSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XG5cbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGltZzEgPSBuZXcgVVJMKFxuICBcIi4uL2ltYWdlcy8xLXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgaW1wb3J0Lm1ldGEudXJsXG4pO1xuY29uc3QgaW1nMiA9IG5ldyBVUkwoXG4gIFwiLi4vaW1hZ2VzLzItcGhvdG8tYnktY2VpbGluZS1mcm9tLXBleGVscy5qcGdcIixcbiAgaW1wb3J0Lm1ldGEudXJsXG4pO1xuY29uc3QgaW1nMyA9IG5ldyBVUkwoXG4gIFwiLi4vaW1hZ2VzLzMtcGhvdG8tYnktdHViYW51ci1kb2dhbi1mcm9tLXBleGVscy5qcGdcIixcbiAgaW1wb3J0Lm1ldGEudXJsXG4pO1xuY29uc3QgaW1nNCA9IG5ldyBVUkwoXG4gIFwiLi4vaW1hZ2VzLzQtcGhvdG8tYnktbWF1cmljZS1sYXNjaGV0LWZyb20tcGV4ZWxzLmpwZ1wiLFxuICBpbXBvcnQubWV0YS51cmxcbik7XG5jb25zdCBpbWc1ID0gbmV3IFVSTChcbiAgXCIuLi9pbWFnZXMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcbiAgaW1wb3J0Lm1ldGEudXJsXG4pO1xuY29uc3QgaW1nNiA9IG5ldyBVUkwoXG4gIFwiLi4vaW1hZ2VzLzYtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICBpbXBvcnQubWV0YS51cmxcbik7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS1PUEVOL0NMT1NFIE1PRFVMRSAoRWRpdCBQcm9maWxlKS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnRuXCIpO1xuY29uc3QgbW9kYWxDbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19idXR0b24tY2xvc2VcIik7XG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbW9kYWxcIik7XG5jb25zdCBlZGl0TW9kYWxOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1mb3JtXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xuXG5tb2RhbC5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpIHx8XG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19idXR0b24tY2xvc2VcIilcbiAgICApIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlRXNjYXBlKGV2dCkge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IGFjdGl2ZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XG4gICAgY2xvc2VNb2RhbChhY3RpdmVNb2RhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlRXNjYXBlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xufVxuXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZS50ZXh0Q29udGVudDtcbiAgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgcmVzZXRWYWxpZGF0aW9uKFxuICAgIHByb2ZpbGVGb3JtLFxuICAgIFtlZGl0TW9kYWxOYW1lSW5wdXQsIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXRdLFxuICAgIHNldHRpbmdzXG4gICk7XG4gIG9wZW5Nb2RhbChlZGl0TW9kYWwpO1xufSk7XG5cbnByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tT1BFTi9DTE9TRSBNT0RVTEUgKEFERCBDQVJEKS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IHByb2ZpbGVOZXdQb3N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uZXctcG9zdC1idG5cIik7XG5jb25zdCBwcm9maWxlQWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWZvcm1cIik7XG5jb25zdCBhZGRDYXJkTGlua0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWFkZC1jYXJkLWxpbmstaW5wdXRcIik7XG5jb25zdCBhZGRDYXJkQ2FwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1hZGQtY2FyZC1jYXB0aW9uLWlucHV0XCJcbik7XG5jb25zdCBhZGRDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLW1vZGFsXCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBpbnB1dFZhbHVlcyA9IHtcbiAgICBuYW1lOiBhZGRDYXJkQ2FwdGlvbklucHV0LnZhbHVlLFxuICAgIGxpbms6IGFkZENhcmRMaW5rSW5wdXQudmFsdWUsXG4gIH07XG5cbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpbnB1dFZhbHVlcyk7XG4gIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgY2xvc2VNb2RhbChhZGRDYXJkTW9kYWwpO1xuICBwcm9maWxlQWRkQ2FyZEZvcm0ucmVzZXQoKTtcbiAgZGlzYWJsZUJ1dHRvbihldnQuc3VibWl0dGVyLCBzZXR0aW5ncyk7XG59XG5cbnByb2ZpbGVOZXdQb3N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChhZGRDYXJkTW9kYWwpO1xufSk7XG5cbnByb2ZpbGVBZGRDYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DQVJEUyBBUlJBWS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJKb3NlcGgsIE9SXCIsXG4gICAgbGluazogaW1nMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiT3JlZ29uIENvYXN0XCIsXG4gICAgbGluazogaW1nMixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHVtYWxvIEZhbGxzLCBPUlwiLFxuICAgIGxpbms6IGltZzMsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNlbnRyYWwgT3JlZ29uIENhc2NhZGUgUmFuZ2VcIixcbiAgICBsaW5rOiBpbWc0LFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNdWx0bm9tYWggRmFsbHMsIE9SXCIsXG4gICAgbGluazogaW1nNSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU291dGhlcm4gT3JlZ29uXCIsXG4gICAgbGluazogaW1nNixcbiAgfSxcbl07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0FSRCBURU1QTEFURVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKTtcbmNvbnN0IGNhcmRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5jb25zdCBtb2RhbFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IG1vZGFsSW1hZ2VQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2UtcHJldmlld1wiKTtcbmNvbnN0IG1vZGFsQ2FwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlLWNhcHRpb25cIik7XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmROYW1lRWwgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2VFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnRuID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcblxuICBjYXJkTmFtZUVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBjYXJkSW1hZ2VFbC5zcmMgPSBkYXRhLmxpbms7XG4gIGNhcmRJbWFnZUVsLmFsdCA9IGRhdGEubmFtZTtcblxuICBjYXJkTGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRMaWtlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgfSk7XG5cbiAgY2FyZERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICAvLyBjYXJkIG1vZGFsIHByZXZpZXcgb3BlblxuICBjYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsSW1hZ2VQcmV2aWV3LnNyYyA9IGRhdGEubGluaztcbiAgICBtb2RhbEltYWdlUHJldmlldy5hbHQgPSBkYXRhLm5hbWU7XG4gICAgbW9kYWxDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuXG4gICAgb3Blbk1vZGFsKG1vZGFsUHJldmlldyk7XG4gIH0pO1xuXG4gIHJldHVybiBjYXJkRWxlbWVudDtcbn1cblxuLy8gLS0tLS0gY2FyZCBsb29wIC0tLS0tLVxuaW5pdGlhbENhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpdGVtKTtcbiAgY2FyZHNMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xufSk7XG5cbi8vIC0tLS0tLSBtb2RhbCBjbG9zZSBidXR0b24gLS0tLS0tXG5tb2RhbENsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdChcIi5tb2RhbFwiKTtcbiAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgfSk7XG59KTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwibyIsIm9iaiIsInByb3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwIiwiYiIsImRvY3VtZW50IiwiYmFzZVVSSSIsInNlbGYiLCJsb2NhdGlvbiIsImhyZWYiLCJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGlkZUlucHV0RXJyb3IiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImNvbmZpZyIsImVycm9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50Iiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJoYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlQnV0dG9uIiwiZW5hYmxlQnV0dG9uIiwiZGlzYWJsZWQiLCJhZGQiLCJpbWcxIiwiVVJMIiwiaW1nMiIsImltZzMiLCJpbWc0IiwiaW1nNSIsImltZzYiLCJwcm9maWxlRWRpdEJ1dHRvbiIsIm1vZGFsQ2xvc2VCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwiZWRpdE1vZGFsIiwiZWRpdE1vZGFsTmFtZUlucHV0IiwiZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCIsInByb2ZpbGVGb3JtIiwiaGFuZGxlRXNjYXBlIiwiZXZ0Iiwia2V5IiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZXNldFZhbGlkYXRpb24iLCJ2YWx1ZSIsImlucHV0IiwicHJldmVudERlZmF1bHQiLCJwcm9maWxlTmV3UG9zdEJ1dHRvbiIsInByb2ZpbGVBZGRDYXJkRm9ybSIsImFkZENhcmRMaW5rSW5wdXQiLCJhZGRDYXJkQ2FwdGlvbklucHV0IiwiYWRkQ2FyZE1vZGFsIiwiY2FyZEVsZW1lbnQiLCJnZXRDYXJkRWxlbWVudCIsIm5hbWUiLCJsaW5rIiwiY2FyZHNMaXN0IiwicHJlcGVuZCIsInJlc2V0Iiwic3VibWl0dGVyIiwiaW5pdGlhbENhcmRzIiwiY2FyZFRlbXBsYXRlIiwibW9kYWxQcmV2aWV3IiwibW9kYWxJbWFnZVByZXZpZXciLCJtb2RhbENhcHRpb24iLCJkYXRhIiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWwiLCJjYXJkSW1hZ2VFbCIsImNhcmRMaWtlQnRuIiwiY2FyZERlbGV0ZUJ0biIsInNyYyIsImFsdCIsInRvZ2dsZSIsIml0ZW0iLCJidXR0b24iLCJjbG9zZXN0Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==