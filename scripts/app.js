const seatPrice = 550;
const ticketClass = "Economy";
const seatCapacity=40;



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

        // update seat number

const seatleft=document.getElementById("seat-left").innerText;
// const converseatleft= parseInt(seatleft);
// document.getElementById("seat-left").innerText=seatCapacity-1;

document.getElementById("seat-left").innerText=seatleft-1;



const seattaken=document.getElementById("seat-taken").innerText;
const converseattaken= parseInt(seattaken);
// document.getElementById("seat-left").innerText=seatCapacity-1;

document.getElementById("seat-taken").innerText=converseattaken+1;

    })


 
    
}




function updatedGrandTotal() {
    
    
    
        const total_cost = document.getElementById("total-price").innerText;
        const sum1 = parseInt(total_cost) ;
        document.getElementById("grand-total").innerText = sum1;

    

    

        const couponCode=document.getElementById("coupon-code").value;
           
        if(couponCode ==="Couple 20"){
            const discount= sum1*0.2;
            document.getElementById("grand-total").innerText=sum1-discount;
           
             
        }

        else if(couponCode ==="New15"){
            const discount= sum1*0.15;
            document.getElementById("grand-total").innerText=sum1-discount;
           
             
        }

        else if(couponCode){
            alert("Please enter a valid coupon code");
        }
    }
    




function updatedtotalcost(value){

    const total_cost=document.getElementById("total-price");
    const sum=parseInt(total_cost.innerText)+value;
    total_cost.innerText=sum;
    
}







