function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s,s+l)).filter((v) => v > k);
    // 여기서 +는 Number()와 동일
}