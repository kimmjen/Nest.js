# **AuthModule**

## **개요**
`AuthModule`은 사용자 인증을 처리하는 모듈입니다. 로그인 요청을 처리하고 JWT를 생성 및 검증하여 보호된 경로에 접근할 수 있도록 합니다.

---

## **API 경로**

| HTTP 메서드 | 경로         | 설명                  |
|-------------|--------------|-----------------------|
| `POST`      | `/auth/login` | 사용자 로그인 (JWT 발급) |

---

## **구성 요소**

### **1. DTO**
- `dto/login-auth.dto.ts`: 로그인 요청 시 전달받는 데이터 구조를 정의.

### **2. 엔티티**
- `entities/auth.entity.ts`: 인증 관련 데이터베이스 엔티티.

### **3. 서비스**
- `auth.service.ts`: 비즈니스 로직 (JWT 생성 및 유효성 검사).

### **4. 컨트롤러**
- `auth.controller.ts`: 로그인 API 처리.

### **5. JWT 전략**
- `jwt.strategy.ts`: Passport.js를 사용한 JWT 인증 로직 정의.

---

## **사용 방법**
1. `.env` 파일에 JWT 시크릿 키 추가:
   ```plaintext
   JWT_SECRET=your_secret_key