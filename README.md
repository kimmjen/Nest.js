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

## **필수 라이브러리**

Nest.js 프로젝트에서 PostgreSQL과 TypeORM을 사용하여 데이터베이스를 연결하려면 아래와 같은 라이브러리가 필요합니다. 모노레포 구조와 도메인 기반 폴더를 고려하여 필요한 패키지를 설치합니다.


1. **Nest.js 핵심 라이브러리**
    - Nest.js 애플리케이션을 생성하고 운영하기 위한 기본 패키지.
   ```bash
   npm install @nestjs/common @nestjs/core
   ```

2. **TypeORM**
    - TypeORM은 Nest.js와 잘 통합되어 엔티티 매핑 및 ORM 기능을 제공합니다.
   ```bash
   npm install @nestjs/typeorm typeorm
   ```

3. **PostgreSQL 드라이버**
    - TypeORM에서 PostgreSQL 데이터베이스를 사용하기 위한 드라이버.
   ```bash
   npm install pg
   ```

4. **환경 변수 관리 (선택 사항)**
    - 환경 변수를 관리하기 위해 `@nestjs/config` 패키지를 사용합니다.
   ```bash
   npm install @nestjs/config
   ```

5. **데이터 검증 및 변환 (DTO 검증)**
    - `class-validator`와 `class-transformer`는 DTO를 검증하고 변환하는 데 사용됩니다.
   ```bash
   npm install class-validator class-transformer
   ```

6. **dotenv (환경 변수 지원)**
    - 환경 변수 파일(`.env`)을 로드하기 위한 패키지. `@nestjs/config` 내부적으로 이 패키지를 사용합니다.
   ```bash
   npm install dotenv
   ```

7. **개발 도구 (선택 사항)**
    - TypeScript 컴파일, 코드 포맷팅, 테스트 등 개발 도구:
      ```bash
      npm install -D typescript @types/node ts-node
      npm install -D prettier eslint
      ```

---

### **전체 설치 명령어**

아래 명령어를 사용하면 위에서 설명한 모든 라이브러리를 한 번에 설치할 수 있습니다.

```bash
npm install @nestjs/common @nestjs/core @nestjs/typeorm typeorm pg @nestjs/config class-validator class-transformer dotenv
npm install -D typescript @types/node ts-node prettier eslint
```

---

### **패키지별 역할**

| **패키지**              | **역할**                                                                                  |
|-------------------------|------------------------------------------------------------------------------------------|
| `@nestjs/common`        | Nest.js의 핵심 라이브러리. 컨트롤러, 서비스, 데코레이터 등 기본 기능 제공.                |
| `@nestjs/core`          | Nest.js 애플리케이션의 기본 동작과 부트스트래핑을 담당.                                    |
| `@nestjs/typeorm`       | TypeORM과 Nest.js의 통합 모듈. ORM 설정 및 데이터베이스 작업 지원.                         |
| `typeorm`               | ORM(Object-Relational Mapping) 라이브러리. 엔티티, 리포지토리, 데이터베이스 매핑 제공.      |
| `pg`                    | PostgreSQL 드라이버. TypeORM이 PostgreSQL과 통신할 수 있도록 지원.                         |
| `@nestjs/config`        | 환경 변수 관리를 위한 Nest.js 모듈. `.env` 파일과 연동.                                    |
| `class-validator`       | DTO 데이터 검증을 위한 라이브러리.                                                        |
| `class-transformer`     | DTO 데이터를 변환하거나 검증하기 위한 도구.                                               |
| `dotenv`                | `.env` 파일의 환경 변수를 애플리케이션에서 사용 가능하게 로드.                            |
| `typescript`            | TypeScript 컴파일을 위한 도구.                                                           |
| `@types/node`           | Node.js의 타입 정의.                                                                     |
| `ts-node`               | TypeScript 코드를 직접 실행할 수 있도록 지원.                                             |
| `prettier`              | 코드 포맷터.                                                                              |
| `eslint`                | 코드 스타일과 규칙을 검증.                                                               |

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
