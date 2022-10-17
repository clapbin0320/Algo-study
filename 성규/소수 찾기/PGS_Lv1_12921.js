/**
 *  소수 찾기 - 프로그래머스 
 *  문제 설명
    1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

    소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
    (1은 소수가 아닙니다.)

    제한 조건
    n은 2이상 1000000이하의 자연수입니다.

    입출력 예 설명
    입출력 예 #1
    1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

    입출력 예 #2
    1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

 */

function solution(n) {
  var answer = 0;
  let i = 1;
  for (i; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    } else {
      continue;
    }
  }
  return answer;
}

// 다른사람 풀이

// function solution(n) {
//   var answer = 0;
//   let i;
//   for (i = 1; i <= Math.sqrt(n); i++){
//       if (!(n%i)) {
//           answer += (i+n/i);
//       }
//   }
//   i--;
//   return (i === n/i) ? answer-i : answer;
// }

// 다음과 같은 로직으로 짜면 계산량을 효과적으로 줄일 수 있음!
