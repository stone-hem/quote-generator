//get the elements by ids
const quoteId=document.querySelector('#card_quote_id');
const quoteText=document.querySelector('#card_quote');




//use fetch api to get data
fetch('https://api.adviceslip.com/advice')
.then(response =>response.json())
.then((data)=>{
    //fill data
    quoteId.innerHTML=data.slip.id??"...";
    quoteText.innerHTML=data.slip.advice??"Loading quote ...";
})