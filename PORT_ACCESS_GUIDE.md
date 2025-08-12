# 포트 없이 도메인 접속 설정 가이드

## 현재 상태 ✅
- Next.js 개발 서버: `http://localhost:3000` 및 `http://0.0.0.0:3000`에서 실행 중
- hosts 파일 설정됨: `127.0.0.1 REDACTED_TEST`
- 로그에서 `REDACTED_TEST`에서의 접속 확인됨

## 해결 방법 옵션

### 방법 1: 간단한 포트 포워딩 (권장)
맥OS에서 포트 80을 3000으로 포워딩:

```bash
# 임시 포트 포워딩 (터미널 세션이 종료되면 사라짐)
echo "rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 3000" | sudo pfctl -ef -

# 해제하려면:
sudo pfctl -F nat
```

### 방법 2: nginx 리버스 프록시
```bash
# 1. nginx 설정 스크립트 실행
./setup-nginx.sh

# 2. nginx 중지 (필요시)
sudo nginx -s stop
```

### 방법 3: 브라우저에서 직접 접속
현재 이미 작동 중인 방법:
- `http://REDACTED_TEST:3000` ✅ 작동 중
- `http://localhost:3000` ✅ 작동 중
- `http://121.129.86.174:3000` ✅ 작동 중

### 방법 4: sudo로 포트 80 실행
```bash
sudo PORT=80 npm run dev
```

## 추천 방법

**가장 간단하고 안전한 방법:**
현재 상태에서 브라우저에 북마크를 저장하여 포트 번호를 기억할 필요 없이 사용:

1. 브라우저에서 `http://REDACTED_TEST:3000` 접속
2. 북마크로 저장하여 "GameHub Dev" 등의 이름으로 저장
3. 앞으로는 북마크를 클릭하여 바로 접속

## 프로덕션 환경에서는
실제 서버에서는 nginx나 Apache를 통해 포트 80에서 자동으로 처리됩니다.

## 현재 접속 가능한 URL들

✅ **작동 중인 URLs:**
- `http://REDACTED_TEST:3000`
- `http://localhost:3000`
- `http://121.129.86.174:3000`

⚠️ **포트 80 설정 후 추가될 URL:**
- `http://REDACTED_TEST` (포트 번호 없음)
