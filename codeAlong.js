
localStorage.setItem('secret', 1234)
localStorage.setItem('name', 'danny')
localStorage.setItem('age', 26)

localStorage.setItem("secret", "poop")
console.log(localStorage.getItem('secret'))
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('age'))

let data = {
  title: "My favorite data",
  submittedBy: "Fred",
  points: 1337
}

let arr = [2,4,6,8,"youv'e been staying up too late"]

document.addEventListener('DOMContentLoaded', function(){

  localStorage.setItem('data', JSON.stringify(data))
  console.log(localStorage)

let getArr = JSON.parse(localStorage.getItem('arr'))
console.log(getArr)

  localStorage.setItem('arr', JSON.stringify(arr))
  console.log(localStorage)

  let retrievedlocalStorage = JSON.parse(localStorage.getItem("data"))
  console.log(retrievedlocalStorage)

})

document.addEventListener('DOMContentLoaded', function(){



  let h1 = document.querySelector('h1')
  let div = document.createElement('div')
  div.innerText = "no data yet"
  h1.after(div)
})
