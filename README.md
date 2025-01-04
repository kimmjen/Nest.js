# **Nest.js 프로젝트**

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Nest.js는 Node.js를 기반으로 한 진보된 백엔드 프레임워크로, TypeScript를 기본으로 사용하며, 모듈 기반 구조와 강력한 의존성 주입 컨테이너를 통해 대규모 애플리케이션 개발에 최적화되어 있습니다.

---

## **Project 설정**

### Node Version 22

Nest.js 프로젝트는 Node.js v22 이상에서 실행되도록 설계되었습니다. 프로젝트 루트의 `package.json` 파일에 다음 설정이 포함되어 있습니다:

```json
"engines": {
"node": ">=22"
}
```

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

## **프로젝트 구조**

```markdown
src/
├── common/ # 공통 유틸리티, 필터, 가드 등
│ ├── database/ # 데이터베이스 설정
│ │ ├── database.module.ts
│ │ ├── database.service.spec.ts
│ │ ├── database.service.ts
│ │ └── typeorm.config.ts
│ ├── filters/ # 예외 필터
│ │ └── http-exception.filter.ts
│ ├── guards/ # 인증 관련 가드
│ │ └── jwt-auth.guard.ts
│ └── middleware/ # 공통 미들웨어
│ └── logging.middleware.ts # 요청 및 응답 로깅 미들웨어
├── modules/ # 주요 비즈니스 로직 모듈
│ ├── auth/ # 인증 모듈
│ │ ├── dto/ # 데이터 전송 객체 (DTO)
│ │ │ └── login-auth.dto.ts
│ │ ├── entities/ # 엔티티
│ │ │ └── auth.entity.ts
│ │ ├── auth.controller.spec.ts # 인증 컨트롤러 테스트
│ │ ├── auth.controller.ts # 인증 컨트롤러
│ │ ├── auth.module.ts # 인증 모듈 설정
│ │ ├── auth.repository.ts # 인증 관련 데이터베이스 접근
│ │ ├── auth.service.ts # 인증 비즈니스 로직
│ │ ├── jwt.strategy.ts # JWT 인증 전략
│ │ └── README.md # 인증 모듈 관련 설명
│ ├── protected/ # 보호된 경로 모듈
│ │ ├── protected.controller.spec.ts # 보호된 컨트롤러 테스트
│ │ ├── protected.controller.ts # 보호된 컨트롤러
│ │ └── protected.module.ts # 보호된 모듈 설정
│ ├── users/
│ │ ├── dto/ # 데이터 전송 객체 (DTO)
│ │ │ ├── create-user.dto.ts # 사용자 생성 시 필요한 데이터
│ │ │ └── update-user.dto.ts # 사용자 업데이트 시 필요한 데이터
│ │ ├── entities/ # 사용자 엔티티
│ │ │ └── user.entity.ts # User 테이블과 매핑되는 엔티티
│ │ ├── users.controller.spec.ts # UsersController의 테스트 코드
│ │ ├── users.controller.ts # 사용자 관련 API 요청을 처리하는 컨트롤러
│ │ ├── users.module.ts # Users 모듈 정의
│ │ ├── users.repository.ts # 사용자 데이터베이스 접근 로직
│ │ ├── users.service.spec.ts # UsersService의 테스트 코드
│ │ └── users.service.ts # 사용자 비즈니스 로직
├── app.controller.spec.ts # 기본 앱 컨트롤러 테스트
├── app.controller.ts # 기본 앱 컨트롤러
├── app.module.ts # 루트 모듈
├── app.service.ts # 기본 앱 서비스
└── main.ts # 애플리케이션 진입점
```

## **사용 사례**

- REST API: 전통적인 RESTful API 서버 구축
- GraphQL API: GraphQL 기반의 데이터 서버 개발
- 실시간 애플리케이션: Websocket과 함께 실시간 데이터 스트리밍
- 마이크로서비스: 분산 시스템 설계 및 개발

### **폴더 및 파일 설명**

폴더 및 파일 설명

#### **src/**

- app.controller.ts: 애플리케이션의 컨트롤러로, 클라이언트 요청을 처리하는 로직을 포함합니다.
- app.service.ts: 비즈니스 로직을 처리하는 서비스 계층입니다.
- app.module.ts: 애플리케이션의 루트 모듈로, 모듈, 컨트롤러, 서비스 등을 등록합니다.
- main.ts: 애플리케이션의 엔트리 파일로, Nest.js 애플리케이션을 부트스트랩합니다.

#### **common/**

- database/: 데이터베이스 관련 설정을 포함합니다.
    - database.module.ts: 데이터베이스 연결 설정과 관련된 모듈 정의.
    - typeorm.config.ts: TypeORM 설정을 정의한 파일.
- filters/
    - http-exception.filter.ts: HTTP 예외를 처리하고 표준화된 에러 응답을 생성하는 필터.
- guards/
    - jwt-auth.guard.ts: JWT 기반 인증 가드로, 보호된 경로에 대한 접근을 제어합니다.
- middleware/
    - logging.middleware.ts: 요청 및 응답 로깅을 처리하는 미들웨어.

#### **modules/**

- auth/ (인증 모듈)
    - dto/
        - login-auth.dto.ts: 로그인 요청 시 데이터 구조를 정의한 DTO.
    - auth.controller.ts: 인증 관련 요청을 처리하는 컨트롤러.
    - auth.service.ts: 인증 비즈니스 로직을 처리하는 서비스.
    - jwt.strategy.ts: JWT 기반 인증 전략 정의.
    - auth.module.ts: 인증 모듈을 정의하는 파일.

