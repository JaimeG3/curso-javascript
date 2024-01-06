function openOrSenior(data){
    // ...
    let output = []
    let array = data
    array.forEach(function(element){
      const [age,handicap] = element
      if(age>=55 && handicap>7){
        output.push("Senior")
      }else{
        output.push("Open")
      }
    })
    return output
  }
    // ...
function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }


//EVEN OR ODD
  function oddOrEven(array) {
    //enter code here
   let result = ""
   let sum = array.reduce((accrued,current) => accrued + current,0)
   return sum % 2 === 0 ? "even" : "odd"
 }
  // ...
 function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }