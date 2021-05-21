let getMedian = (arr1, arr2) => {
    //https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/278326/javascript-100
    // debugger;
    // 3+4 =>7 => 4,3 => 3 (index)
    // 4+4 => 8=> 4,4 => 3 (index)
    const totalLen = arr1.length + arr2.length;
    const leftGroupCount = Math.floor((arr1.length + arr2.length + 1) / 2); //4
    let partIndexX = Math.floor(arr1.length / 2); //3/2 =>1 => 2 elements
    let partIndexY = leftGroupCount - partIndexX - 2; // 4-1-2=1  2 elements
    while (true) {
        let x_last_left = arr1[partIndexX];
        let x_first_right = arr1[partIndexX + 1];
        let y_last_left = arr2[partIndexY];
        let y_first_right = arr2[partIndexY + 1];
        if (x_last_left < y_first_right && y_last_left < x_first_right) {
            // Return median
            if (totalLen % 2 === 0) {
                //Even -
                return (
                    (Math.max(x_last_left, y_last_left) + Math.min(x_first_right, y_first_right)) /
                    2
                );
            } else {
                // Odd
                return Math.max(x_last_left, y_last_left);
            }
        } else if (y_last_left > x_first_right) {
            partIndexY--;
            partIndexX++;
        } else if (x_last_left > y_first_right) {
            partIndexX--;
            partIndexY++;
        }
    }
};

var findMedianSortedArrays = function (nums1, nums2) {
    
    let totalLen = nums1.length +nums2.length;
    let medPosition = Math.floor(totalLen/2) +1;
    let i = 0; // pointer of nums1
    let j = 0; // pointer of nums1
    let mergeArr = [];
    // Only need to iterate till medPosition is reached
    while(medPosition > mergeArr.length){
        if((nums1[i]<= nums2[j]) && nums1[i]!== undefined){
            mergeArr.push(nums1[i])
            i++
        }else if(nums2[j] !== undefined){
            mergeArr.push(nums2[j])
            j++    
        }else{
            mergeArr = [...mergeArr, ...nums1.slice(i), ...nums2.slice(j)]
            break;
        }
    }
    console.log(mergeArr)
    if(totalLen %2 == 0){
        return (mergeArr[(totalLen/2)-1] + mergeArr[totalLen/2])/2
    }else{
        return mergeArr[Math.floor(totalLen/2)]
    }

console.log(getMedian([104, 200], [2, 3, 10, 50]));
