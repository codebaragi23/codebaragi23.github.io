---
title: 체크박스, 라디오 박스 등 투명 적용
categories:
  - MFC
tags:
  - MFC
  - Transparent

header:
  teaser: https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
  overlay_image: https://images.unsplash.com/photo-1578021122639-7af4e73ba117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
  overlay_filter: 0.5
  caption: "Photo by Sofia Guaico on Unsplash"

icon: fa-mfc
---

보통 컨트롤들의 배경을 투명하게 하기 위해서는 다음과 같이 합니다.

Message map에 WM_CTLCOLOR 을 추가 하고,

OnCtrlColor에서 다음 코드를 적용합니다.

```cpp
if(pWnd->GetDlgCtrlID() == CtrlID)
{
  pDC->SetBkMode(TRANSPARENT);
  hbr = (HBRUSH)GetStockObject(NULL_BRUSH);
}
```
_`CtrlID`는 각 컨트롤의 ID를 넣으시면 됩니다._

그런데 체크박스와 라디오 박스 등은 아래처럼 투명이 적용이 안되더군요.

![][pic1]

찾아보니 XP 테마 버그때문이라고 합니다.

해결방법은 다음과 같이 테마를 제거하는것입니다.

Initdialog에서

```cpp
SetWindowTheme(GetDlgItem(CtrlID)->GetSafeHwnd(), T(""), _T(""));
```

혹시 `SetWindowTheme`를 찾을 수 없다면 `#pragma comment(lib, "UxTheme.lib")` 를 추가하시면 됩니다.

![][pic2]


[pic1]: /assets/images/posts/ui_dev/MFC/2019-12-09-Transparent Controls-pic1.png
[pic2]: /assets/images/posts/ui_dev/MFC/2019-12-09-Transparent Controls-pic2.png