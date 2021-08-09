
//https://leetcode.com/problems/course-schedule-ii/submissions/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    let pre ={};
    let visited ={};
    let visiting ={};
    let order = new Set()
    for(let [a,b] of prerequisites){
        pre[a] = pre[a] || []
        pre[a].push(b)
    }
    
    const dfs = (course)=>{
        if(visiting[course]){
            //cyclic
            return true
        }
        if(!pre[course] || visited[course]){
            order.add(course)
            return;
        }
        
        visiting[course] = true
        
        for(let neigbor of pre[course]){
            let isCylic = dfs(neigbor);
            if(isCylic === true){
                return true
            }
        }
        visiting[course] = false;
        visited[course] = true;
        order.add(course);
    }
    
    for(let i=0;i<numCourses;i++){
        let isCyclic = dfs(i);
          if(isCyclic === true){
                return []
        }
    }
    return [...order]
    
};