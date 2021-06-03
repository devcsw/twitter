[summary의 사본](https://www.notion.so/e1795f7dc43d46c5b72def842d9d4c85)

### 공통 사항

- Model

    ```json
    tweet = {
      id: string,  // 트윗 아이디
      text: string,  // 트윗 텍스트
      createdAt: Date, // 트윗 생성 날짜
      name: string,  // 사용자 이름
      username: string,  // 사용자 닉네임 (아이디)
      url: string (optional) // 사용자 프로파일 사진 URL
    }

    user = {
       id: string; // 자동으로 설정
       usernam: string;
       name: string;
       profile_url: string; // optional
    }, 
    ```

- 공통 Request header  (계정 관련 API 추가 후 사용 예정)

    ```jsx
    {
      "x-access-token" : string  
    }
    ```

### 전체 트윗 조회

```json
GET /tweets
```

- Response `200`

    ```json
    {
      Array<tweet>
    }
    ```

- Error codes
    - 로그인하지 않은 사용자

    ```json
    Status code: 401 Unauthorized
    ```

### 특정 유저 트윗 조회

```json
GET /tweets/:userId
```

- Response `200`

    ```json
    {
      Array<tweet>
    }
    ```

- Error codes
    - 선택한 유저 정보 없음

    ```json
    Status code: 404 Not found
    ```

    - 로그인하지 않은 사용자

    ```json
    Status code: 401 Unauthorized
    ```

### 트윗 생성

```json
POST /tweets
```

- Request

    ```json
    {
      user, 
      body: string,
    }
    ```

- Response `201`

    ```json
    {
      tweet
    }
    ```

- Error codes
    - 로그인하지 않은 사용자

    ```json
    Status code: 401 Unauthorized
    ```

### 트윗 수정

```json
PUT /tweets/:id
```

- Request

    ```json
    { 
      body: string
    }
    ```

- Response `200`

    ```json
    {
      tweet
    }
    ```

- Error codes
    - 선택한 트윗 정보 없음

    ```json
    Status code: 404 Not found
    ```

    - 로그인한 사용자와 트윗 작성자가 다름

    ```json
    Status code: 403 Forbidden
    ```

    - 로그인하지 않은 사용자

    ```json
    Status code: 401 Unauthorized
    ```

### 트윗 삭제

```json
DELETE /tweets/:id
```

- Response `204`

    ```json
    Status code: 204 No content
    ```

- Error codes
    - 선택한 트윗 정보 없음

    ```json
    Status code: 404 Not found
    ```

    - 로그인한 사용자와 트윗 작성자가 다름

    ```json
    Status code: 403 Forbidden
    ```

    - 로그인하지 않은 사용자

    ```json
    Status code: 401 Unauthorized
    ```

# Account

[summary의 사본](https://www.notion.so/0cfbd2d102e94738babe347559024109)
