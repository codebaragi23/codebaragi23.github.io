---
title: 에디트 컨트롤(CEdit) 정렬
categories:
  - MFC
tags:
  - CEdit vertical align
  - CEdit spacing
  - CEdit margin

header:
  teaser: https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Plush Design Studio on Unsplash

icon: fa-mfc
---

에디트 컨트롤은 스태틱 텍스트 컨트롤과 달리 오직 수평방향의 정렬만 제공하고 있습니다.

이 포스트에서는 지원하지 않는 수직 방향의 정렬을 대신하여 여백을 조정해 해결하는 내용을 정리하고자 합니다.

기본 설정에서는 대화상자에 컨트롤을 배치하고 크기를 조정하다 보면 아래와 같이 에디트 컨트롤에 입력된 문자열이 위쪽으로 치우칩니다.

![Default style][pic1]

여기서 수평 방향의 정렬은 속성 창의 Align Text를 설정하여 가운데 정렬 오른쪽 정렬이 가능합니다.

![Properties][pic2]  
_속성창에서 가운데 정렬_

![Text Align-Center][pic3]  
_가운데 정렬 예_

이제 여백을 조정해 다른 방법으로 에디트 컨트롤의 텍스트를 정렬해 보도록 하겠습니다.

**1. `CEdit::SetMargins` 함수 사용**

`CEdit::SetMargins` 함수는 좌/우 여백을 부여하는 함수입니다.

에디트 컨트롤의 아이디가 `IDC_EDIT1`일때 아래의 코드로 좌/우 8의 여백을 줄 수 있습니다.

```cpp
((CEdit *)GetDlgItem(IDC_EDIT1))->SetMargins(8, 8);
```

이때, 아래와 같이 `AutoHScroll`을 `False`로 설정하였을 경우 우측의 여백을 확인할 수 있습니다.
또한 `Muliline`속성을 해제한 즉, Single line의 경우 우측이 여백만큼 남기고 입력이 되지 않습니다.

![Properties][pic4]  
_AUtoHScroll 설정_

![Properties][pic5]

`CEdit::SetMargins` 좌/우 여백은 쉽게 줄 수 있지만 수직 방향의 여백은 줄 수 없습니다.
아래에서 수직 방향의 여백까지 조절하는 방법을 살펴보겠습니다.

  
**2. `CEdit::SetRect` 함수 사용**

`CEdit::SetRect` 함수는 `CEdit::SetMargins` 함수와 달리 상/하/좌/우측의 여백을 모두 설정할 수 있습니다.
좀 더 정확히 말하면 Client 영역에서 에디트 컨트롤의 영역을 설정하는 함수 입니다.
먼저 이 함수를 사용하기 위해서는 에디트 컨트롤의 속성에서 `Multiline`을 설정해야만 합니다.

![Properties][pic6]  
_Multiline 설정_

좌우 5, 상하 10의 여백을 주고자 할 경우 아래의 코드와 같이 Client 영역의 크기를 구한 후 여백 크기만큼 rect를 조정하고
`CEdit::SetRect`로 설정하면 됩니다.

```cpp
  CClientDC dc(GetDlgItem(IDC_EDIT1));  
  CRect rt; GetDlgItem(IDC_EDIT1)->GetClientRect(&rt);

  rt.left  += 5;
  rt.right -= 5;
  
  rt.top    += 10;
  rt.bottom -= 10;

  ((CEdit*)GetDlgItem(IDC_EDIT1))->SetRect(&rt);
```

추가로, 현재 문자열을 기준으로 수평/수직에 대해 가운데 정렬을 원할 경우 아래의 코드를 적용하면 됩니다.
에디트 컨트롤의 DC를 가져와 `GetTextExtent`를 통해 출력될 text의 크기를 구하고 에디트 컨트롤의 Client 크기의 차를 1/2한 여백을 주는 코드입니다.
> 참고로 `GetTextExtent`와 `SetRect`간에 오차가 있는지 좌/우 여백에 2씩을 더 줘야지만 모든 문자가 출력이 되더군요. 이유를 알게되면 내용 수정하겠습니다.

```cpp
  CClientDC dc(GetDlgItem(IDC_EDIT1));
  dc.SelectObject(GetDlgItem(IDC_EDIT1)->GetFont());

  CString csText; GetDlgItem(IDC_EDIT1)->GetWindowText(csText);
  CSize szText = dc.GetTextExtent(csText);

  CRect rt; GetDlgItem(IDC_EDIT1)->GetClientRect(&rt);
  CSize szClient = rt.Size();

  rt.left  += (szClient.cx-szText.cx-2)/2;
  rt.right -= (szClient.cx-szText.cx-2)/2;
  
  rt.top    += (szClient.cy-szText.cy)/2;
  rt.bottom -= (szClient.cy-szText.cy)/2;

  ((CEdit*)GetDlgItem(IDC_EDIT1))->SetRect(&rt);
```

![Vertical/Horizontal Center][pic7]  
_수평/수직에 대해 가운데 정렬_


[pic1]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic1.png
[pic2]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic2.png
[pic3]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic3.png
[pic4]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic4.png
[pic5]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic5.png
[pic6]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic6.png
[pic7]: /assets/images/posts/ui_dev/mfc/2020-01-30-Edit control align-pic7.png