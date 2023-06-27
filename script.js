
const btnPlay = document.getElementById("btn-play")
const btnClear = document.getElementById("btn-clear")
const btnShare = document.getElementById("btn-share")
const btnShareTxt = document.querySelector(".btn-share-txt")
let imgEl = document.getElementById("img-el")
let txtBegin = document.getElementById("text-begins")
let txtEl = document.getElementById("text-el")
let txtEl1 = document.getElementById("text-el1")
let txtEl2 = document.getElementById("text-el2")
let divMessage = document.getElementById("div-messsage")
let numbers = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
let messages = []
const title = document.querySelector(".title") 
const subTitle = document.querySelector(".sub-title") 
const flagBrazil = document.getElementById("img-flag-brazil")
const flagUsa = document.getElementById("img-flag-usa")
let idiomFlag = "english"

  flagBrazil.addEventListener("click", function(){
    idiomFlag = "portuguese";
    txtBegin.textContent = "No presente momento você está"
    btnPlay.textContent = "Jogar!"
    btnClear.textContent = "Jogar novamente"
    btnShareTxt.textContent = "Compartilhe!"
    flagBrazil.style.border = "solid 1px #a70657"
    flagBrazil.style.padding = "2px"
    flagUsa.style.border = "none"
    flagUsa.style.padding = "none"
    title.textContent = "Oráculo Profissional"
    subTitle.textContent = "Reflita sobre seu momento profissional, desafios e oportunidades."
  });
  



  flagUsa.addEventListener("click", function(){
    idiomFlag = "english"
    txtBegin.textContent = "At the present moment you are"
    btnPlay.textContent = "Play!"
    btnClear.textContent = "Play again"
    btnShareTxt.textContent = "Share!!"
    flagUsa.style.border = "solid 1px #a70657"
    flagUsa.style.padding = "2px"
    flagBrazil.style.border = "none"
    flagBrazil.style.padding = "none"
    title.textContent = "Professional Oracle"
    subTitle.textContent = "Reflect on your professional moment, challenges and opportunities."
  }) 

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

    flagBrazil.style.display = "none"
    flagUsa.style.display = "none"    
    title.style.display = "none"   
    subTitle.style.display = "none" 
    btnPlay.style.display = "none"
    btnClear.style.display = "block"
    btnShare.style.display = "block"
    txtBegin.style.display = "block"

  
      
    imgEl.src = presentMoment[messages[0]][0] 
    imgEl.style.display = "block"

    if(idiomFlag === "english"){
    txtEl.textContent = presentMoment[messages[0]][1] + " "
    txtEl1.textContent = obstacleMessage[messages[1]][0] + " "
    txtEl2.textContent = adviceMessage[messages[2]][0] + " "
    }
          
    if(idiomFlag === "portuguese"){
      txtEl.textContent = presentMoment[messages[0]][2] + " "
      txtEl1.textContent = obstacleMessage[messages[1]][1] + " "
      txtEl2.textContent = adviceMessage[messages[2]][1] + " "
      
      }
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
    title.style.display = "block"   
    subTitle.style.display = "block" 
    btnShare.style.display = "none"
    flagBrazil.style.display = "block"
    flagUsa.style.display = "block" 
       
  })

 
  
  






