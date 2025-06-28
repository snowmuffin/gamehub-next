# PM2 GameHub Next.js 배포 가이드

이 프로젝트는 PM2를 사용하여 Next.js 애플리케이션을 배포합니다.

## 🚀 배포 스크립트

### 1. 전체 재배포 (권장)
```bash
# 스크립트 실행
./deploy.sh

# 또는 npm 스크립트 사용
npm run pm2:deploy
```

### 2. 빠른 재시작
```bash
# 스크립트 실행
./restart.sh

# 또는 npm 스크립트 사용
npm run pm2:restart
```

## 📋 PM2 명령어

### 기본 명령어
```bash
# PM2 시작
npm run pm2:start

# PM2 중지
npm run pm2:stop

# PM2 삭제
npm run pm2:delete

# PM2 상태 확인
npm run pm2:status

# PM2 로그 보기
npm run pm2:logs
```

### 직접 PM2 명령어
```bash
# 애플리케이션 시작
pm2 start ecosystem.config.js --env production

# 애플리케이션 재시작
pm2 restart gamehub-next

# 애플리케이션 중지
pm2 stop gamehub-next

# 애플리케이션 삭제
pm2 delete gamehub-next

# 모든 프로세스 상태 확인
pm2 status

# 실시간 로그 보기
pm2 logs gamehub-next

# 모니터링
pm2 monit
```

## 📁 파일 구조

- `ecosystem.config.js`: PM2 설정 파일
- `deploy.sh`: 전체 재배포 스크립트
- `restart.sh`: 빠른 재시작 스크립트
- `logs/`: PM2 로그 파일들이 저장되는 디렉토리

## 🔧 설정 수정

### 포트 변경
`ecosystem.config.js` 파일에서 `PORT` 환경 변수를 수정하세요.

### 메모리 제한 변경
`ecosystem.config.js` 파일에서 `max_memory_restart` 값을 수정하세요.

### 인스턴스 수 변경
`ecosystem.config.js` 파일에서 `instances` 값을 수정하세요.

## 🐛 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 포트 3000을 사용하는 프로세스 확인
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```

### PM2 프로세스 초기화
```bash
# 모든 PM2 프로세스 삭제
pm2 delete all

# PM2 데몬 종료
pm2 kill
```
