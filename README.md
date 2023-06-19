# Furo Sample React

### Furo의 빠르고 직관적인 로그인을 경험해 보세요.

본 프로젝트는 [furo-react](https://www.npmjs.com/package/furo-react) 를 활용한 로그인 시스템 예제입니다. 전체 서비스에 대한 상세한 설명은 [공식문서](https://docs.furo.one/)를 참조하세요.

<hr />

## 설치

```shell
$ yarn install
```

## 환경 설정

[Furo 콘솔](https://console.furo.one/projects)의 [프로젝트 정보] 탭으로 넘어가 다음 두 가지 작업을 진행합니다.

1. `App.js`에서 Furo 콘솔에서 가져온 `Client Id`를 붙여넣습니다.
   ```javascript
   const clientId = "YOUR_CLIENT_ID_GOES_HERE";
   ```
2. 콘솔 입력창의 callbackUri 에 http://localhost:3000 을 입력합니다.

## 시작

```shell
$ yarn start
```

## 버그 리포팅

문제에 직면하셨나요? [이곳](https://furo.hellonext.co/)에 겪은 문제와 개선점을 공유해 커뮤니티에 참여해 보세요.
