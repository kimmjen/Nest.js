<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## **주요 특징**

1. 모듈 기반 구조
   - 애플리케이션을 기능별로 모듈화하여 관리하고 확장
   - 각 모듈은 독립적이며 쉽게 재사용 가능
2. TypeScript 지원
   - 기본적으로 TypeScript로 작성되며, 정적 타입 검사와 최신 JavaScript 기능을 활용
3. 의존성 주입(DI)
   - 강력한 의존성 주입 컨테이너를 제공하여 코드의 재사용성과 테스트 가능성을 높임.
4. 데코레이터
   - 컨트롤러, 서비스, 미들웨어, 가드 등을 선언할 때 데코레이터(`@Controller`, `@Injectable`, `@Get`, 등)를 사용하여 코드를 직관적으로 작성
5. 내장 HTTP서버
   - Express나 Fastify를 기본 HTTP 서버로 사용하며, 개발자가 원하는 대로 선택 가능
6. WebSocket, GraphQL, Microservices지원
   - 다양한 프로토콜과 기술을 지원하여 유연한 백엔드 개발이 가능
7. 테스트 용이성
   - 유닛 테스트와 통합 테스트를 쉽게 작성할 수 있는 환경을 제공

## **사용 사례**
- REST API: 전통적인 RESTful API 서버 구축
- GraphQL API: GraphQL 기반의 데이터 서버 개발
- 실시간 애플리케이션: Websocket과 함께 실시간 데이터 스트리밍
- 마이크로서비스: 분산 시스템 설계 및 개발


### **폴더 및 파일 설명**
#### **`src/`**
- **`app.controller.ts`**: 애플리케이션의 컨트롤러로, 클라이언트 요청을 처리하는 로직을 포함합니다.
- **`app.service.ts`**: 비즈니스 로직을 처리하는 서비스 계층입니다.
- **`app.module.ts`**: 애플리케이션의 루트 모듈로, 모듈, 컨트롤러, 서비스 등을 등록합니다.
- **`main.ts`**: 애플리케이션의 엔트리 파일로, Nest.js 애플리케이션을 부트스트랩합니다.

#### **`test/`**
- **`app.e2e-spec.ts`**: End-to-End(E2E) 테스트 파일로, 애플리케이션의 전체 동작을 테스트합니다.
- **`jest-e2e.json`**: E2E 테스트를 위한 Jest 설정 파일입니다.

#### **루트 파일들**
- **`.eslintrc.js`**: ESLint 설정 파일로, 코드 스타일 및 품질 검사 규칙을 정의합니다.
- **`.prettierrc`**: Prettier 설정 파일로, 코드 포맷팅 규칙을 정의합니다.
- **`nest-cli.json`**: Nest CLI 구성 파일로, 애플리케이션의 컴파일 및 실행 관련 설정을 포함합니다.
- **`package.json`**: 프로젝트의 의존성 및 스크립트를 정의합니다.
- **`tsconfig.json` / `tsconfig.build.json`**: TypeScript 컴파일러 옵션 설정 파일입니다.
추가적인 설정/기능 구현에 대해 질문이 있으시면 알려주세요! 😊