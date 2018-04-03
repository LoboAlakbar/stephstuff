
/*
  PEDMAS
  Parentheses ()
  Exponents
  Mulitplication *
  Division /
  Addition +
  Subtracction - 
  
    clear(); will clear your console
    Increment ++
    Decrement --
    
    += Increments by what ever you tell it to
    -= Decrements by value you name you choose
    *=
    /=
    
    console.log(cars[i]); These will go negative
    arrays is []
    
    ojbect oriented programming
    all objects have properties and methods/functions
    
    array.length = property
    array.push = function
        .xxxxxxx = picking up a subproperty of the subproperty
*/
        
    //This is an array of cars
    let cars = ["audi", "ford", "BMW", "cheve"];
    //This is a function that will cycle through the arrays
    function ShowCars(listOfCars)
    {
      for(i=0; i<listOfCars.length; i++){
        console.log(listOfCars[i]);
        }
    }
    function AddSome(n){
        console.log(n+10);
    }
    
    function MyName(name,age){
      console.log("My name is "+ name+". I am "+ age+ " years old.");
    }
    
    function Var(x) {
      console.log(x*10)
      
    }
    
    function Write(e){
      var x = e.clientX;
      var y = e.clientY;
      var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
      
    }