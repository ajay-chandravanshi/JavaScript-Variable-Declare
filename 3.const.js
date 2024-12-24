const b=10;
console.log(b);   
{
  const pi=3.14;
  console.log(pi);
  console.log(b);
}     
// (1).const is a block-scoped use

const a=5
{
    const a=7                 
    console.log(a)
}
console.log(a)

// (2).redclear not allowed in const

     // const a=10;
     // const a=20;          

// (3).reassignment is  not allowed in  const

    // const a=5; 
    // a=10;                
    // console.log(a)
