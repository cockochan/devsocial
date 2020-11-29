arr=[1,-1,2,3,2]
const solution = (arr) => {
    // Type your solution here 
 let leftSum=0
  let rightSum =0
    const indexOfminusOne = arr.indexOf(-1)
    if(indexOfminusOne==undefined){return''}
leftSum = arr.map((el,index)=>{if(index<(indexOfminusOne-1)){leftSum=leftSum+el}else{return leftSum}})
rightSum = arr.map((el,index)=>{if(index>(indexOfminusOne-1)){rightSum=rightSum+el}else{return rightSum}})
if( indexOfminusOne!==undefined&&leftSum>rightSum){
    return "left"}
else if(indexOfminusOne!==undefined&&leftSum<rightSum){
    return "right"}
    else{return''}
};