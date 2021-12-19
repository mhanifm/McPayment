nums = [2,3,11,15]
target = 13
output = []

for(let i in nums){
    for(let j in nums){
        if (nums[i] + nums[j] === target){
            output.push([+i, +j])
        }
    }
}

console.log(output[0])