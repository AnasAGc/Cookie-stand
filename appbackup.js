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

        
    },

    
    
 }
Seattle.getcustomerPer();
Seattle.getamountofCookies();







const Tokyo ={
    maxcustomer:24,
    mincustomer: 3,
    avgCookies:1.2,
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
        h2.textContent=`Tokyo`
        let nav=document.createElement('nav');
        container.appendChild(nav);

        for (let i=0 ; i<=13 ; i++){
            
            Tokyo.getcustomerPer()
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

        
    },

    
    
 }
Tokyo.getcustomerPer();
Tokyo.getamountofCookies();








const Dubai ={
    maxcustomer:38,
    mincustomer: 11,
    avgCookies:3.7,
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
        h2.textContent=`Dubai`
        let nav=document.createElement('nav');
        container.appendChild(nav);

        for (let i=0 ; i<=13 ; i++){
            
            Dubai.getcustomerPer()
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

        
    },

    
    
 }
Dubai.getcustomerPer();
Dubai.getamountofCookies();




const Paris ={
    maxcustomer:38,
    mincustomer: 20,
    avgCookies:2.3,
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
        h2.textContent=`Paris`
        let nav=document.createElement('nav');
        container.appendChild(nav);

        for (let i=0 ; i<=13 ; i++){
            
            Paris.getcustomerPer()
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

        
    },

    
    
 }
Paris.getcustomerPer();
Paris.getamountofCookies();







const Lima ={
    maxcustomer:16,
    mincustomer: 2,
    avgCookies:4.6,
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
        h2.textContent=`Lima`
        let nav=document.createElement('nav');
        container.appendChild(nav);

        for (let i=0 ; i<=13 ; i++){
            
            Lima.getcustomerPer()
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

        
    },

    
    
 }
Lima.getcustomerPer();
Lima.getamountofCookies();
