const quoteId=document.querySelector('#card_quote_id');
const quoteText=document.querySelector('#card_quote');

console.log(quoteText);

fetch('https://api.adviceslip.com/advice')
.then(response =>response.json())
.then((data)=>{
    quoteId.innerHTML=data.slip.id??"...";
    quoteText.innerHTML=data.slip.advice??"Loading quote ...";
})