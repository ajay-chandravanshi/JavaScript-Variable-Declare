let num=10;
let fname="Anirudh";
{
    let b=2;
    console.log(b + num);
}

// (1).let is a Block-scoped use

 let a=5
 {
     let a=7              
     console.log(a)
 }
 console.log(a)

  // (2).redclear not allowed in let

    //  let a=10;
    //  let a=20;         

 // (3).reassignment is allowed in let
 
    let d=5; 
    d=10;            
    console.log(d)