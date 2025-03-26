function solution(answers) {
    // 수포자 3인방의 패턴
    const patterns = [
        [1,2,3,4,5], // 1번 수포자
        [2,1,2,3,2,4,2,5], // 2번 수포자
        [3,3,1,1,2,2,4,4,5,5], // 3번 수포자
    ]
    
    // 수포자 3인방의 정답 갯수 저장 배열
    const scores = [0, 0, 0];
    
    // 정답과 패턴이 일치하는지 비교
    for (const [i, answer] of answers.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (answer === pattern[i % pattern.length]) {
                scores[j] += 1;
            }
        }
    }
    
    // 가장 높은 점수 저장
    const maxScore = Math.max(...scores);
    
    // 가장 높은 점수를 받은 수포자를 찾아서 배열에 저장
    const highestScores = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            highestScores.push(i + 1);
        }
    }
    
    return highestScores;
}