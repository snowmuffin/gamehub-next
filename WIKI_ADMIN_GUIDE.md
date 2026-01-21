# Wiki 관리자 가이드

## 접근 방법

### URL
- 개발: `http://localhost:3000/mgmt-se7k9x2m/wiki`
- 프로덕션: `https://your-domain.com/mgmt-se7k9x2m/wiki`

### 권한 요구사항
1. Steam 로그인 완료
2. 백엔드에서 `GAME_ADMIN` 역할 부여
3. 유효한 JWT 토큰

---

## 기능 개요

### 1. 카테고리 관리

#### 카테고리 생성
1. "New Category" 버튼 클릭
2. 필수 정보 입력:
   - **Slug**: URL에 사용될 고유 식별자 (예: `server-commands`, `getting-started`)
   - **Icon**: 이모지 아이콘 (선택사항, 예: `🚀`, `📚`)
   - **Title (Korean)**: 한국어 제목
   - **Title (English)**: 영어 제목
   - **Description**: 카테고리 설명 (선택사항)
   - **Display Order**: 정렬 순서 (낮을수록 먼저 표시)

#### 카테고리 수정
1. 카테고리 탭에서 편집 버튼 (✏️) 클릭
2. 정보 수정 후 "Save" 클릭
3. **주의**: Slug는 수정할 수 없습니다

#### 카테고리 삭제
1. 삭제 버튼 (🗑️) 클릭
2. 확인 대화상자에서 확인
3. **경고**: 카테고리 내 모든 아티클도 함께 삭제됩니다 (Cascade Delete)

---

### 2. 아티클 관리

#### 아티클 목록 보기
1. 카테고리 탭 선택
2. "Load Articles" 버튼 클릭
3. 아티클 목록이 표 형식으로 표시됩니다

#### 아티클 생성
1. 카테고리 탭에서 "New Article" 버튼 클릭
2. 필수 정보 입력:
   - **Category**: 아티클이 속할 카테고리
   - **Slug**: URL 식별자 (카테고리 내 고유)
   - **Title**: 한/영 제목
   - **Content**: 마크다운 형식의 본문
   - **Summary**: 요약 (선택사항)
   - **Display Order**: 정렬 순서

#### 마크다운 에디터 사용
- 한국어/영어 탭으로 전환하여 각 언어별 컨텐츠 작성
- 실시간 미리보기 지원
- 마크다운 문법:
  ```markdown
  # 제목 1
  ## 제목 2
  
  **굵게**
  *기울임*
  
  - 목록 항목 1
  - 목록 항목 2
  
  [링크 텍스트](https://example.com)
  
  ![이미지](https://example.com/image.jpg)
  ```

#### 아티클 수정
1. 아티클 목록에서 편집 버튼 (✏️) 클릭
2. 내용 수정 후 "Save Article" 클릭

#### 아티클 삭제
1. 삭제 버튼 (🗑️) 클릭
2. 확인 후 삭제

---

## API 엔드포인트

### Public API (인증 불필요)
- `GET /api/space-engineers/wiki/categories?lang=ko` - 모든 카테고리 조회
- `GET /api/space-engineers/wiki/categories/:slug?lang=ko` - 특정 카테고리 조회
- `GET /api/space-engineers/wiki/articles/:categorySlug/:articleSlug?lang=ko` - 아티클 조회

### Admin API (JWT 인증 필요)
- `GET /api/space-engineers/wiki/admin/categories` - 모든 카테고리 조회 (미발행 포함)
- `GET /api/space-engineers/wiki/admin/articles?categoryId=1` - 아티클 조회
- `POST /api/space-engineers/wiki/admin/categories` - 카테고리 생성
- `PUT /api/space-engineers/wiki/admin/categories/:id` - 카테고리 수정
- `DELETE /api/space-engineers/wiki/admin/categories/:id` - 카테고리 삭제
- `POST /api/space-engineers/wiki/admin/articles` - 아티클 생성
- `PUT /api/space-engineers/wiki/admin/articles/:id` - 아티클 수정
- `DELETE /api/space-engineers/wiki/admin/articles/:id` - 아티클 삭제

---

## 데이터 구조

### Category 생성 예시
```json
{
  "slug": "server-commands",
  "icon": "💻",
  "displayOrder": 0,
  "ko": {
    "title": "서버 명령어",
    "description": "Space Engineers 서버 명령어 가이드"
  },
  "en": {
    "title": "Server Commands",
    "description": "Space Engineers server command guide"
  }
}
```

### Article 생성 예시
```json
{
  "categoryId": 1,
  "slug": "admin-commands",
  "displayOrder": 0,
  "ko": {
    "title": "관리자 명령어",
    "content": "# 관리자 명령어\n\n## 기본 명령어\n...",
    "summary": "서버 관리를 위한 필수 명령어"
  },
  "en": {
    "title": "Admin Commands",
    "content": "# Admin Commands\n\n## Basic Commands\n...",
    "summary": "Essential commands for server management"
  }
}
```

---

## 모범 사례

### Slug 명명 규칙
- 소문자만 사용
- 단어 구분은 하이픈(`-`) 사용
- 간결하고 의미 있는 이름
- 예시: `getting-started`, `item-commands`, `server-setup`

### 컨텐츠 작성 가이드
1. **제목**: 명확하고 간결하게
2. **요약**: 아티클 내용을 한 문장으로 요약
3. **본문**: 
   - 논리적인 구조로 작성
   - 코드 블록 사용 시 언어 명시
   - 이미지는 외부 URL 사용 (추후 업로드 기능 추가 예정)
4. **Display Order**: 논리적인 순서대로 번호 부여

### 다국어 작성 팁
- 한국어와 영어 버전의 구조를 동일하게 유지
- 번역이 어려운 기술 용어는 원어 그대로 사용
- 각 언어의 톤과 스타일 통일

---

## 문제 해결

### "Unauthorized" 오류
- Steam 로그인 확인
- JWT 토큰 만료 여부 확인 (페이지 새로고침)
- 관리자 권한 부여 확인

### "Slug already exists" 오류
- 다른 고유한 slug 사용
- 기존 카테고리/아티클의 slug 확인

### 아티클이 로드되지 않음
- "Load Articles" 버튼을 클릭했는지 확인
- 브라우저 콘솔에서 에러 메시지 확인
- 네트워크 탭에서 API 응답 확인

### 마크다운 에디터 문제
- 페이지 새로고침
- 브라우저 캐시 삭제
- 다른 브라우저에서 시도

---

## 보안 고려사항

1. **접근 제어**: 관리자만 접근 가능하도록 백엔드에서 검증
2. **세션 관리**: 일정 시간 후 자동 로그아웃
3. **입력 검증**: XSS 공격 방지를 위한 입력 검증
4. **난독화된 경로**: `/mgmt-se7k9x2m` 경로 사용으로 일반 사용자 접근 방지

---

## 향후 개선 계획

- [ ] 이미지 업로드 기능
- [ ] 아티클 드래그 앤 드롭 정렬
- [ ] 버전 히스토리 및 되돌리기
- [ ] 아티클 미리보기 기능
- [ ] 일괄 작업 (다중 선택 삭제 등)
- [ ] 검색 및 필터링 기능
- [ ] 아티클 복사/이동 기능
