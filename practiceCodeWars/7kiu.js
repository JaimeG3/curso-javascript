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