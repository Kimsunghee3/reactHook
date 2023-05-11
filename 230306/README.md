### 리액트 초기 셋팅
```sh
# 특정디렉터리에 설치하고 싶은 경우
$ npx create-react-app [디렉터리명]

# 현재 경로에 설치하고 싶은 경우
$ npx create-react-app .
$ npm install react-router-dom styled-components
```

### create-react-app(CRA)
create-react-app은 webpack, babel이 설정되어있다.
webpack을 통해서 react프로젝트를 구성했다면, create-react-app이라는 패키지가 존재하며 NodeJS환경으로 구성되어있다. 
```sh
# 설치
$ npx create-react-app [디렉터리명]
```

### CRA
CRA로 CSR을 구현해보자~

### package.json
개발시에는 `start`만 사용해도 된다.
```json
"scripts": {
    // webpack에서 dev server를 통해서 리액트를 실행시켜줌(dev server를 열어줌)
    // npm run start
    "start": "react-scripts start",

    // dev server를 사용하지 않고 컴파일(번들링)만 진행시켜줌
    // npm run build
    "build": "react-scripts build",

    // test코드를 실행시켜준다.
    // npm run test
    "test": "react-scripts test",

    // 현재 갖고 있는 프로젝트를 풀어준다
    // 단 사용시 이전 상태로 돌아갈 수 없으므로 사용을 권하지 않는다.
    "eject": "react-scripts eject"
  },
```


### build
npm run build를 하게 되면 build폴더가 생성되면서 


### start
npm run start를 하게 되면 react창이 뜨게 된다.


### src
- component
- layout
- pages
- hooks: 커스텀 훅

