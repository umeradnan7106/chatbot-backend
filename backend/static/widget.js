// // chatbot-service/backend/static/widget.js

// // widget.js - embeddable script (drop this on any page)
// // Place this file at: chatbot-service/backend/static/widget.js
// (function () {
//   // === CONFIG ===
//   // URL to the hosted widget page (where widget.html is served)
//   // default assumes widget.html is at "/widget"
//   const WIDGET_URL = (function(){
//   // check agar script tag me data-widget diya ho
//   try {
//     const currentScript = document.currentScript;
//     const attr = currentScript && currentScript.getAttribute('data-widget');
//     if(attr) return attr;
//   } catch(e){}

//   // fallback: hardcode backend ka widget HTML URL
//   return 'https://chatbot-backend-production-f970.up.railway.app/widget';
// })();

//   // === Create floating button ===
//   const btn = document.createElement('div');
//   btn.id = 'chatbot-button-embed';
//   btn.title = 'Open chat';
//   btn.style.position = 'fixed';
//   btn.style.bottom = '20px';
//   btn.style.right = '20px';
//   btn.style.width = '60px';
//   btn.style.height = '60px';
//   btn.style.borderRadius = '50%';
//   btn.style.background = 'linear-gradient(90deg,#2563eb,#4f46e5)';
//   btn.style.boxShadow = '0 8px 24px rgba(37,99,235,0.28)';
//   btn.style.color = 'white';
//   btn.style.display = 'grid';
//   btn.style.placeItems = 'center';
//   btn.style.cursor = 'pointer';
//   btn.style.zIndex = 2147483647;
//   btn.style.fontSize = '26px';
//   btn.innerText = '💬';
//   document.body.appendChild(btn);

//   // === Create container for iframe ===
//   const container = document.createElement('div');
//   container.id = 'chatbot-embed-container';
//   container.style.position = 'fixed';
//   container.style.bottom = '90px';
//   container.style.right = '20px';
//   container.style.width = '380px';
//   container.style.height = '520px';
//   container.style.borderRadius = '14px';
//   container.style.overflow = 'hidden';
//   container.style.boxShadow = '0 12px 40px rgba(2,6,23,0.2)';
//   container.style.transform = 'translateY(20px)';
//   container.style.opacity = '0';
//   container.style.transition = 'opacity 220ms ease, transform 220ms ease';
//   container.style.zIndex = 2147483646;
//   container.style.display = 'none'; // hidden initially
//   document.body.appendChild(container);

//   // iframe element
//   const iframe = document.createElement('iframe');
//   iframe.src = WIDGET_URL;
//   iframe.style.width = '100%';
//   iframe.style.height = '100%';
//   iframe.style.border = '0';
//   iframe.style.display = 'block';
//   iframe.setAttribute('title','Chat widget');
//   container.appendChild(iframe);

//   // state
//   let open = false;

//   // toggle function
//   function openWidget(){
//     if(open) return;
//     open = true;
//     container.style.display = 'block';
//     // small animation
//     requestAnimationFrame(()=> {
//       container.style.transform = 'translateY(0)';
//       container.style.opacity = '1';
//     });
//     btn.innerText = '✕';
//   }
//   function closeWidget(){
//     if(!open) return;
//     open = false;
//     container.style.transform = 'translateY(20px)';
//     container.style.opacity = '0';
//     btn.innerText = '💬';
//     setTimeout(()=> { if(!open) container.style.display = 'none'; }, 230);
//   }
//   function toggleWidget(){ open ? closeWidget() : openWidget(); }

//   btn.addEventListener('click', toggleWidget);

//   // allow iframe to request close (when widget.html posts a message)
//   window.addEventListener('message', (ev)=>{
//     if(!ev.data) return;
//     if(ev.data && ev.data.type === 'widget-close'){
//       closeWidget();
//     }
//   });

