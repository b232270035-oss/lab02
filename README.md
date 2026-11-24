# Лаборатори №2 — k6 гүйцэтгэлийн хэмжүүр

F.CSA313, 2026 оны лабораторийн ажил. Энэ репо зөвхөн даалгаварт зөвшөөрсөн `test.k6.io` дадлагын хост болон өөрийн локал сервер рүү хүсэлт илгээнэ.

## Орчин

- OS: Ubuntu Linux
- k6: үр дүнг цуглуулахад ашигласан хувилбарыг доор тэмдэглэнэ.
- Үндсэн target: `https://test.k6.io/` (2026-11-24-нд уг хост QuickPizza-ийн дадлагын орчин руу HTTP 302 redirect хийж байв.)

## Скриптүүд

- `scripts/load-test.js` — үндсэн GET тест; CLI-аар VU ба хугацааг тохируулна.
- `scripts/stages.js` — 5 → 30 → 100 VU шаталсан ачаалал.
- `scripts/local-server.js` — `127.0.0.1:4173` дээрх өөрийн туршилтын сервер.
- `scripts/thresholds-pass.js`, `scripts/thresholds-fail.js` — локал серверийн SLO-г PASS/FAIL шалгах хувилбарууд.

## Ажиллуулах

```bash
k6 run scripts/load-test.js | tee results/run-05vu.txt
k6 run --vus 5 --duration 1m scripts/load-test.js | tee results/run-05vu.txt
k6 run --vus 30 --duration 1m scripts/load-test.js | tee results/run-30vu.txt
k6 run --vus 100 --duration 1m scripts/load-test.js | tee results/run-100vu.txt
k6 run scripts/stages.js | tee results/run-stages.txt
```

## Хэмжилт ба SLO

| VU | p90 (ms) | p95 (ms) | Throughput (req/s) | Error rate |
|---:|---:|---:|---:|---:|
| 5 | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа |
| 30 | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа |
| 100 | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа | цуглуулсны дараа |

Baseline-д тулгуурласан SLO болон PASS/FAIL үр дүнг бодит хэмжилтийн дараа энд тэмдэглэнэ.

## Дүгнэлт

Бодит үр дүнг цуглуулсны дараа 8–10 өгүүлбэрийн дүгнэлт нэмнэ.

## k6 хувилбар

Үр дүн цуглуулах төхөөрөмж дээрх `k6 version` гаралтыг энд оруулна.
