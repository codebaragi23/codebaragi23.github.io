---
title: "임의의 Dialog에서 WM_DEVICECHANGE를 등록해서 사용하기(USB 장치 연결/해제 감지)"
categories: 
  - MFC
tags: 
  - MFC
  - USB Device
  - Device connect/disconnect
icon: fa-mfc
---

USB to RS232 장비를 사용하는 프로그램을 작성 중,

외부 장치 연결이 끊어졌는데도 RS232 포트는 그대로 잡혀 있는 문제를 발견.

구글링 결과, 시리얼 포트의 연결을 감지하는 방법은 없다는 결론을 얻었습니다.

MS에서 공식적으로 안된다고 하더군요.



그래서 다른 방법을 찾던 중...

장치관리자를 보면 USB 장치 연결/해제가 바로 바로 감지되는 것에 착안...

구글링 해보니 WM_DEVICECHANGE 메세지가 그것이더군요.



아래 게시물을 참조했습니다.

http://www.codeproject.com/Articles/14500/Detecting-Hardware-Insertion-and-or-Removal



단, 다이얼로그 베이스에서는 잘 동작하지만 SDI나 MDI 프로젝트이면 동작되지 않을 수도 있습니다.

뭔가 하나를 더 해줘야 한다고 하는 글을 어디선가 스치듯 본 기억이...




*Dlg.h
```cpp
class xxx{
  ...
  LRESULT OnMsgDeviceChange(WPARAM wParam, LPARAM lParam);
  ...
};
```




xxx.cpp
```cpp
static const GUID GUID_DEVINTERFACE_LIST[] =
{
    // GUID_DEVINTERFACE_USB_DEVICE
    { 0xA5DCBF10, 0x6530, 0x11D2, { 0x90, 0x1F, 0x00, 0xC0, 0x4F, 0xB9, 0x51, 0xED } },

    // GUID_DEVINTERFACE_DISK
    { 0x53f56307, 0xb6bf, 0x11d0, { 0x94, 0xf2, 0x00, 0xa0, 0xc9, 0x1e, 0xfb, 0x8b } },

    // GUID_DEVINTERFACE_HID,
    { 0x4D1E55B2, 0xF16F, 0x11CF, { 0x88, 0xCB, 0x00, 0x11, 0x11, 0x00, 0x00, 0x30 } },
             
    // GUID_NDIS_LAN_CLASS
    { 0xad498944, 0x762f, 0x11d0, { 0x8d, 0xcb, 0x00, 0xc0, 0x4f, 0xc3, 0x35, 0x8c } }

    //// GUID_DEVINTERFACE_COMPORT
    //{ 0x86e0d1e0, 0x8089, 0x11d0, { 0x9c, 0xe4, 0x08, 0x00, 0x3e, 0x30, 0x1f, 0x73 } },

    //// GUID_DEVINTERFACE_SERENUM_BUS_ENUMERATOR
    //{ 0x4D36E978, 0xE325, 0x11CE, { 0xBF, 0xC1, 0x08, 0x00, 0x2B, 0xE1, 0x03, 0x18 } },

    //// GUID_DEVINTERFACE_PARALLEL
    //{ 0x97F76EF0, 0xF883, 0x11D0, { 0xAF, 0x1F, 0x00, 0x00, 0xF8, 0x00, 0x84, 0x5C } },

    //// GUID_DEVINTERFACE_PARCLASS
    //{ 0x811FC6A5, 0xF728, 0x11D0, { 0xA5, 0x37, 0x00, 0x00, 0xF8, 0x75, 0x3E, 0xD1 } }
};
BOOL xxx::OnInitDialog()
{
  ...
  HDEVNOTIFY hDevNotify;
  DEV_BROADCAST_DEVICEINTERFACE NotificationFilter;
  ZeroMemory( &NotificationFilter, sizeof(NotificationFilter) );
  NotificationFilter.dbcc_size = sizeof(DEV_BROADCAST_DEVICEINTERFACE);
  NotificationFilter.dbcc_devicetype = DBT_DEVTYP_DEVICEINTERFACE;
  for(int i=0; i<sizeof(GUID_DEVINTERFACE_LIST)/sizeof(GUID); i++)
  {
    NotificationFilter.dbcc_classguid = GUID_DEVINTERFACE_LIST[i];
    hDevNotify = RegisterDeviceNotification(this->GetSafeHwnd(), &NotificationFilter, DEVICE_NOTIFY_WINDOW_HANDLE);
    if( !hDevNotify )
        return FALSE;
  }
  ...
}

//메세지맵 추가:
BEGIN_MESSAGE_MAP()
  ON_MESSAGE(WM_DEVICECHANGE, &xxx::OnMsgDeviceChange)
  //}}AFX_MSG_MAP
END_MESSAGE_MAP()


LRESULT xxx::OnMsgDeviceChange(WPARAM wParam, LPARAM lParam)
{
  if ( DBT_DEVICEARRIVAL == wParam || DBT_DEVICEREMOVECOMPLETE == wParam ) {
    PDEV_BROADCAST_HDR pHdr = (PDEV_BROADCAST_HDR)lParam;
    PDEV_BROADCAST_DEVICEINTERFACE pDevInf;
    PDEV_BROADCAST_HANDLE pDevHnd;
    PDEV_BROADCAST_OEM pDevOem;
    PDEV_BROADCAST_PORT pDevPort;
    PDEV_BROADCAST_VOLUME pDevVolume;
    switch( pHdr->dbch_devicetype ) {
      case DBT_DEVTYP_DEVICEINTERFACE:    //Device 연결
        pDevInf = (PDEV_BROADCAST_DEVICEINTERFACE)pHdr;
        if(wParam == DBT_DEVICEARRIVAL)
          AfxMessageBox(_T("Connected"));
        else if(wParam == DBT_DEVICEREMOVECOMPLETE)    //Device 연결 해제
          AfxMessageBox(_T("Removed"));   
        break;

      case DBT_DEVTYP_HANDLE:
        pDevHnd = (PDEV_BROADCAST_HANDLE)pHdr;
        break;

      case DBT_DEVTYP_OEM:
        pDevOem = (PDEV_BROADCAST_OEM)pHdr;
        break;

      case DBT_DEVTYP_PORT:
        pDevPort = (PDEV_BROADCAST_PORT)pHdr;
        break;

      case DBT_DEVTYP_VOLUME:
        pDevVolume = (PDEV_BROADCAST_VOLUME)pHdr;
        break;
    }
  }
  return 0;
}
```


Device 연결 / 해제시에 pDevInf의 멤버를 참조하여 VID, PID를 찾으면 어떤 장치인지 알 수 있습니다. 단, 운영체제에 따라서 대문자 혹은 소문자로 나올 수 있으니 주의하셔야 합니다.

출처: [https://uglytree.tistory.com/307[못생긴나무]](https://uglytree.tistory.com/307)