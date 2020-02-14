---
title: 반응형 웹에서 가로세로 비율 유지
categories:
  - GitHub Pages
tags:
  - 가로세로 비율 유지
  - 반응형

header:
  teaser: https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Ryan Plomp on Unsplash

icon: fa-github
---

반응형 웹디자인에서 `width: 100%`를 사용하면서 컨테이너의 너비와 높이의 비율을 유지하고 싶은 경우가 많습니다.

너비에 대한 높이도 상수로 고정이라면 어렵지 않지만 너비가 반응형으로 변경될 때 높이 또한 반응형으로 변경되길 바라는 경우가 생겨 다음을 이용해 처리했습니다.

바로 패딩이나 마진 등을 이용한 조정 방법입니다.

```css
.container {
	position: relative;
	width: 100%;
	height: 0;
  overflow: hidden;
	padding-bottom: 75%;  /* 4:3 Aspect ratio */
}

.container .contents {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
```

여기서 높이를 0으로 하고 `padding`으로 비율을 지정하면 가로세로 비율이 유지가 됩니다.

또한 안의 `.contents`는 `position: absolute;`로 지정을 해 주면 `overflow: hidden;`과 패딩으로 조정되는 비율 유지가 완성됩니다.

아래는 비율에 따른 패딩 비율입니다.

**16:9 Aspect Ratio**
```css
.container {
  padding-bottom: 56.25%;
}
```

**4:3 Aspect Ratio**
```css
.container {
  padding-bottom: 75%;
}
```

**3:2 Aspect Ratio**
```css
.container {
  padding-bottom: 66.66%;
}

**8:5 Aspect Ratio**
```css
.container {
  padding-bottom: 62.5%;
}
```
