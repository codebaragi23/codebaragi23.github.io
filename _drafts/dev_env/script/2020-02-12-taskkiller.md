---
title: task 강제 종료 배치파일 제작
categories: 
  - Script
tags: 
  - 윈도우 CMD 배치
  - CMD Batch
toc: true

header:
  teaser: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Kelly Sikkema on Unsplash

icon: fa-github
---

이 글은 윈도우 개발을 하며 필요했던 배치파일 제작에 관한 글입니다.

`Visual Studio`(이하 VS)에서 특히, `multi-thread` 환경에서 개발을 하다보면 윈도우의 `작업 관리자`(Task Manager)에서 종료하여도 빌드하려고 하면 아래와 같은 에러를 종종 만나게 됩니다.

```bash
LINK : fatal error LNK1168: cannot open <file>.exe for writing
```

이런 상황에서 아무리 VS를 껐다 켜도 결국 같은 메시지를 받게되고 예전에는 결국 로그오프 또는 재시작을 통해야만 해결이 되기도 했죠.

원인은 백그라운드로 프로세스의 thread가 죽지 않고 계속 돌아 좀비 쓰레드가 되었기 때문입니다.

이를 해결하기 위해 `tasklist` 명령어로부터 해당 이름의 프로세스를 찾아 `taskkill` 명령어로 강제 종료 시키는 방법을 사용할 수 있습니다.

> 예전에 쓰던 것은 **unlocker**라는 것인데 특정 프로세스를 찾거나 또는 실행프로그램에서 탐색기 지원으로 즉시 종료 시키는데 사용할 수 있는 유틸도 유용합니다. 더이상 업데이트는 없는 듯 합니다.
> 

예를 들어 `Miscrosoft Edge`에 대한 강제 종료를 수행해 보겠습니다.

프로세스의 이름은 `MicrosoftEdge.exe` 입니다.

먼저 `taskilst` 명령어의 `/fi` 옵션으로 프로세스를 찾습니다.

>`taskilst` 명령어에 대한 문서는 아래 MS 문서를 참고하세요.  
>[tasklist \| Microsoft Docs](https://docs.microsoft.com/ko-kr/windows-server/administration/windows-commands/tasklist)

```bash
C:\>tasklist /fi "IMAGENAME eq MicrosoftEdge.exe"

이미지 이름                    PID 세션 이름              세션#  메모리 사용
========================= ======== ================ =========== ============
MicrosoftEdge.exe            15476 Console                    1     82,168 K
```

`/fi` 옵션으로는 `eq` 또는 `ne` 즉, equal이나 not equal의 옵션밖에 없습니다. 즉 정확한 이름을 알지 못할 때는 찾을 수가 없죠.

그래서 저는 이 옵션보다는 활용 범위가 좋은 `find` 명령어를 사용해 보도록 하겠습니다.

>`find` 명령어에 대한 문서는 아래 MS 문서를 참고하세요.  
>[find \| Microsoft Docs](https://docs.microsoft.com/ko-kr/windows-server/administration/windows-commands/find)


```bash
C:\>tasklist | find "Edge"
MicrosoftEdge.exe            15476 Console                    1     81,740 K
MicrosoftEdgeSH.exe          35836 Console                    1     15,896 K
MicrosoftEdgeCP.exe          37408 Console                    1     94,404 K
```

이제 2번째 인자인 PID로 찾은 프로세스들을 `taskkill` 명령어를 통해 강제 종료해 보도록 하겠습니다.

>`taskkill` 명령어에 대한 문서는 아래 MS 문서를 참고하세요.  
>[taskkill \| Microsoft Docs](https://docs.microsoft.com/ko-kr/windows-server/administration/windows-commands/taskkill)

```bash
C:\>taskkill /f /pid 15476
성공: 프로세스(PID 15476)가 종료되었습니다.
```

이제 마지막으로 배치 파일을 만들어 보도록 하겠습니다.

`tasklist` 명령어 결과에서  Edge 이름이 있는 모든 라인을 받아 해당 라인의 PID(2번째 token)을 A라는 변수로 받고 taskkill로 강제 종료하는 문장입니다.

```
// taskkiller.bat file
@ECHO OFF

FOR /F "tokens=2" %%A IN ('tasklist ^| find "Edge"') DO taskkill /f /pid %%A
```

```bash
C:\>taskkiller
성공: 프로세스(PID 15476)가 종료되었습니다.
```

