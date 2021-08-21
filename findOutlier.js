function findOutlier(integers){
    //your code here
    let findLengthOfOdd = integers.filter(val => val % 2 != 0)
    let findLengthOfEven = integers.filter(val => val % 2 == 0)
    let getOutlier = 0;
     if(findLengthOfOdd.length < findLengthOfEven.length){
       getOutlier = parseInt(findLengthOfOdd.join(''));
     }else{
       getOutlier = parseInt(findLengthOfEven.join(''));
     }
    
    return getOutlier;
    
    }
    
   console.log(findOutlier([0, 1, 2])) // 1
   console.log(findOutlier([1, 2, 3])) // 2
   console.log(findOutlier([2,6,8,10,3])) // 3
   console.log(findOutlier([0,0,3,0,0])) // 3
   console.log(findOutlier([1,1,0,1,1])) // 0