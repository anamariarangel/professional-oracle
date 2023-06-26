
let btnPlay = document.getElementById("btn-play");
  let btnClear = document.getElementById("btn-clear");
  let imgEl = document.getElementById("img-el");
  let txtBegin = document.getElementById("text-begins")
  let txtEl = document.getElementById("text-el");
  let txtEl1 = document.getElementById("text-el1");
  let txtEl2 = document.getElementById("text-el2");
  let divMessage = document.getElementById("div-messsage");
  let numbers = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  let messages = []
    
  
  //display 3 aleatory messages 
  function aleatoryNumber() { let aleatoryNum =  Math.floor(Math.random() * 21); 
                              return aleatoryNum
                              
  }

  function messageNumbers(){
    let number1 = aleatoryNumber()
    let number2 = aleatoryNumber()
    let number3 = aleatoryNumber()

    while(number1 === number2){
      number2 = aleatoryNumber()
    }

    while(number1 === number3) {
      number3 = aleatoryNumber()
    }

   messages = [number1, number2, number3]
    console.log(messages)
  }


   btnPlay.addEventListener("click", function() {

    messageNumbers()
    
       
    btnPlay.style.display = "none"
    btnClear.style.display = "block"
    txtBegin.style.display = "block"
       
    imgEl.src = presentMoment[messages[0]][0] 
    imgEl.style.display = "block"
    txtEl.textContent = presentMoment[messages[0]][1] + " "
    txtEl1.textContent = obstacleMessage[messages[1]][0] + " "
    txtEl2.textContent = adviceMessage[messages[2]][0] + " "
            
  });

  btnClear.addEventListener("click", function(){
    numbers = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    imgEl.src = ""
    imgEl.style.display = "none"
    btnPlay.style.display = "block"
    txtBegin.style.display = "none"
    txtEl.textContent = ""
    txtEl1.textContent = ""
    txtEl2.textContent = ""
    btnClear.style.display = "none"  
   
  })

 
  
  






