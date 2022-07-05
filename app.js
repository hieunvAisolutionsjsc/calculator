let result =0;
let arrP = [] ; 
let arrC = [] ; 
let stringRender ="";

function operator(c ,p1 ,p2 ){
   switch (c) {
    case "X":
        result = p1*p2 
        break;
    case "/" : 
    result = p1/p2
   break;
   case "+" : 
    result = p1+p2
   break;
   case "-" : 
    result = p1-p2
   break;
    default:
        break;
   }
}
function renderString(input){
    const inputRe = document.getElementById("result") ; 
    let count = 0 ; 
    console.log(input)
    if(input === ""){
        stringRender = result
    }
    else{
        stringRender+=input
     
    }
    inputRe.setAttribute("value" , stringRender )
 
}

function renderResult(){
console.log(arrC)
arrC.forEach((p , index) => {
    
    if(index===0 ){
   
     operator( p , arrP[index] , arrP[index+1])
    }else{
        operator( p , result , arrP[index+1])
    }

});
renderString("");

}
function createE(inputArr){
    const input = document.getElementById("input");
    let endNumber = true  ; console.log(input);
    const elementContainer = document.createElement("div");
inputArr.forEach(input => {
    

    const elementInput = document.createElement("button");
    elementInput.onmousedown =()=>{
        elementInput.style.background = "rgb(98, 175, 162)"
    }
    elementInput.onmouseup =()=>{
        elementInput.style.background = "rgb(235, 232, 232)"
    }
    elementInput.onclick = (e)=>{

        !isNaN(input) ? (
            endNumber ? 
            (arrP.push(input) ,
            console.log("first"), 
              endNumber= false 
            ) : 
           arrP = arrP.map((element , index)=> {
            return index === arrP.length -1 ?  parseInt( element.toString()+input.toString()) : element  
           }
           
           ),
           renderString(input) 
        ) 
          
        : (input === "CE") ? ( deletePart() , endNumber = true ) 
        : (input === "C" ) ? (stringRender= "" , renderString(" ") , arrC =[] , arrP = [], endNumber = true ) 
        : (input === "=") ?  (renderResult(), endNumber = true ) 
        : (arrC.push(input), endNumber = true  ,  renderString(input) ) ;
        
        console.log(endNumber,arrP,arrC)
        


    }
    elementInput.innerHTML = input;
    elementContainer.append(elementInput) ; 


  
});
console.log(elementContainer)
input.append( elementContainer)
}

function main(){
  
    
    const inputArr = [
        "CE" , "C"  , 0,
        "X" , 7,8,9,
        "-", 4,5,6 ,
        "+" ,  1,2,3,
         , "/" ,"="
    ]
    createE(inputArr);
    
}
main();