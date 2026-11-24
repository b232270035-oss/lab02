import http from 'k6/http';
import { check, sleep } from 'k6';

const target = __ENV.TARGET_URL || 'https://test.k6.io/';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const response = http.get(target, { tags: { endpoint: 'home' } });
  check(response, { 'HTTP status is 200': (res) => res.status === 200 });
  sleep(1);
}
