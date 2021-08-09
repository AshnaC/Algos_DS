/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// https://leetcode.com/problems/course-schedule/submissions/
// https://www.youtube.com/watch?v=EgI5nU9etnU
 
 var canFinish = function(numCourses, prerequisites) {
    let visiting ={}
    let pre={}
    let visited = {}
    
    for(let [main, dep] of prerequisites){
        pre[main] = pre[main] || []
        pre[main].push(dep)
    }
    
    const checkForCycle = (course)=>{
        // Has cycle - visiting same course second time
        // in the main loop of same course
        if(visiting[course]){
            return true;
        }
        
        //No cycle - already visited anc conclued to no cycle
        if(visited[course] || !pre[course]){
            return false;
        }
        
        // Marking current visiting as true
        visiting[course] = true;
        
        // Iterte through all the pre courses
        for(let dep of pre[course]){
            // Check for cycles inside their deps
            let isCycle = checkForCycle(dep);
             if(isCycle){
                return true
             }
        }
        // When one teration is done -mark as vsisting false
        // So we can go through next set
        visiting[course] = false;
        visited[course] = true;
        return false;

    }
    
    
    for(let i=0;i<numCourses;i++){
        const isCycle = checkForCycle(i)
        if(isCycle){
            return false
        }
    }
    return true;
 };



