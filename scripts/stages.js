import http from 'k6/http';
import { check, sleep } from 'k6';

const target = __ENV.TARGET_URL || 'https://test.k6.io/';

export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  const response = http.get(target, { tags: { endpoint: 'home' } });
  check(response, { 'HTTP status is 200': (res) => res.status === 200 });
  sleep(1);
}
