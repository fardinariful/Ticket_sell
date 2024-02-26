const seatPrice = 550;
const ticketClass = "Economy";



const allbtn=document.getElementsByClassName("add-btn");
console.log(allbtn);


for(const btn of allbtn){
    btn.addEventListener("click",function(event){
        console.log(event.target.innerText);
    })
}


