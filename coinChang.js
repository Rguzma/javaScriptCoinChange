let Result= {};

function converter(amount) {
    let amount2=0
    let amount3=0
    let amount4=0
    // let amount5=0
    let substractA=0;
    let substractB= 0;
    let substractC= 0;
    let substractD= 0;
    let substractE= 0;

    
    substractA=amount/100; 
    dollars=Math.floor(substractA);
    console.log (dollars);
    Result['Dollar']=dollars;

    if (amount%100 > 0 ) {
        console.log ("amount "+amount);
        amount2=amount%100;
        substractB=amount2/25; 
        quarters=Math.floor(substractB);
        Result['Quarters']=quarters;
        console.log (substractB);
        
            if(amount2%25>0) {
            console.log ("amount2 "+amount2);
            amount3=amount2%25;
            substractC=amount3/10; 
            dimes=Math.floor(substractC);
            Result['Dimes']=dimes;
            console.log (substractC);
        
                if(amount3%10>0){
                    console.log ("amount3 "+amount3);
                    amount4=amount3%10;
                    substractD=amount4/5; 
                    nickels=Math.floor(substractD);
                    Result['Nickels']=nickels;
                    console.log (substractD);

                        if (amount4%5 >0){
                            console.log ("amount4 "+amount4);
                            substractE=(amount4%5); 
                            pennies=Math.floor(substractE);
                            Result['Pennies']=pennies;
                            console.log (substractE);
                            return Result;

                        }
                        else{
                            return Result;
                        }

                }
                else{
                    return Result;
                }
            }
            else{
                return Result;
            }
        


    }     
    else{
            return Result;
        }

}

console.log(converter(189));