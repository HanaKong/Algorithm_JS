function solution(l, r) {
  const answer = [];
  const queue = ['5'];

  while (queue.length > 0) {
    const current = queue.shift();
    const num = Number(current);

    if (num > r) continue;
    if (num >= l) answer.push(num);

    queue.push(current + '0');
    queue.push(current + '5');
  }

  return answer.length === 0 ? [-1] : answer;
}