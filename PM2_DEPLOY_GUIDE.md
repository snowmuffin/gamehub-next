# PM2 GameHub Next.js 배포 가이드 (EC2 환경 - Yarn 사용)

이 프로젝트는 PM2와 Yarn을 사용하여 EC2에서 Next.js 애플리케이션을 배포합니다.

## 🚀 EC2 초기 설정

### 1. EC2 인스턴스에서 처음 설정
```bash
# 프로젝트 디렉토리로 이동
cd /path/to/your/project

# EC2 환경 설정 스크립트 실행 (yarn 및 PM2 자동 설치)
./ec2-setup.sh
```

### 2. 환경 변수 설정
```bash
# 환경 변수 파일 복사 및 수정
cp .env.example .env.production
nano .env.production
```

## 🚀 배포 스크립트

### 1. 전체 재배포 (권장)
```bash
# 스크립트 실행 (프로젝트 디렉토리에서)
./deploy.sh

# 또는 yarn 스크립트 사용
yarn pm2:deploy
```

### 2. 빠른 재시작
```bash
# 스크립트 실행
./restart.sh

# 또는 yarn 스크립트 사용
yarn pm2:restart
```

## 📋 Yarn 및 PM2 명령어

### Yarn 기본 명령어
```bash
# 의존성 설치
yarn install

# 빌드
yarn build

# 시작
yarn start

# 또는 npm 스크립트로
yarn pm2:start
yarn pm2:stop
yarn pm2:status
yarn pm2:logs
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

# PM2 프로세스 저장 (재부팅 후에도 유지)
pm2 save
```

## 🔧 EC2 환경 설정

### 환경 변수
- `NODE_ENV=production`
- `PORT=3000` (또는 원하는 포트)
- `.env.production` 파일에서 관리

### 보안 그룹 설정
EC2 보안 그룹에서 다음 포트를 열어야 합니다:
- HTTP: 80
- HTTPS: 443
- Custom: 3000 (또는 설정한 포트)

### 방화벽 설정 (Ubuntu)
```bash
sudo ufw allow 3000
sudo ufw allow 80
sudo ufw allow 443
```

## 📁 파일 구조

- `ecosystem.config.js`: PM2 설정 파일 (상대 경로 사용)
- `deploy.sh`: 전체 재배포 스크립트
- `restart.sh`: 빠른 재시작 스크립트
- `ec2-setup.sh`: EC2 초기 설정 스크립트
- `.env.example`: 환경 변수 예시 파일
- `logs/`: PM2 로그 파일들이 저장되는 디렉토리

## 🔧 설정 수정

### 포트 변경
환경 변수 `PORT`를 설정하거나 `ecosystem.config.js`에서 수정:
```bash
export PORT=8080
```

### 메모리 제한 변경
`ecosystem.config.js` 파일에서 `max_memory_restart` 값을 수정하세요.

### 인스턴스 수 변경
`ecosystem.config.js` 파일에서 `instances` 값을 수정하세요.

## 🐛 문제 해결

### 포트가 이미 사용 중인 경우
```bash
# 포트 3000을 사용하는 프로세스 확인
sudo lsof -i :3000

# 프로세스 종료
sudo kill -9 <PID>
```

### PM2 프로세스 초기화
```bash
# 모든 PM2 프로세스 삭제
pm2 delete all

# PM2 데몬 종료
pm2 kill

# PM2 재시작
pm2 resurrect
```

### 로그 확인
```bash
# 애플리케이션 로그
pm2 logs gamehub-next

# 시스템 로그
sudo tail -f /var/log/syslog

# PM2 로그 파일 직접 확인
tail -f logs/combined.log
```

## 🔄 자동 재시작 설정

### 시스템 재부팅 후 PM2 자동 시작
```bash
# PM2 startup 설정
pm2 startup

# 현재 프로세스 저장
pm2 save
```
