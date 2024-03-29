let cInput = '', result = 0

function showDisplay(value){
     cInput += value
     document.getElementById('display').textContent = cInput
}

function clearDisplay(){
     cInput = ''
     document.getElementById('display').textContent = '0'
}

function cResult(){
     try{
          result = eval(cInput)
          document.getElementById('display').textContent = result
     } catch(error){
          document.getElementById('display').textContent = 'Error'
     }
}