- users/ (사용자 관리 모듈)
    - dto/
        - create-user.dto.ts: 사용자 생성 시 요청 데이터를 정의.
        - update-user.dto.ts: 사용자 업데이트 요청 데이터를 정의.
    - entities/
        - user.entity.ts: 사용자 테이블과 매핑되는 TypeORM 엔티티.
    - users.controller.ts: 사용자 관리 요청을 처리하는 컨트롤러.
    - users.service.ts: 사용자 관리 비즈니스 로직을 처리하는 서비스.
    - users.repository.ts: 사용자 데이터베이스 접근을 처리하는 리포지토리.
    - users.module.ts: 사용자 관리 모듈을 정의.

- test/
    - app.e2e-spec.ts: End-to-End(E2E) 테스트 파일로, 애플리케이션의 전체 동작을 테스트합니다.
    - jest-e2e.json: E2E 테스트를 위한 Jest 설정 파일입니다.

#### **루트 파일들**

- .eslintrc.js: ESLint 설정 파일로, 코드 스타일 및 품질 검사 규칙을 정의합니다.
- .prettierrc: Prettier 설정 파일로, 코드 포맷팅 규칙을 정의합니다.
- nest-cli.json: Nest CLI 구성 파일로, 애플리케이션의 컴파일 및 실행 관련 설정을 포함합니다.
- package.json: 프로젝트의 의존성 및 스크립트를 정의합니다.
- tsconfig.json / tsconfig.build.json: TypeScript 컴파일러 옵션 설정 파일입니다.

### **패키지별 역할**

| **패키지**              | **역할**                                                         |
|----------------------|----------------------------------------------------------------|
| `@nestjs/common`     | Nest.js의 핵심 라이브러리. 컨트롤러, 서비스, 데코레이터 등 기본 기능 제공.                |
| `@nestjs/core`       | Nest.js 애플리케이션의 기본 동작과 부트스트래핑을 담당.                             |
| `@nestjs/typeorm`    | TypeORM과 Nest.js의 통합 모듈. ORM 설정 및 데이터베이스 작업 지원.                |
| `typeorm`            | ORM(Object-Relational Mapping) 라이브러리. 엔티티, 리포지토리, 데이터베이스 매핑 제공. |
| `pg`                 | PostgreSQL 드라이버. TypeORM이 PostgreSQL과 통신할 수 있도록 지원.            |
| `@nestjs/config`     | 환경 변수 관리를 위한 Nest.js 모듈. `.env` 파일과 연동.                        |
| `class-validator`    | DTO 데이터 검증을 위한 라이브러리.                                          |
| `class-transformer`  | DTO 데이터를 변환하거나 검증하기 위한 도구.                                     |
| `dotenv`             | `.env` 파일의 환경 변수를 애플리케이션에서 사용 가능하게 로드.                         |
| `typescript`         | TypeScript 컴파일을 위한 도구.                                         |
| `@types/node`        | Node.js의 타입 정의.                                                |
| `ts-node`            | TypeScript 코드를 직접 실행할 수 있도록 지원.                                |
| `prettier`           | 코드 포맷터.                                                        |
| `eslint`             | 코드 스타일과 규칙을 검증.                                                |
| `@nestjs/jwt`        | JWT(Json Web Token)을 생성하고 검증하기 위한 라이브러리.                       |
| `dayjs`              | 날짜와 시간을 관리하고 포맷팅을 제공하는 경량 라이브러리.                               |
| `@nestjs/passport`   | 인증 및 권한 관리를 위한 Passport.js와 통합.                                |
| `passport-jwt`       | JWT를 활용한 Passport.js 인증 전략 제공.                                 |
| `swagger-ui-express` | Swagger UI를 제공하며 API 문서를 생성하고 시각화.                             |
| `@nestjs/swagger`    | Nest.js와 통합된 Swagger 모듈로 API 문서를 작성 및 관리.                      |
| `@nestjs/winston`    | 애플리케이션 로깅을 위한 Winston과 Nest.js 통합 모듈.                          |
| `winston`            | 유연하고 강력한 로깅 라이브러리로, 다양한 로깅 수준 및 출력 형식 제공.                      |

---

### **데이터베이스 설정 요약**

1. **TypeORM 설정**
    - `src/common/database/typeorm.config.ts`에 TypeORM 설정 작성.

2. **환경 변수**
    - `.env` 파일에 데이터베이스 정보를 저장:
      ```plaintext
      DB_HOST=localhost
      DB_PORT=5432
      DB_USERNAME=postgres
      DB_PASSWORD=your_password
      DB_NAME=my_database
      ```

3. **TypeORM 연결**
    - `DatabaseModule`에서 설정한 TypeORM을 애플리케이션에 등록:
      ```typescript
      import { TypeOrmModule } from '@nestjs/typeorm';
      ```

---

### **추가적으로 고려할 라이브러리**

- **Migration 관리**
    - 데이터베이스 스키마 변경을 관리하려면 TypeORM의 마이그레이션 기능을 사용하거나 `typeorm-cli`를 설치합니다.
      ```bash
      npm install -g typeorm
      ```

- **로그 관리**
    - 애플리케이션 로그를 관리하기 위해 `winston` 또는 `pino`와 같은 로깅 라이브러리를 사용할 수 있습니다.
      ```bash
      npm install @nestjs/winston winston
      ```

- **테스트 도구**
    - 유닛 테스트 및 통합 테스트를 위한 Jest 라이브러리:
      ```bash
      npm install -D jest @nestjs/testing ts-jest
      ```
