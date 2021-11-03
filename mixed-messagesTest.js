 
 
  const randomNum = num => {
     return Math.ceil(Math.random() * 6);
  };
  const vehicle = randomNum();
  const countries = randomNum();
  const timeToLeave = randomNum();
  


  const printMessage = (vehicle, countries, timeToLeave) => {
         switch (vehicle) {
            case 1: 
            vehicle = "car"
            break;
            case 2: 
            vehicle = "boat"
            break;
            case 3: 
            vehicle = "plane"
            break;
            case 4: 
            vehicle = "train"
            break;
            case 5: 
            vehicle = "spaceship"
            break;
            case 6: 
            vehicle = "tractor"
            break;
          
        }
        switch (countries) {
            case 1: 
            countries = "England"
            break;
            case 2: 
            countries = "Denmark"
            break;
            case 3: 
            countries = "Canada"
            break;
            case 4: 
            countries = "Russia"
            break;
            case 5: 
            countries = "Bulgaria"
            break;
            case 6: 
            countries = "Japan"
            break;
        } 
        switch (timeToLeave) {
            case 1:
            timeToLeave = "6:00 AM"    
            break;  
            case 2:
            timeToLeave = "8:00 AM"    
            break;  
            case 3:
            timeToLeave = "10:00 AM"    
            break;  
            case 4:
            timeToLeave = "12:00 PM"    
            break;  
            case 5:
            timeToLeave = "3:00 PM"    
            break;  
            case 6:
            timeToLeave = "8:00 PM"    
            break;  
            
        } 
        console.log(`You will travel to ${countries} by ${vehicle} at ${timeToLeave}`);
  }

  printMessage(randomNum(),randomNum(),randomNum())


// for (i = 0; i < 10; i++) {
//      const stuff1 = randomNum();
     
//      if  (stuff1 === 1) {
//         console.log(stuff1)
//         console.log("it's 1!")
//         break;
//     } else {
//         console.log(stuff1)
//     }

// }


