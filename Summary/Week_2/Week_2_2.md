## 2주차 - 2.React 개요 (2)

### 이전 웹에서의 DOM과 Component

웹은 각각의 컴포넌트를 거치며 데이터를 가지고 오며 페이지를 구성한다.<br>
어떠한 페이지에서 **변경사항**이 생겼을 경우(**상태가 변한 경우**) 이전의 경우<br>
**처음으로 돌아가** 다시 모든 컴포넌트를 거치며 **새로 페이지를 구성**한다.<br>

<img src="./Week_2_Images/Week_2_2_Test_Image_1.png" width="600" height="auto"><br>

### React에서의 DOM과 Component

**React**에서는 이전의 웹과 다르게 상태가 변경된 경우 **Virtual DOM**에서변경된 구조를<br>
미리 구성한 후 기존의 **React DOM**과 비교해 **변경된 컴포넌트만**찾아 재구성한다.<br>

<img src="./Week_2_Images/Week_2_2_Test_Image_2.png" width="400" height="auto"><br>

[[Image source : www.oreilly.com - learning react native]](https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch02.html)

이러한 **상태 변경 관리**는 **React**의 **Props**로 관리하게 된다.<br>
그 각각의 **상태**(데이터)는 **React**의 **State**로 관리하게 된다.<br>
많은 **컴포넌트**와 **Props**가 존재하고 서로의 컴포넌트가 **상호작용**한다면 매우 복잡해진다.<br>
