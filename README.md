#node.js 프로젝트
* https://nodejs.org 사이트에서 nodejs 다운로드 받아 설치하기
* 특별한 경우가 아니면 1의 자리 숫자가 짝수인 버전을 다운 받는다
* nodejs 설치 후 window cmd창을 관리자 권한으로 열어서 몇가지 plugin을 설치

## NPM(nodejs Package Manager)
* cmd 창에서 실행 가능한 명령
* npm install 패키미명 형식으로 명령을 입력하여 필요한 dependency, plugin 등을 설치
* 시스템에 공통으로 사용되는 plug in 들은 npm insrall -g plugin 형식으로 명령을 입력한다.
* cpm install -g 명령은 반드시 관리자 권한으로 입력해야 한다

## 최초에 설치한 Package(plug in) 들
* nodemon : nodejs 코드를 작성하고 저장읋 ㅏ면 자동으로 재 실행하여 결과를 확인 할 수 있도록 도와주는 plugin
* express-generator : nodejs + express 프레임워크 서버 어플리케이션을 작성할때 사용하는 plugin
* create-react-app : React 기반의 프론트 프로젝트를 작성할때 사용하는 plug in
* yarn : React project를 만들어서 개발을 할때 npm을 대신하여 사용하는 package 관리자