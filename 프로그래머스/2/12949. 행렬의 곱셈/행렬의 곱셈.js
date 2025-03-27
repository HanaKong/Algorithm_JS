function solution(arr1, arr2) {
    // 곱할 수 있는 배열만 주어짐!
    
    // 각 행렬의 행의 길이
    let r1 = arr1.length;
    let r2 = arr2.length;
    
    // 각 행렬의 열의 길이
    let c1 = arr1[0].length;
    let c2 = arr2[0].length;
    
    // 결과를 저장할 2차원 배열 선언 및 초기화
    let result = [];
    for (let i = 0; i < r1; i++) {
        result.push(new Array(c2).fill(0));
    }
    
    // 행렬 곱하기
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}