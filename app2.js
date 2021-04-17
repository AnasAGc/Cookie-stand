function randomValue(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let workinghours = ['         ','6 am ','7 am ','8 am ',' 9 am ',' 10 am ',' 11 am ', ' 12 pm ', '1 pm ',' 2 pm ',' 3 pm ', '4 pm',' 5 pm ',' 6 pm ',' 7 pm '  ];

let arryofObject=[];
 

Stores.prototype.getcustomerPer = function(){
    this.customerPer=randomValue(this.mincustomer,this.maxcustomer);
};

// Stores.prototype.

Stores.prototype.amountofCookiess = function(){

    for (let j = 0; j < 14; j++) {
        this.getcustomerPer()
        this.customerPerArr[j]=this.customerPer;
        this.amountofCookies[j]=Math.ceil(this.customerPer*this.avgCookies);
        this.sumofcookies=this.sumofcookies+this.amountofCookies[j];
    };
}
    

      
    Stores.prototype.rander=function(){

    
    let headerRow2 =document.createElement('tr');
    table.appendChild(headerRow2)
    let cityname=document.createElement('td');
    headerRow2.appendChild(cityname)
    cityname.textContent=this.names;
    

    for (let i = 0; i < this.amountofCookies.length; i++) {

    let cookiesPer=document.createElement('td')
    headerRow2.appendChild(cookiesPer)
    cookiesPer.textContent=this.amountofCookies[i]

    }
    let totalday=document.createElement('td')
            headerRow2.appendChild(totalday)
            totalday.textContent=this.sumofcookies
 
};



function Stores(names,maxcustomer,mincustomer,avgCookies){
    this.names=names
    this.maxcustomer=maxcustomer;
    this.mincustomer=mincustomer;
    this.avgCookies=avgCookies;
    this.customerPer=0;
    this.sumofcookies=0;
    this.amountofCookies=[];
    this.customerPerArr=[];
    arryofObject.push(this);

};




    let seattle = new Stores('seattle',65,23,6.3,0);
    let Tokyo   = new Stores('Tokyo',24,3,1.2);
    let Dubai   = new Stores('Dubai',38,11,3.7);
    let Paris   = new Stores('Paris',38,20,2.3);
    let Lima   = new Stores('Lima',16,2,4.6);





    let container=document.getElementById('fancy')
    let table = document.createElement('table');
      container.appendChild(table)
    let headerRow1 = document.createElement('tr');
        table.appendChild(headerRow1)
    for (let i = 0; i < workinghours.length; i++) {
        let headers=document.createElement('th')
        headerRow1.appendChild(headers)
       headers.textContent = workinghours[i]
     }
     let headers=document.createElement('th')
        headerRow1.appendChild(headers)
       headers.textContent = 'Daily Location Total'



       let sumhors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];


        for (let i = 0; i < arryofObject.length; i++) {
            
            arryofObject[i].amountofCookiess();
            arryofObject[i].rander();

            
            for (let j = 0; j < 14; j++) {

                sumhors[j]=sumhors[j] + arryofObject[i].amountofCookies[j]
                
            }


        };
        console.log(sumhors);

        console.log(arryofObject);

        let headerRow3 = document.createElement('tr');
        table.appendChild(headerRow3)
        let hoursum=document.createElement('td')
            headerRow3.appendChild(hoursum)
            hoursum.textContent="  "
          
            let  sumtotal=0;
        for (let i = 0; i < sumhors.length; i++) {
            let hoursum=document.createElement('td')
            headerRow3.appendChild(hoursum)
            hoursum.textContent=sumhors[i]
            sumtotal=sumtotal+sumhors[i]
            
        }
        let sumofTotals=document.createElement('td');
            headerRow3.appendChild(sumofTotals);
            sumofTotals.textContent=sumtotal

