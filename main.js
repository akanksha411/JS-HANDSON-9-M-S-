function removeDuplicate(str,n){	
    var s = new Set();
    for (var i = 0; i < n;i++){
        s.add(str[i]);
    }
    for (let i of s) {
        console.log(i);
    }
}
var str="abcadeecfb"
var n = str.length
removeDuplicate(str,n);
let s = "abcadeecfb"
let set = new Set();
for(let i=0;i < s.length;i++){
 set.add(s[i])
}
let res=""
for(let ch of set){
  res = res+ch;
}
console.log(res);


function countOfOccurancces(str)
{

var d = new Map();

str.split('').forEach(i => {

        if(d.has(i))
        {
            d.set(i, d.get(i)+1);
        }
        else
            d.set(i, 1);
});


str.split('').forEach(i => {

    if(d.has(i) && d.get(i)!=0)
    {
    console.log( i + "=" + d.get(i) + "\n");
    d.set(i, 0);
    }
});
}


var str="abcadeecfb";
countOfOccurancces(str);


let strr = "abcadeecfb"
let map=new Map();
for(let i=0;i < strr.length;i++){
  if(map.has(strr[i])){
    let value = map.get(strr[i])
    map.set(strr[i],value+1)
  }
  else{
    map.set(strr[i],1)
  }
}
for (let [k,v] of map){
 console.log(k+"-->"+v);}