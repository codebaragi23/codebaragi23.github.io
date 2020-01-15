---
title: 체크박스, 리스트 등 투명하게 하기
categories:
  - MFC
tags:
  - MFC
icon: fa-mfc
---

보통 컨트롤들의 배경을 투명하게 하기 위해서는 다음과 같이 합니다.

WM_CTLCOLOR 을 추가 하고,

if(pWnd->GetDlgCtrlID() == 컨트롤 아디)
pDC->SetBkMode(TRANSPARENT);
return (HBRUSH)GetStockObject(NULL_BRUSH);

그런데 이상하게 체크박스와 리스트, 라디오 등은 투명이 적용이 안되더라구요.

![](https://t1.daumcdn.net/cfile/tistory/1567E7344F02647337)

검색 결과 XP 테마의 버그때문이라고 하더군요.

해결을 위해서는,

#pragma comment(lib, "UxTheme.lib") 를 추가하고,

다이얼로그 초기화(Initdialog)에서

SetWindowTheme(m_ctlIsUrl.m_hWnd, L"", L""); 을 해주니 잘 작동합니다.

* m_ctlIsUrl은 체크박스 입니다.


![](https://t1.daumcdn.net/cfile/tistory/1667E7344F02647338)

출처: https://phiru.tistory.com/73 [보금자리]