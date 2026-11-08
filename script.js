const buyButton=document.getElementById("buyButton");
const notice=document.getElementById("notice");
buyButton.addEventListener("click",()=>{
  notice.textContent="A loja ainda está em configuração. Adicione seu WhatsApp ou link de pagamento antes de publicar as vendas.";
  notice.classList.add("show");
  window.setTimeout(()=>notice.classList.remove("show"),4500);
});