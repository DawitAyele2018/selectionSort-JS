
// Selection Sort in Javascript
function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let lowest = i;
        for(let j = i; j<arr.length; j++ ){
            if(arr[lowest]>arr[j]){
                lowest = j;
            }
        }
        [arr[i],arr[lowest]] = [arr[lowest],arr[i]];
    }
    return arr;
}

console.log(selectionSort([9,2,5,7,10,1]));

/* 
.has an order of O(n^2) 
. It is better than Bubble Sort in a way that in bubble sort we swap every time h
. In Selection sort we go through each element of the array once and we do swaping 
   at the end of each iteration
*/