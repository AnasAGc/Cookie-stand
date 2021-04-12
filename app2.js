function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let workinghours = ['6 am ','7 am ','8 am ',' 9 am ',' 10 am ',' 11 am ', ' 12 pm ', '1 pm ',' 2 pm ',' 3 pm ', '4 pm',' 5 pm ',' 6 pm ',' 7 pm '  ];

let arryofObject=[];
 

Stores.prototype.getcustomerPer = function(){
    this.customerPer=randomValue(this.mincustomer,this.maxcustomer)
    console.log(this.customerPer)
}




function Stores(maxcustomer,mincustomer,avgCookies,customerPer){
    this.maxcustomer=maxcustomer;
    this.mincustomer=mincustomer;
    this.avgCookies=avgCookies;
    this.customerPer=customerPer;
    this.customerPer=0;
    this.sumofcookies=0;
    this.amountofCookies=0;
    this.customerPerArr=[];
    arryofObject.push(this);



};




  
  const Seattle ={
    maxcustomer:65,
    mincustomer: 23,
    avgCookies:6.3,
    customerPer:0,
    sumofcookies:0,
    amountofCookies:[0],
    customerPerArr:[0],
    getcustomerPer:function(){
        this.customerPer= randomValue(this.mincustomer,this.maxcustomer);
        console.log(this.customerPer)
    },
   
    
    getamountofCookies:function(){
        

        for (let i=0 ; i<=13 ; i++){
            
            Seattle.getcustomerPer()
            this.amountofCookies[i]=this.customerPer*this.avgCookies
            this.customerPerArr[i]=this.customerPer
            this.sumofcookies=this.sumofcookies+this.amountofCookies[i]
           
        }
        
        let li=document.createElement('li');
        nav.appendChild(li);  
        li.textContent=`Total : ${this.sumofcookies} `

        
    },

    
 }
Seattle.getcustomerPer();
Seattle.getamountofCookies();




