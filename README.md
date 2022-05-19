## BOARD PROJECT
    게시판 프로젝트
## DB

## DB Structure

## Skill
    React
    
## Link

## Rule

#### COMMIT RULE

-   FEAT : 새로운 기능의 추가
-   FIX: 버그 수정
-   DOCS: 문서 수정
-   STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
-   REFACTOR: 코드 리펙토링
-   TEST: 테스트 코트, 리펙토링 테스트 코드 추가
-   CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

---

### BRANCH NAME RULE

-   master : 제품으로 출시될 수 있는 브랜치, 배포 Release(Prod) 버전의 소스가 들어있는 branch
    -   기본적으로 github 저장소를 생성하면 있는 branch이다. 배포이력을 관리하기 위한 용도로 사용한다.
-   develop : 다음 출시 버전을 개발하는 브랜치, 개발버전의 소스가 들어있는 branch
    -   일반적으로 Master branch에 병합하기 전 최종 개발버전의 소스가 들어있다. 다음 Release될 버전의 소스라고 생각하면 된다.
-   feature : 기능을 개발하는 브랜치
    -   개발자들이 기능개발을 위하여 생성/이용 하는 branch이다. 개발이 완료되면 develop와 병합하여 다른 사람들과 공유한다.
