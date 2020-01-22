---
title: USB 장치 연결/해제 감지
categories: 
  - MFC
tags: 
  - MFC
  - USB Device
  - Device connect/disconnect
toc: true

header:
  teaser: https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80
  overlay_image: https://images.unsplash.com/photo-1494049694820-92a3163b10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80
  overlay_filter: 0.5
  caption: "Photo by Michael Henry on Unsplash"

icon: fa-mfc
---

이번글은 USB 장치를 연결할 때 연결/해제를 감지하기 위한 방법을 정리합니다.
Dialog 기반 App에서 검증된 방법입니다.

## 1. 메인 윈도우에서 디바이스 감지

먼저 메인 Dialog에 메시지 맵을 추가합니다.
(SDI/MDI에서는 MainFrame에 등록하면 됩니다.)

Class Wizard에서는 찾을 수 없으니 수동 드록하면 됩니다.


**1. header 정의**

```cpp
// DialogBasedDlg.h
class CDialogBasedDlg {
  ...

  // Generated message map functions
protected:
  afx_msg BOOL OnDeviceChange(UINT nEventType, DWORD_PTR dwData);
};
```


**2. cpp 메시지 함수 등록**

메시지 맵에는 기존 등록된 메시지 함수 `ON_WM_DEVICECHANGE()`를 사용합니다.
아래의 예처럼 `DBT_DEVICEARRIVAL` 또는 `DBT_DEVICEARRIVAL` 이벤트를 통해 연결/해제를 감지 할 수 있습니다.

```cpp
// DialogBasedDlg.cpp
BEGIN_MESSAGE_MAP(CDialogBasedDlg, CDialogEx)
  ON_WM_DEVICECHANGE()
END_MESSAGE_MAP()

BOOL CDialogBasedDlg::OnDeviceChange(UINT nEventType, DWORD_PTR dwData)
{
  switch(nEventType)
  {
    case DBT_DEVICEARRIVAL:
      AfxMessageBox(_T("USB Device Connected"));
      break;
    case DBT_DEVICEREMOVECOMPLETE:
      AfxMessageBox(_T("USB Device Disconnected"));
      break;
  }
  return TRUE;
}
```

## 2. 메인 윈도우 외에서 디바이스 이벤트 받기

Toolbar나 다른 dialog등에서는 위와 같이 `ON_WM_DEVICECHANGE()`를 등록하여 사용할 수 없습니다. 그러나 기능적인 분리를 위해선 Toolbar나 기타 dialog에서 필요할 때가 있습니다.
가령 Device 연결을 위한 Toolbar를 제작할 때처럼요.

먼저 `RegisterDeviceNotification` 함수를 통해 이벤트를 받을 장치를 등록합니다.

**1. header 정의**

```cpp
// DialogBasedDlg.h
class CDialogBasedDlg {
  ...

  // Generated message map functions
protected:
  afx_msg LRESULT OnMsgDeviceChange(WPARAM wParam, LPARAM lParam);
};
```

**2. cpp 디바이스 메시지 등록**

각 디바이스의 GUID를 참고하여 필요한 GUID list만을 만들어 사용하시면 됩니다.
저는 `GUID_DEVINTERFACE_USB_DEVICE`에 해당하는 USB 부분만 사용했습니다.

```cpp
// DialogBasedDlg.cpp
static const GUID GUID_DEVINTERFACE_LIST[] =
{
    // GUID_DEVINTERFACE_USB_DEVICE
    { 0xA5DCBF10, 0x6530, 0x11D2, { 0x90, 0x1F, 0x00, 0xC0, 0x4F, 0xB9, 0x51, 0xED } },

    //// GUID_DEVINTERFACE_DISK
    //{ 0x53f56307, 0xb6bf, 0x11d0, { 0x94, 0xf2, 0x00, 0xa0, 0xc9, 0x1e, 0xfb, //0x8b } },

    //// GUID_DEVINTERFACE_HID,
    //{ 0x4D1E55B2, 0xF16F, 0x11CF, { 0x88, 0xCB, 0x00, 0x11, 0x11, 0x00, 0x00, //0x30 } },
    //         
    //// GUID_NDIS_LAN_CLASS
    //{ 0xad498944, 0x762f, 0x11d0, { 0x8d, 0xcb, 0x00, 0xc0, 0x4f, 0xc3, 0x35, //0x8c } }

    //// GUID_DEVINTERFACE_COMPORT
    //{ 0x86e0d1e0, 0x8089, 0x11d0, { 0x9c, 0xe4, 0x08, 0x00, 0x3e, 0x30, 0x1f, //0x73 } },

    //// GUID_DEVINTERFACE_SERENUM_BUS_ENUMERATOR
    //{ 0x4D36E978, 0xE325, 0x11CE, { 0xBF, 0xC1, 0x08, 0x00, 0x2B, 0xE1, 0x03, //0x18 } },

    //// GUID_DEVINTERFACE_PARALLEL
    //{ 0x97F76EF0, 0xF883, 0x11D0, { 0xAF, 0x1F, 0x00, 0x00, 0xF8, 0x00, 0x84, //0x5C } },

    //// GUID_DEVINTERFACE_PARCLASS
    //{ 0x811FC6A5, 0xF728, 0x11D0, { 0xA5, 0x37, 0x00, 0x00, 0xF8, 0x75, 0x3E, 0xD1 } }
};

BOOL CDialogBasedDlg::OnInitDialog()
{
  ...
  DEV_BROADCAST_DEVICEINTERFACE NotificationFilter;
  ZeroMemory(&NotificationFilter, sizeof(NotificationFilter));
  NotificationFilter.dbcc_size = sizeof(DEV_BROADCAST_DEVICEINTERFACE);
  NotificationFilter.dbcc_devicetype = DBT_DEVTYP_DEVICEINTERFACE;
  for (INT i=0; i<_countof(GUID_DEVINTERFACE_LIST); i++)
  {
    NotificationFilter.dbcc_classguid = GUID_DEVINTERFACE_LIST[i];
    RegisterDeviceNotification(GetSafeHwnd(), &NotificationFilter, DEVICE_NOTIFY_WINDOW_HANDLE);
  }
}
```

`WM_DEVICECHANGE` 메시지를 맵에 등록합니다. 이제 wParam의 값으로 [1장](#1-메인-윈도우에서-디바이스-감지)에서와 같이 연결/해제를 감지 할 수 있습니다.

```cpp
BEGIN_MESSAGE_MAP(CDialogBasedDlg, CDialogEx)
  ON_MESSAGE(WM_DEVICECHANGE, &CDialogBasedDlg::OnMsgDeviceChange)
END_MESSAGE_MAP()

LRESULT CDialogBasedDlg::OnMsgDeviceChange(WPARAM wParam, LPARAM lParam)
{
  PDEV_BROADCAST_HDR pHdr = (PDEV_BROADCAST_HDR)lParam;
  if ( pHdr->dbch_devicetype==DBT_DEVTYP_DEVICEINTERFACE )
  {
    switch(wParam)
    {
      case DBT_DEVICEARRIVAL:
        AfxMessageBox(_T("USB Device Connected"));
        break;
      case DBT_DEVICEREMOVECOMPLETE:
        AfxMessageBox(_T("USB Device Disconnected"));
        break;
    }
  }
  return 0;
}
```
