# Groundplace Clone - Private Pool Villa

그라운드플레이스 웹사이트를 클론 코딩한 프로젝트입니다. React와 GSAP을 활용하여 부드러운 애니메이션과 인터랙티브한 사용자 경험을 구현했습니다.

## 🌟 주요 기능

- **웹 전용 디자인**: 데스크톱 환경에 최적화된 레이아웃
- **인터랙티브 슬라이더**: Swiper.js를 활용한 메인 이미지 슬라이더
- **부드러운 애니메이션**: GSAP과 ScrollTrigger를 활용한 스크롤 기반 애니메이션
- **동적 이미지 갤러리**: 마우스 호버 시 이미지가 변경되는 인터랙티브 갤러리
- **비디오 섹션**: 제주도 풍경을 보여주는 비디오 배경

## 🛠️ 기술 스택

- **Frontend**: React 19.0.0
- **애니메이션**: GSAP 3.12.5, ScrollTrigger
- **슬라이더**: Swiper 11.1.15
- **스타일링**: CSS3
- **빌드 도구**: Create React App

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/
│   │   ├── MainSwiper.jsx      # 메인 슬라이더 컴포넌트
│   │   └── MainSlide.jsx       # 개별 슬라이드 컴포넌트
│   ├── css/
│   │   ├── common.css          # 공통 스타일
│   │   ├── page1.css           # 페이지별 스타일
│   │   └── styles.css          # Swiper 스타일
│   ├── fonts/
│   │   └── NotoSerif-Regular.ttf
│   └── layout/
│       ├── Page1.jsx           # 메인 소개 페이지
│       ├── Page2.jsx           # 프라이빗 스페이스 소개
│       ├── Page3.jsx           # 특별 서비스 갤러리
│       ├── Page4.jsx           # 비디오 배경 페이지
│       ├── Video_page.jsx      # 비디오 섹션
│       └── Footer.jsx          # 푸터
├── App.jsx                     # 메인 앱 컴포넌트
├── index.jsx                   # 앱 진입점
└── index.css                   # 글로벌 스타일
```

## 🚀 시작하기

### 필수 요구사항

- Node.js (v14 이상)
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/yurim-web/groundplace_clone.git
   cd groundplace_clone
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm start
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 테스트 실행
npm test
```

## 🎨 주요 컴포넌트

### MainSwiper
- 자동 재생되는 이미지 슬라이더
- 네비게이션 버튼과 페이지네이션
- 7개의 메인 이미지 순환

### Page3 (Special Offers)
- 마우스 호버 시 이미지 변경
- 5가지 특별 서비스 소개
- 동적 이미지 갤러리

### GSAP 애니메이션
- 스크롤 기반 요소 애니메이션
- 바운스 효과가 있는 이미지 애니메이션
- 텍스트 페이드인 애니메이션

## 💻 웹 전용 디자인

- **데스크톱 최적화**: 1200px 이상의 화면에 최적화
- **고정 레이아웃**: 반응형이 아닌 고정된 레이아웃 구조
- **풀스크린 경험**: 전체 화면을 활용한 몰입형 디자인

## 🖼️ 이미지 최적화

모든 이미지는 `public` 폴더에 저장되어 있으며, `process.env.PUBLIC_URL`을 통해 최적화된 경로로 참조됩니다.

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다:
- **라이브 사이트**: https://yurim-web.github.io/groundplace_clone

> **참고**: 이 프로젝트는 학습 목적으로 제작된 클론 코딩 프로젝트입니다.

## 📞 연락처

- **전화**: 010-3366-8308
- **주소**: 제주특별자치도 제주시 한경면 두모리 1931
- **사업자번호**: 367-17-02082 (대표:전민수)
- **농어촌민박번호**: 한경면 제733호

## 📄 라이선스

Copyright© 그라운드플레이스. All Rights Reserved.  
DESIGNED & PHOTO BY 언제나,디자인

## 📚 학습 목적

이 프로젝트는 다음 기술들을 학습하기 위해 제작되었습니다:
- React 컴포넌트 구조 설계
- GSAP 애니메이션 라이브러리 활용
- Swiper.js 슬라이더 구현
- CSS 스타일링과 레이아웃
- 이미지 최적화 및 경로 관리

## 🤝 기여하기

이 프로젝트는 학습 목적의 클론 코딩이므로, 기여보다는 참고용으로 활용해주세요.

---

**Groundplace Clone** - React와 GSAP을 활용한 웹 개발 학습 프로젝트 🚀