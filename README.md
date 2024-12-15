# TEAM4 - Day Us

## ☕️ 프로젝트 소개

### **카페 크루의 일상적인 고민을 해결하는 스마트한 근무 관리 플랫폼입니다.**

> 내 근무 일정도 급여도 한 번에 확인하고 스마트하게 근무해보자❗️

&nbsp;

## 🔧 기술 스택

<div align="center">

|       Type       |                                                                                                        Tool                                                                                                        |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     Library      |         ![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)         |
|     Language     |                                               ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                |
|     Styling      |                                      ![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)                                      |
|       BaaS       |                                                    ![Firebase](https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white)                                                     |
| State Management |                                                         ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)                                                         |
|    Formatting    | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| Package Manager  |                                                            ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)                                                            |
| Version Control  |  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  |
|  Collaboration   |      ![Slack](https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)      |

</div>

&nbsp;

## 🔨 프로젝트 설정 및 실행 방법

### 1. 프로젝트 클론하기

먼저, Git 저장소에서 프로젝트를 로컬로 클론해야 합니다. 터미널(또는 명령 프롬프트)을 열고 아래 명령어를 입력합니다.

```bash
git clone https://github.com/Dev-FE-2/toy-project2-team4-dayus.git
```

해당 명령어는 지정된 Git 저장소에서 프로젝트를 로컬 컴퓨터로 복사해옵니다.

### 2. 의존성 설치

프로젝트가 로컬에 클론된 후, 프로젝트 폴더로 이동한 다음, 필요한 패키지들을 설치해야 합니다.
Node.js 기반 프로젝트인 경우, `npm` 명령어를 사용하여 의존성을 설치할 수 있습니다.

```bash
npm install
```

이 명령어는 `package.json` 파일에 정의된 모든 의존성(dependencies)을 자동으로 설치해 줍니다.

### 3. 개발 서버 실행

모든 의존성이 설치되면, 개발 서버를 실행하여 프로젝트를 로컬에서 테스트할 수 있습니다.

```bash
npm run dev
```

이 명령어를 통해 개발 모드에서 서버를 시작하며, 변경 사항이 있을 때 자동으로 갱신됩니다.
이후, 브라우저에서 `http://localhost:5173` 주소로 접속하여 애플리케이션을 확인할 수 있습니다.

&nbsp;

## 💞 우리의 컨벤션

### 파일 컨벤션

- 폴더명: lowercase 또는 kebab-case
- 파일명: PascalCase

### 코드 컨벤션

- 함수: const FunctionName = () => {} / export default FunctionName;
- 변수명: camelCase
- 상수명: UPPER_SNAKE_CASE

### 커밋 컨벤션

- `feat`: 새로운 기능 추가
- `style`: css 수정 및 코드의 의미에 영향을 미치지 않는 변경사항
- `fix`: 버그 수정
- `refactor`: 리팩토링, 기능 변화 없이 코드 구조 개선
- `chore`: 코드 수정 외 잡다한 작업 (빌드 과정이나 설정 변경 등)
- `docs`: 문서 변경
- `test`: 테스트 코드 추가 또는 수정
- `revert`: 이전 커밋을 되돌림

정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 **코드의 일관성을 유지**하고자 했습니다. <br/>
코드 품질 관리는 `eslint`로, 코드 포맷팅은 `prettier`로, 커밋 메시지 관리는 `commitlint`로 했습니다. 팀원들과 소통하여 **코딩 컨벤션을 구축**했습니다. <br/>
그리고 `husky`를 사용해 규칙에 맞지 않으면 커밋을 제한했습니다. <br/>

### 브랜치 전략

**main, develop** 브랜치와 **feat** 보조 브랜치를 사용했습니다.

- **main**: 배포 단계에서만 사용하는 브랜치
- **develop**: 개발 단계에서 main 역할을 하는 브랜치
- **feat**: 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제
  - feat 브랜치 이름 규칙: `feat/기능명` e.g. feat/calendar-event-add

&nbsp;

## ⏰ 프로젝트 진행 과정

### 기획 (2024.11.22 ~ 2024.11.26)

프로젝트의 방향성을 설정하고 핵심 기능을 정의하는 시간을 가졌습니다. 팀원들과 함께 요구사항 명세서를 작성하고 서비스 플로우를 구체화했습니다.

### [와이어프레임](https://www.figma.com/design/azxt7xgw2XM4Bh62u4vHre/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84) 제작 (2024.11.27 ~ 2024.11.29)

정의된 기능 명세를 바탕으로 Figma를 활용하여 와이어프레임을 제작했습니다. 프로젝트의 일관성을 위해 디자인 시스템을 구축하고 컴포넌트를 설계했습니다.

### 개발 및 기능 구현 (2024.12.02 ~ 2024.12.12)

설계된 와이어프레임을 기반으로 핵심 기능을 구현했습니다. 재사용 가능한 UI 컴포넌트들을 직접 설계하고 개발한 후, 세부 기능을 단계적으로 구현했습니다. 매일 아침 데일리 스크럼을 통해 진행 상황을 공유하고, 팀원 간 적극적인 코드 리뷰를 진행했습니다.

