console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))

function unique (arr){
  return arr.filter((el,id) => arr.indexOf(el) === id )
}

