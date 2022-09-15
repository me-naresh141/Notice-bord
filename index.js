let title = document.getElementById('title')
let text = document.getElementById('text')
let submitBtn = document.querySelector('button')
let root = document.querySelector('.root')
let form = document.querySelector('form')


let data = JSON.parse(localStorage.getItem('todos')) || []

function handlEdit(e, info, id) {
  let input = document.createElement('input')
  input.value = info
  input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      let updateValue = e.target.value
      data[id].title = updateValue
      createUi(data)
    }
  })
  let parent = e.target.parentElement
  parent.replaceChild(input, e.target)
  console.log(parent)
}
// 2
function handltext(e, info, id) {
  let input2 = document.createElement('input')
  input2.value = info
  input2.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      let updateValue = e.target.value
      data[id].text = updateValue
      createUi(data)
    }
  })
  let parent = e.target.parentElement
  parent.replaceChild(input2, e.target)
  console.log(parent)
}

// create ui
function createUi(dat = data, rot = root) {
  root.innerHTML = ''
  dat.forEach((elm, index) => {
    let li = document.createElement('li')
    let p = document.createElement('p')
    p.innerText = elm.title
    p.addEventListener('dblclick', (event) =>
      handlEdit(event, elm.title, index),
    )
    let h2 = document.createElement('h2')
    h2.innerText = elm.text
    h2.addEventListener('dblclick', (event) =>
      handltext(event, elm.text, index),
    )
    li.append(p, h2)
    root.append(li)
  })
}
createUi(data, root)

form.addEventListener('submit', function (e) {
  if (title.value == '' || text.value == '') {
    alert('please fill your form')
  } else {
    data.push({
      title: title.value,
      text: text.value,
    })
    localStorage.setItem('todos', JSON.stringify(data))
    title.value = ''
    text.value = ''
  }

  e.preventDefault()
  createUi()
})
