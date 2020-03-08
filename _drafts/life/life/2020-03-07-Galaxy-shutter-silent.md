---
title: 갤럭시 카메라 무음 설정
categories: 
  - Life
tags: 
  - 갤럭시
  - 카메라 무음
  - 디버그 모드
  - 셔터음 제거
toc: true

header:
  teaser: https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Kristina Flour on Unsplash

icon: fa-github
---

안드로이드 UI 2.0 버젼 업그레이드 하면 초기화 되는데

다시한번 실시해주시면 무음 변경 가능합니다.

===================

노트10으로 폰 바꾸고 처음으로 여행을 다녀왔는데, 사진찍으려니까 셔터음이 생각보다 어마무시

특히 사진 셔터음 소리는 남들한테 노트10 바꿨다는걸 자랑하는거 마냥 음량이 커서 찍기 민망할 정도였는데

한국에서는 카메라 셔터음 무음이 의무적으로 달려 나오게 되있다고 한다 (해외버전은 제외)

웃긴게 어플리케이션 (필터카메라나 무음카메라 등등) 깔면 무음으로 사진찍히는게 가능하다는.. (이럴거면 카메라무음모드좀 만들어주면 안됩니까?)

어플깔면 되겠지만, 안드로이드 쓰면서 개인적으로 예민한 부분이 어플 권한처리라던지 배터리 런타임 등등이 있기에 다른 방법을 알아보던중 ADB를 이용한 카메라 무음방법을 알게 됨.

생각보다 과정을 자세하게 설명해 놓은 페이지가 없어서 내가 직접 설정화면 캡쳐해서 공유하려고 한다.

----------

준비물 : 컴퓨터, 안드로이드 스맛폰, 케이블

일단 휴대폰에 [개발자모드]의 [UBS디버깅]을 허용시켜 줘야하는데 순서는 다음과 같다.

![](https://k.kakaocdn.net/dn/9owgB/btqznPd46hZ/1KcPRm3vjIGpzhWFKG50k1/img.jpg)

#하단 왼쪽에 있는거처럼 빌드번호를 7번 터치하면 개발자 옵션이 활성화 된다.

![](https://k.kakaocdn.net/dn/y2tzi/btqznuuuiwN/oU3F7XxoInLbA2W2Ld6lYk/img.jpg)

#[개발자옵션]에 들어가서 [USB디버깅] 사용

휴대폰은 설정이 끝났으니 컴퓨터로 가보자

일단,  Android Debug Bridge 일명 ADB도구를 다운로드 받자 (나는 윈도우유져라 윈도우버전 다운로드 클릭)

구글공식 지원 플렛폼 :  [https://developer.android.com/studio/releases/platform-tools](https://developer.android.com/studio/releases/platform-tools)

[](https://developer.android.com/studio/releases/platform-tools)

SDK 플랫폼 도구 출시 노트 | Android 개발자 | Android Developers

Android SDK 플랫폼 도구는 Android SDK의 구성요소입니다.

developer.android.com

![](https://k.kakaocdn.net/dn/dbIsVH/btqzqT0csVf/wyITBkKHCMQYocDTVogqvK/img.png)

#이런 파일이 하나 생기는데 여기서 adb.exe를 실행시켜주자

![](https://k.kakaocdn.net/dn/bxplKg/btqzpW38UAN/32iQBVy55V9A79ZVfgTexK/img.png)

#그리고 나서 shift+오른쪽마우스클릭 하면 PowerShell 창열기 탭을 클릭

**여기서 스맛폰과 컴퓨터를 연결해 주는데, 연결시 스마트폰에 '디버그 모드를 허용하시겠습니까?' 라고 묻는 탭을 허용해주자.**

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb5kztU%2FbtqzprwOYxe%2FJZzbwepUyYBdpZ40FK2HD0%2Fimg.png)
연결후에 'adb devices'라고 입력하면 'List of devices attached' 아래에 내 스맛폰이 연결되어있다고 한줄 뜬다.  
  
PowerShell에서 연결을 확인 했다면 'adb shell settings put system csc_pref_camera_forced_shuttersound_key 0' 라는 명령어를 입력하고 ENTER를 치면 끝. (스크린샷처럼 아무런 메세지가 뜨지 않으면 성공)

----------

그리고 휴대폰을 재부팅해주면 볼륨조절 중에 '시스템' 텝의 볼륨에 따라 카메라 셔터음이 조절되는걸 확인할 수 있다. (시스템볼륨을 무음로 해놓으면 카메라 셔터음이 나지 않음)

내 노트10의 경우 컴퓨터와 연결할 때 디버그 사용 허가를 해주지 않고 PowerShell에 adb devices라고 입력해서 연결되있는 디바이스가 없다고 해서 30분 해맨듯.

셔터음을 내 마음대로 볼륨조정할 수 있는게 가장 큰 장점이랄까.

것보다 카메라 무음모드 허용해주면 안될까 싶다. 어차피 카메라 무음모드를 마음먹은 사람들은 어떻게든 만들테니까. (악용하는 사람에 대한 처벌을 강화하는 쪽이 맞지않나 싶다)
  