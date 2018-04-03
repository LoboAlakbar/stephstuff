
    //This is an array for the labs
    let num1 = [1,2,3,4];
    let num2 = [4,5,6,7];
    let planets = ["Venus", "Earth", "Mercury","Uranus","Neptune","Saturn","Mars","Jupiter"]


    function ShowPlanets()
    {
      console.log(planets[2]+", "+planets[0]+", "+planets[1]+", "+planets[6]+", "+planets[7]+", "+planets[5]+", "+planets[3]+", "+planets[4]);

    }

    function HardPlanets()
    {
      let total = 0;
      let solar = [2,0,1,6,7,5,3,4]
      let solarSystem = "";
      for(i=0; i<planets.length; i++){
        solarSystem += planets[solar[i]]
        solarSystem += ", ";
      }

      console.log(solarSystem);
    }


    // This is a function that will cycle through the arrays//
    function Add(num1)
    {
      let total = 0;
      for(i=0; i<num1.length; i++){
      total+= num1[i];
        }
        console.log(total);
    }

    function Average(num2)
    {
      let total = 0;
      let avg = 0;
      for(i=0; i<num2.length; i++){
        (total+= num2[i])
        }
        avg=total/num2.length
        console.log(avg);
    }

    function Combine()
    {
      let num3=[]
      for(i=0; i<num1.length; i++){
        num3.push(num1[i]+num2[i])

      }
      console.log(num3)
    }

    // This is a function for variable lenght arrays
    // function Combine2()
    // {
    //   let num3=[]
    //   for(i=0; i<num1.length; i++){
    //
    //     if(num1[i] != null && num2[i] != null)
    //     {
    //       num3.push(num1[i]+num2[i])
    //     }
    //     else if(num1[i] != null && num2[i] === null)
    //     {
    //       num3.push(num1[i]+0)
    //     }
    //     else if(num1[i] === null && num2[i] != null)
    //     {
    //       num3.push(0+num2[i])
    //     }
    //     else
    //     {
    //       num3.push(0+0)
    //     }
    //   }
    //   console.log(num3)
    // }
    // 
