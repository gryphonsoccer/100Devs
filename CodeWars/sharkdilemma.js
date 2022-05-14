function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
        pontoonDistance = pontoonDistance
        if(dolphin){
            sharkSpeed = sharkSpeed/2
        }else{
            sharkSpeed = sharkSpeed
        }
        while (pontoonDistance > 0 || sharkDistance>0){
            console.log(`you are ${pontoonDistance} meters away`);
            console.log(`the shark is ${sharkDistance} meters away`);
            sharkDistance -= sharkSpeed;
            pontoonDistance -= youSpeed;
            if(pontoonDistance<=0){
               return 'Alive';     
            }else if(sharkDistance<=0){
                return 'Shark Bait!'
            }


        }
}
console.log(shark(24, 0, 4, 8, true))