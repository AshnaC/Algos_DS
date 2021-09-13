Given a binary image, with pixel value equal to 0 (background) or 1 (foreground), find the boundary pixels.

A pixel is a boundary pixel if
1) It is foreground (pixel value = 1)
AND
(
  2) It has at least 1 background pixel among its 4 neighbors (up, bottom, left, right).
  OR 
  it doesn't have up, bottom, right or left neighbour
)


Example
Image:
0 0 0 0 0 0
0 1 1 1 0 0
0 1 1 1 1 0
0 1 1 1 0 0
0 0 0 1 0 0

Boundary pixels (marked as b)

0 0 0 0 0 0
0 b b b 0 0
0 b 1 1 b 0
0 b b b 0 0
0 0 0 b 0 0




Image:
0 0 0 0 0 0
0 1 1 1 0 0
0 1 1 1 1 0
0 1 1 1 0 0
0 0 0 1 0 0

Boundaries:
0 0 0 0 0 0
0 b b b 0 0
0 b 1 1 b 0
0 b b b 0 0
0 0 0 b 0 0

Distance transform (DT)
2 1 1 1 2 3
1 0 0 0 1 2
1 0 1 1 0 1
1 0 0 0 1 2
2 1 1 0 1 2

Distance = |row1-row2| + |col1-col2| (Manhattan distance)

l 0 1
1 1 0

b 0 b
b b 0

let length = arr.length //5
let bredth = arr[0].length //6

const checkForBorder = ( r, c)=>{
  
  if(r==0 || c== 0|| r == length-1 || c == bredth -1){
    return arr[r][c] === 1
  }

 if(arr[r][c] ==1){
   if(chedkIfNeighborFore(r+1,c) ||chedkIfNeighborFore(r,c+1) ||chedkIfNeighborFore(r,c-1)||chedkIfNeighborFore(r-1,c)){
     return true
   }
 }
  return false;
}

const chedkIfNeighborFore = (r,c)=>{
  if(r <0 || r>= length || c <0 || c >= bredth){
    return false;
  }
  return arr[r][c] == 0
}
  
let ans =[]



for(let i =0;i< length;i++){
  ans[i] =[]
  for(let j =0;j< bredth;j++){
    const isBorder = checkForBorder(i, j)
    ans[i].push(isBorder)
  
  }
}



Boundaries:
0 0 0 0 0 0
0 b b b 0 0
0 b 1 1 b 0
0 b b b 0 0
0 0 0 b 0 0

let len = [h][b]
const getLen = (r,c) =>{
  if(len[r][c] != undefined){
    return len[r][c]
  }
  if(arr[r][c] == "b"){
    len[r][c] = 0
  return 0
}else{
   let count = Math.min(1+ getLen(r+1,c) , 1+ getLen(r-1,c), 1+ getLen(r,c+1), 1+ getLen(r,c-1))
   len[r][c]  = count
  return count;
}
}
  
r= 0, c=0
arr[r][c] ==b //
length = 0;
 // 0, 1
  
  len[1,1] 0
  lem[0,1] -1
  len[0,0] =2



var clicks = [];
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventHandler('click', function() {
    clicks[i]++;
  });
}

// [empty, empty, empty, empty, 5]

// a={b: 3}

// stringify(6) // => "6"
// stringify("abc") // => "\"abc\"" (or '"abc"' with single quotes)
// a={b: 3, c:[]}

// Primitives; number, string, null, undefined, boolean // "null" ,"undfined", "true", "false"
// Objects; object, array (and function)

// Like JSON.stringify
function stringify(value) {
  if(value === null){
    return "null"
  }
  
  
  let str = ""
  if(typeof value == "object"){
      for(let key in value){ //{"b":3, "c":[]}
        
         str = str ? `${str},"${key}":${stringify(value[key])}`:`"${key}":${stringify(value[key])}`
     }
    str = `{${str}}`
    return str
  }else if(Number(value)){
    return value.toString()
  }
  else if(typeof value === "string"){
    return `"${value}"` // => '"abc"'
  }
  else if(Array.isArray(value)){
    // stringify([1,2]) // => 
    value.forEach(item=> {
      str = str ? str+','+ stringify(item): stringify(item)
      
    } )
    return str?`[${str}]`:"[]" //=[]
  }
  else{
    return value.toString()
  }
}

// 'abc' => '"abc"'