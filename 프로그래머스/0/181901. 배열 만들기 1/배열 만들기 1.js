function solution(n, k) {
    let max = Math.floor(n/k)
    return [...new Array(max)].map((_, i) => (i + 1) * k)
}