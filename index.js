function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget (){
  const seek = document.getElementById("nested").getElementsByClassName("target")
  if (seek.length > 0) {
    return seek[0]
  } else {
    return seek
  }
}

function increaseRankBy(n) {
  const listElements = document.querySelectorAll('ul.ranked-list li')
  for (let i =0, l=listElements.length; i<l; i++){
    listElements[i].innerHTML = (parseInt(listElements[i].innerHTML)+n).toString()
  }
}

function deepestChild() {
  const grandNode = document.getElementById("grand-node")
  var currentElement = grandNode
  while (currentElement.children[0] != undefined) {
    currentElement = currentElement.children[0]
  }
  return currentElement
}
