import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<250'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const response = http.get('http://127.0.0.1:4173/');
  check(response, { 'HTTP status is 200': (res) => res.status === 200 });
  sleep(0.2);
}