//   // open cookie/first visit welcome hint (optional)
//   // show once per session
//   try {
//     const shown = sessionStorage.getItem('chatbot_hint_shown');
//     if(!shown){
//       btn.classList.add('chatbot-hint');
//       sessionStorage.setItem('chatbot_hint_shown','1');
//       // small pulse animation
//       btn.animate([
//         { transform: 'scale(1)' },
//         { transform: 'scale(1.08)' },
//         { transform: 'scale(1)' }
//       ], { duration: 900, iterations: 2 });
//     }
//   } catch(e){}
// })();














// widget.js - embeddable script (drop this on any page)
// Place this file at: chatbot-service/backend/static/widget.js
(function () {
  // === CONFIG ===
  // URL to the hosted widget page (where widget.html is served)
  const WIDGET_URL = (function(){
    // try data-widget attribute on script tag
    try {
      const currentScript = document.currentScript;
      const attr = currentScript && currentScript.getAttribute('data-widget');
      if(attr) return attr;
    } catch(e){}

    // fallback: direct backend widget URL
    return 'https://chatbot-backend-production-f970.up.railway.app/widget';
  })();

  // === Create floating button ===
  const btn = document.createElement('div');
  btn.id = 'chatbot-button-embed';
  btn.title = 'Open chat';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.width = '60px';
  btn.style.height = '60px';
  btn.style.borderRadius = '50%';
  btn.style.background = 'linear-gradient(90deg,#2563eb,#4f46e5)';
  btn.style.boxShadow = '0 8px 24px rgba(37,99,235,0.28)';
  btn.style.color = 'white';
  btn.style.display = 'grid';
  btn.style.placeItems = 'center';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = 2147483647;
  btn.style.fontSize = '26px';
  btn.innerText = '💬';
  document.body.appendChild(btn);

  // === Create container for iframe ===
  const container = document.createElement('div');
  container.id = 'chatbot-embed-container';
  container.style.position = 'fixed';
  container.style.bottom = '90px';
  container.style.right = '20px';
  container.style.width = '380px';
  container.style.height = '520px';
  container.style.borderRadius = '14px';
  container.style.overflow = 'hidden';
  container.style.boxShadow = '0 12px 40px rgba(2,6,23,0.2)';
  container.style.transform = 'translateY(20px)';
  container.style.opacity = '0';
  container.style.transition = 'opacity 220ms ease, transform 220ms ease';
  container.style.zIndex = 2147483646;
  container.style.display = 'none'; // hidden initially
  document.body.appendChild(container);

  // === Create iframe ===
  const iframe = document.createElement('iframe');
  iframe.src = WIDGET_URL;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';
  iframe.style.display = 'block';
  iframe.setAttribute('title','Chat widget');
  container.appendChild(iframe);

  // === State ===
  let open = false;

  function openWidget(){
    if(open) return;
    open = true;
    container.style.display = 'block';
    requestAnimationFrame(()=> {
      container.style.transform = 'translateY(0)';
      container.style.opacity = '1';
    });
    btn.innerText = '✕';
  }

  function closeWidget(){
    if(!open) return;
    open = false;
    container.style.transform = 'translateY(20px)';
    container.style.opacity = '0';
    btn.innerText = '💬';
    setTimeout(()=> { if(!open) container.style.display = 'none'; }, 230);
  }

  function toggleWidget(){ open ? closeWidget() : openWidget(); }

  btn.addEventListener('click', toggleWidget);

  // Allow iframe to request close
  window.addEventListener('message', (ev)=>{
    if(ev.data && ev.data.type === 'widget-close'){
      closeWidget();
    }
  });

  // Optional: first visit hint animation
  try {
    const shown = sessionStorage.getItem('chatbot_hint_shown');
    if(!shown){
      sessionStorage.setItem('chatbot_hint_shown','1');
      btn.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.08)' },
        { transform: 'scale(1)' }
      ], { duration: 900, iterations: 2 });
    }
  } catch(e){}
})();
