let colorNumbers = [0,1,2,3,4,5,6,7,8,9,"a","b","d","c","e","f"]

let changeColor = document.getElementById('changeColor')




changeColor.addEventListener('click', colorGradient);


function genColor(){
            let hexColor = "#"

                    for(var i = 0; i<6; i++){
                        hexColor += colorNumbers[Math.floor(Math.random() * colorNumbers.length)]
                    }
                    return hexColor;

                   
                }

function colorGradient(){
            let input1 = genColor();
            let input2 = genColor();

            let input3 = genColor();
            let input4 = genColor();

            let input5 = genColor();
            let input6 = genColor();


            colorgradients0.style.background = `linear-gradient(90deg, ${input1}, ${input2})`
            colorgradients1.style.background = `linear-gradient(90deg, ${input3}, ${input4})`
            colorgradients2.style.background = `linear-gradient(90deg, ${input5}, ${input6})`


            cardtext.innerHTML = `linear-gradient(90deg, ${input1}, ${input2})`
            cardtext1.innerHTML = `linear-gradient(90deg, ${input3}, ${input4})`
            cardtext2.innerHTML = `linear-gradient(90deg, ${input5}, ${input6})`

        

        

         };

      

      

colorGradient()


