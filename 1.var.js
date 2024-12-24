var e=10;
    var b=20;
    var c=e+b;
    console.log("Sum of two number is="+c)

 // (1).var is a fuction scoped use

  var f=5
     {
         var f=7                
         console.log(f)
     }
     console.log(f)

// (2).redclear allowed in var

     var g=10;
     var g=20;                  
     console.log(g)

// (3).reassignment is allowed in var

       var a=5; 
        a=10;            
        console.log(a)
