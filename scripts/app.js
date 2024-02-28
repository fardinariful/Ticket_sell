const seatPrice = 550;
const ticketClass = "Economy";



const allbtn=document.getElementsByClassName("add-btn");



for(const btn of allbtn){
    btn.addEventListener("click",function(event){
        const seatname=event.target.innerText;


        const add_info=document.getElementById("show-info");
        const div= document.createElement("div");
        div.classList.add("flex","justify-between","w-full");

        const p1=document.createElement("div");
        const p2=document.createElement("div"); 
        const p3=document.createElement("div");

        p1.innerText=seatname;
        p2.innerText=ticketClass;
        p3.innerText=seatPrice;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
  
        add_info.appendChild(div);
        

        
        updatedtotalcost(seatPrice);
        
        updatedGrandTotal();
    })
 
    
}
function updatedGrandTotal(status) {


    if(status==undefined){
        const total_cost = document.getElementById("total-price").innerText;
    const sum1 = parseInt(total_cost) ;
    document.getElementById("grand-total").innerText = sum1;

    }

    else{
        const couponCode=document.getElementById("coupon-code").value;
           
        if(couponCode=="New15"){

        }

        else{
            alert("Please enter a valid coupon code")
        }
    }
    

}


function updatedtotalcost(value){

              
    
    const total_cost=document.getElementById("total-price");
    const sum=parseInt(total_cost.innerText)+value;
    total_cost.innerText=sum;
    
}