### 파이어베이스 연동 (2024.12.12 ~ 2024.12.16)

MSW(Mock Service Worker)를 활용하여 API 통신을 테스트하고, Firebase SDK를 연동하여 실제 데이터베이스와의 연결을 구현했습니다.

### 리팩토링 (2024.12.17 ~ 2024.12.19)

코드 품질 향상을 위한 리팩토링을 진행하고, 발견된 버그를 수정했습니다. 또한, 성능 최적화 작업도 함께 진행했습니다.

&nbsp;

## 💿 데이터 구조

![image](https://github.com/user-attachments/assets/f07abd18-fab3-481d-ad79-07d0f1209bc2)

ERDCloud를 활용하여 데이터 간의 관계와 타입을 정의했습니다. Firebase Firestore의 NoSQL 특성을 고려하여 효율적인 데이터 구조를 설계했습니다.

&nbsp;

## 🚀 주요 기능

### 📱 모바일 퍼스트

- **모바일 퍼스트 웹 서비스**로 개발을 진행했습니다.
- 카페 근무자들이 **주로 스마트폰으로 일정과 급여를 확인**한다는 점을 고려하여, **모바일에 최적화된 UI/UX를 구현**했습니다.
- 터치 인터랙션에 특화된 **바텀시트**, **풀스크린 모달** 등을 활용하여 사용자가 이동 중이나 현장에서도 **직관적으로 서비스를 이용**할 수 있도록 개발했습니다.

### 🔒 로그인

- `Firebase Authentication`을 활용하여 이메일/비밀번호 기반의 **사용자 인증 시스템을 구현**했습니다.
- 로그인 상태 관리를 위해 **Redux**를 활용했으며, 보안을 위한 **유효성 검사**도 함께 구현했습니다.

### 📆 메인 페이지

- `react-big-calendar` 라이브러리를 커스터마이징하여 **직관적인 일정 관리 시스템을 구축**했습니다.
- 근무 일정과 개인 일정의 **생성, 조회, 수정, 삭제(CRUD) 기능**을 구현했으며, 일정별로 다른 스타일을 적용할 수 있습니다.
- 일정 상세 정보는 **바텀시트 모달을 통해 확인할 수 있도록 구현**했으며, **모바일 퍼스트의 UX를 최적화**했습니다.
- 일정 수정 및 추가는 **풀스크린 모달**을 통해 처리되며, **직관적인 폼 인터페이스를 제공**합니다.
- 일정 삭제 기능은 **토글 버튼과 확인 단계를 통해 안전하게 처리**되도록 구현했습니다.
- `react-day-picker` 라이브러리를 활용하여 단일 날짜 선택(SingleDayPicker)과 기간 선택(RangeDayPicker) 기능을 구현했으며, **사용자의 일정 입력 편의성**을 높였습니다.

### 💰 급여 페이지

- 지난달 급여 내역과 전체 급여 목록 조회 기능을 구현했으며, 근무 정정 목록 조회, 정정 신청 기능을 구현하였습니다.
- 지난달 급여 내역은 **아코디언 UI를 적용**하여 편리하게 정보를 확인 할 수 있도록 구현하였습니다.
- 전체 급여 목록과 근무 정정 목록은 **무한 스크롤을 구현하여 빠르게 목록을 조회**하도록 하였습니다.
- 근무 정정 목록에는 **필터링을 추가**하여 근무 유형과 승인 상태에 따라 원하는 정보를 확인 할 있도록 구현하였습니다.
- 근무 정정 신청은 기본값을 제공하여 빠른 신청이 가능하도록 설정 했으며, 경고 메시지를 통해 **필수값을 입력받도록 안내하여 안정성을 확보**했습니다.

### 🏃 내 정보 페이지

- `Firestore database`를 사용해서 저장된 사용자의 정보를 가져와 폼에 맞춰 이를 할당하도록 구현했습니다.
- 사용자의 정보 수정은 **풀스크린 모달을 통해 처리**되며, 직관적인인 폼 인터페이스를 제공합니다.
- 로그아웃 버튼을 추가해 로그인 된 사용자가 안전하게 로그아웃을 할 수 있도록 구현했습니다.

&nbsp;

## 💁 구성원

| [![KwonSeami](https://avatars.githubusercontent.com/u/56241150?v=4)](https://github.com/KwonSeami) | [![yulsanoh](https://avatars.githubusercontent.com/u/156407033?v=4)](https://github.com/yulsanoh) | [![laivastia](https://avatars.githubusercontent.com/u/92559779?v=4)](https://github.com/laivastia) | [![bbjbc](https://avatars.githubusercontent.com/u/102457140?v=4)](http://github.com/bbjbc) |
| :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                           **☕️ [권샘이](https://github.com/KwonSeami)**                            |                           **☕️ [오율산](https://github.com/yulsanoh)**                            |                           **☕️ [이민태](https://github.com/laivastia)**                            |                          **☕️ [조병찬](http://github.com/bbjbc)**                          |
