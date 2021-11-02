 
 
//  const randomNum = num => {
//     return Math.ceil(Math.random() * 10);
//  };
// let randomNum = 

for (i = 0; i < 10; i++) {
    const randomNum = () => {
        return Math.ceil(Math.random() * 10);
    };
    const stuff1 = randomNum();
     
     if  (stuff1 === 1) {
        console.log(stuff1)
        console.log("it's 1!")
        break;
    } else {
        console.log(stuff1)
    }

}


