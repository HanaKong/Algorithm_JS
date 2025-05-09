function solution(participant, completion) {
    const obj = {};
    
    for (const i of participant) {
        obj[i] = (obj[i] || 0) + 1;
    }
    
    for (const j of completion) {
        obj[j]--;
    }
    
    for (const k in obj) {
        if (obj[k] > 0) return k;
    }
}