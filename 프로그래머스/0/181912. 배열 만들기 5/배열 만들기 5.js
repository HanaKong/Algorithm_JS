function solution(intStrs, k, s, l) {
    let answer = [];
    for(const v of intStrs) {
        const num = Number(v.slice(s, s+l));
        if(num > k) {
            answer.push(num);   
        }
    }
    return answer;
}