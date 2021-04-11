function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

 
  
  const Seattle ={
    maxcustomer:65,
    mincustomer: 23,
    avgCookies:6.3,
    customerPer:0,
    sumofcookies:0,
    amountofCookies:[0],
    customerPerArr:[0],
    workinghours:['6 am ','7 am ','8 am ',' 9 am ',' 10 am ',' 11 am ', ' 12 pm ', '1 pm ',' 2 pm ',' 3 pm ', '4 pm',' 5 pm ',' 6 pm ',' 7 pm '  ],
    getcustomerPer:function(){
        this.customerPer= randomValue(this.mincustomer,this.maxcustomer);
        console.log(this.customerPer)
    },
   
    
    getamountofCookies:function(){
        

        let container=document.getElementById('fancy');
        console.log(container);
        let h2=document.createElement('h2')
        container.appendChild(h2)
        h2.textContent=`Seattle`
        let nav=document.createElement('nav');
        container.appendChild(nav);

        for (let i=0 ; i<=13 ; i++){
            
            Seattle.getcustomerPer()
            this.amountofCookies[i]=this.customerPer*this.avgCookies
            this.customerPerArr[i]=this.customerPer
            this.sumofcookies=this.sumofcookies+this.amountofCookies[i]
           
            let li=document.createElement('li');
            nav.appendChild(li);  
            li.textContent=`${this.workinghours[i]} : ${this.amountofCookies[i]}`;

        }
        
        let li=document.createElement('li');
        nav.appendChild(li);  
        li.textContent=`Total : ${this.sumofcookies} `

        console.log(this.amountofCookies)
        console.log(this.customerPerArr)
        console.log(this.sumofcookies)
        console.log(this.workinghours)
    },

    
    
 }
Seattle.getcustomerPer();
Seattle.getamountofCookies();

