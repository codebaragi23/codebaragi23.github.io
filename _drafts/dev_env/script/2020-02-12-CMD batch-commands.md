---
title: 윈도우 스크립트 - 배치파일 기초
categories: 
  - Script
tags: 
  - 윈도우 스크립트
  - 윈도우 배치
  - 배치파일
  - CMD Batch
toc: true

header:
  teaser: https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: Photo by Artem Sapegin on Unsplash

icon: fa-github
---

예전 학교 연구생 시절부터 특정 테스트 셋에서 실험을 위해 배치파일을 사용해 왔지만 그 때 그 때 찾아서 작성하고 했는데 이번 기회에 정리를 해보고자 합니다.

기본적으로 CMD용 배치파일에 대한 내용을 정리하고 사용 중인 예제를 몇 개의 포스트로 정리하고자 합니다.

## 배치 파일이란?

> - MS-DOS, 윈도우에서 쓰이는 셸 스크립트로 명령 인터프리터에 의해 실행되게끔 고안된 명령어들을 작성한 텍스트 파일
> - cmd.exe와 같은 셸 프로그램이 파일을 읽어 명령어를 줄 단위로 실행
> - 배치 작업(실행 파일을 자동/연속적 실행)에 유용하게 사용
>
> 출처: [위키피디아](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%B9%98_%ED%8C%8C%EC%9D%BC)

배치파일은 별도의 컴파일이 필요하지 않아 메모장만 있으면 간단히 작성 및 실행 가능하기 때문에 간단하게 프로그래밍하여 유용하게 사용됩니다.

확장자는 `.bat`로 실행파일처럼 바로 실행 가능합니다.

## 배치파일 기초

### 환경 변수

윈도우의 시스템 속성>고급>환경 변수에는 설정된 변수들이 존재합니다. 이 환경변수들은 커맨드 창에서 `set` 명령어를 통해서도 확인 가능하며 cmd.exe와 같은 커맨드 창을 열면 바로 이 환경 변수를 넘겨받아 사용할 수 있습니다.

이 환경 변수들은 배치 파일 또는 커맨드 창에서 임시 변경 가능하며, 여기서 임시 변경이라는 말처럼 이 변경된 환경변수가 적용되는 구간은 작업 공간 즉, 현재 커맨드 창 뿐입니다.

또한 배치 파일 내에서도 부분적으로 환경 변수를 변경할 때는 아래와 같이 사용 가능합니다.

```batch
SETLOCAL
  rem something
ENDLOCAL
```

### 작업 경로

배치파일을 작성하여 다른 경로의 프로그램을 실행할 경우 정상적으로 실행 되지 않을 수 있습니다. 이는 작업 경로와 실행 경로가 달라 다른 프로그램에 필요한 `dll`등의 기타 추가 파일이 참조되지 않기 때문입니다. 이 때에는 작업경로를 실행 프로그램의 경로로 변경 후 실행하면 정상 동작할 것입니다.

예를 들어 절대경로 `C:\Program Files\Test\Test.exe`를 실행하고자 할 경우 배치파일로 실행되지 않지만 `C:\Program Files\Test` 경로를 직접 접근해 `Test.exe`가 실행이 된다면 이는 작업 경로 지정이 되지 않은 이유 때문일 것입니다.

이 때 아래와 같이 CD 명령어를 통해 해당 작업 경로로의 이동을 통해 실행한다면 정상 동작할 것입니다.

```batch
CD C:\Program Files\Test
Test.exe
```

디렉토리 경로의 변경에는 `CD`, `PUSHD`, `POPD` 등의 명령어를 사용할 수 있습니다.
또한 작업 경로의 지역적인 변경에 위에서 언급한 `SETLOCAL`를 사용할 수도 있으며 이전 경로를 저장하고 변경 후 다시 덮어쓰는 다양한 방식으로 응용될 수 있습니다.

**CD**  
디렉토리 경로 변경
_/d_: 경로와 함께 드라이브까지 변경

**PUSHD / POPD**  
디렉토리 경로를 스택에 넣거나(PUSH) 빼는(POP) 명령어  
PUSHD 뒤에 경로를 넣으면 현재 경로 보관 후 새로운 경로로 이동  
POPD를 하면 이전 PUSHD 했던 곳으로 복귀


### UTF-8 배치파일 한글 깨짐

배치파일에서 한글로 된 문장을 출력하려할 때 UTF-8 포맷으로된 배치파일을 사용할 때 커맨드 창에서는 한글 깨짐 현상이 발생합니다. 이를 해결하기 위해서는 아래의 방법들 중 상황에 맞게 사용하시면 됩니다.

**1. 인코딩 타입을 ANSI로 변경**

메모장 > 다른 이름으로 저장 > 인코딩에서 ANSI로 변경 > 저장

**2. 커맨드 창을 UTF-8 인코딩 모드로 변경**

커맨드 창에 `CHCP 65001` 입력(기본 설정은 CHCP가 437, 미국(영어로)로 설정 되어 있음)

**3. 실행 배치파일로 UTF-8 인코딩 모드 변경**

위와 같은 원리로 배치파일 내에서 변경하는 방법입니다.

예>

```batch
CHCP 65001
::또는
@CHCP 65001
```

**4. 항상 커맨드 창을 UTF-8 모드로 열도록 레지스트리 변경**

실행(`Win+R`)에서 레지스트리 편집기(`regedit`) 실행

아래 경로로 이동  
`컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Nls\CodePage`

OEMCP를 편집하여 949에서 65001로 변경

## 명령어

- 일반적인 도스명령들을 그대로 사용 가능합니다.  
`TITLE`, `CLS`, `DIR`, `COPY`, `DEL`, `DATE`, `TIME`, `PROMPT`, `CHKDSK` 등
- 배치 전용 명령어가 있습니다.  
`ECHO`, `REM`, `GOTO`, `LABEL`, `IF`, `FOR`, `PAUSE`, `CALL`, `SHIFT`, `CHOICE` 등

커맨드 창에서 명령어의 도움말을 보기 위해서는 `help \<command>`를 사용하시면 됩니다.

#### TITLE

형식은 다음과 같으며 명령 다음에 오는 문자열을 창의 제목으로 지정합니다.

```batch
TITLE 배치파일 실행 창
```

#### CLS

`CL`ear `S`creen의 약자로 화면을 깨끗하게 비워줍니다.

### 배치 명령어

기본적으로 배치파일에서 사용하는 문법에 대/소문자 구분은 없습니다. 다만 저는 명령 라인 가독성을 높이기 위해 문법은 대문자로 처리하고 변수 및 문자열 등은 소문자 위주로 사용합니다.

#### ECHO

메시지를 표시하거나 명령 에코(명령라인을 보여주는 기능)를 켜거나 끕니다.

기본 사용 방법부터 살펴 보겠습니다.

- **ECHO**: ON/OFF 상태 확인
- **ECHO ON\|OFF**: 다음 라인부터 ON\|OFF 상태
- **ECHO \<message>**: 메시지 화면 출력
- **ECHO.**: 빈 라인 출력
- **@ :** ECHO OFF 상태에서 현재 라인 실행

먼저 `ECHO`에는 아래와 같은 상태가 존재합니다.
 - ON 상태 : 줄 단위 명령 실행 시 명령을 화면에 출력
 - OFF 상태 : 줄 단위 명령 실행 시 명령을 화면에 출력하지 않음

즉 상태의 차이는 줄 단위로 수행되는 명령라인을 출력하느냐 하지 않느냐 입니다.

배치파일은 초기에 `ECHO ON` 상태로 실행됩니다. 따라서 기본 설정 없이 배치파일로 부터 명령어를 수행할 경우 해당 명령이 화면에 출력되어 나타납니다.

아래의 실행결과를 보겠습니다.

<details>
<summary>예시) 접기/펼치기</summary>
<div markdown="1">

**`run.bat` 파일**
```batch
ECHO "Hello world!"
```

**결과**
```batch
C:\> run.bat
C:\> ECHO "Hello world!"
"Hello world!"
```

결과에서 보여지는 것처럼 초기는 `ECHO ON` 상태이므로 각 명령어 라인이 출력되면서 명령어 수행 결과도 보여집니다.

이제 `ECHO OFF` 상태와 비교해 보겠습니다.

**`run.bat` 파일**
```batch
ECHO OFF
ECHO "Hello world!"
```

**결과**
```batch
C:\> run.bat
C:\> ECHO OFF
"Hello world!"
```

`ECHO OFF` 명령어를 통해 다음라인의 명령어는 출력되지 않고 명령 수행 결과만 출력되었습니다.

나머지에 대해서도 살펴보겠습니다.

**`run.bat` 파일**
```batch
@ECHO OFF
ECHO "Hello world!"
ECHO.
```

**결과**
```batch
C:\> run.bat
"Hello world!"

```

`@` 를 통해 `ECHO OFF` 역시 명령어도 출력이 되지 않고 결과로 `"Hello world"` 문자열 및 빈 라인 `""`만 출력되었습니다.

</div>
</details>

#### 주석 처리

배치 파일 내에 주석을 작성할 수 있는 다양한 방법이 존재합니다.

- **REM \<comments>**: REM 명령어 뒤에 주석 추가
- **:UNUSED_LABEL \<comments>** : 사용하지 않는 라벨을 지정하고, 그 뒤에 설명
- **:: \<comments>** : 라벨로:를 사용하고, 그 뒤에 설명

모두, 선행공간(leading spaces) 허용하며 그 외 문자는 문장 앞에 올 수 없습니다.

`REM` 명령어 외 라벨 지정 방법을 이용한 주석 사용 시 주의할 점은 `FOR`문이나 `IF`문의 블록 안에서 사용 시 에러가 발생하므로 사용할 수 없다는 점입니다.

사용 예를 살펴보겠습니다.

```batch
REM 배치파일 사용설명 글입니다.
:UNUSED_LABEL 배치파일 사용설명 글입니다.
:: 배치파일 사용설명 글입니다.
```

#### GOTO

`GOTO` 명령어 다음에 오는 레이블로 커맨드 실행라인을 이동합니다.
(C/CPP의 goto문과 같은 원리)

`GOTO` 명령어 다음에 올 레이블명은 공백이나 세미콜론(;), 이퀄(=)과 같은 기호는 포함하지 않아야하며, 콜론(:)으로 시작하며 한 행에 입력해야 합니다.

#### LABEL

GOTO와 함께 사용이 되어, 특정 레이블로 제어를 이동하기 위해 사용합니다.

#### IF

배치파일의 조건 처리를 수행하기 위해 사용합니다.

기본 사용 방법부터 살펴 보겠습니다.

- **IF NOT**  
조건이 거짓이면 명령 수쟁  
- **IF ERRORLEVEL \<number> \<command>**  
프로그램 반환 코드가 지정 숫자보다 크거나 같으면 조건을 참으로 지정
- **IF \<string1> \<compare-op> \<string2> \<command>**  
두 문자열이 일치하면 조건을 참으로 지정
- **IF EXIST \<filename> \<command>**  
지정된 파일 이름이 있으면 조건을 참으로 지정
- **IF DEFINED \<variable> \<command>**  
variable이 정의 되어 있다면 조건을 참으로 지정

문자열 비교시 /i를 붙이면 대소문자 구분을 하지 않는 (case-insensitive) 비교를 수행합니다.

`compare-op`에는 아래의 옵션이 가능합니다.

- EQU \| ==: equal
- NEQ: not equal
- LSS: less than
- LEQ: less than or equal
- GTR: greater than
- GEQ: greater than or equal

몇 가지 예제를 살펴보겠습니다.

<details>
<summary>예시) 접기/펼치기</summary>
<div markdown="1">


**`run.bat` 파일**
```batch
@ECHO OFF
IF ERRORLEVEL 0 (
  ECHO Successful!!
) ELSE (
  ECHO Failed
)
```

**결과**
```batch
C:\> run
Successful!!
```

**`run.bat` 파일**

```batch
@ECHO OFF
IF EXIST %windir%\syswow64 (
  ECHO x64
) ELSE (
  ECHO x86
)
```

**결과**

```batch
C:\> run
x64
```
_저의 운영체제가 64비트 입니다. 86비트 운영체제의 경우 x86 출력됩니다._

</div>
</details>

#### FOR

조건에 의해 for 반복문 수행

```batch
FOR %\<variable> IN (\<set>) DO \<command> \<command-parameters>
```
- **%<variable>**: 매개 변수를 위한 문자 지정
- **(\<set>)**: 반복문에 대한 조건(파일, 범위 등) 지정, 와일드카드 사용 가능
- **\<command>**: 각 반복문에서 수행할 명령 지정
- **\<command-parameters>**: 지정된 명령의 매개 변수나 스위치 지정

**옵션**
- **tokens=**

몇 가지 예제를 살펴보겠습니다.

<details>
<summary>예시) 접기/펼치기</summary>
<div markdown="1">

**`run.bat` 파일**
```batch
@ECHO OFF
FOR %%I IN (*.bat) DO TYPE %%I
```

**결과**
```batch
C:\> run
@ECHO OFF
FOR %%I IN (*.bat) DO TYPE %%I
```
_현재 경로에 `run.bat` 하나만 있을 경우를 예로 들었습니다._

배치파일에서는 변수명 앞에 `%`를 두 개 사용하지만 커맨드 창에서는 하나만 사용하면 됩니다.

**커맨드 창에서 실행**
```batch
C:\> FOR %I IN (*.bat) DO TYPE %I

C:\> TYPE run.bat
@ECHO OFF
FOR %%I IN (*.bat) DO TYPE %%I
```


</div>
</details>

#### %숫자

도스창의 프롬프트에서 배치파일을 실행시킬 때의 인자들을, 배치파일내에서 사용하기 위함이다.

첫번째 인자를 %0, 두번째 인자를 %1, ....이런식으로 받아들인다. 따라서 %0~%9 까지 받아들인다.

여기서 %0는 파일이름을 받는다.

**SHIFT :** 도스창의 프롬프트에서 배치파일을 실행시킬 때의 인자들은, %0~%9 까지 받아들인다고 설명을 했다.

그런데 이 shift 명령을 한 번 실행시키면, 명령어 인자들이 전체적으로 하나씩 쉬프트되어서,

%0=(파일이름을 제외한)첫번째 인자, %1=두번째 인자...이런식으로 된다.

따라서 인자들이 9개 이상이 되어도, shift 명령을 통해서, 프로그램내에서 모두 사용할 수가 있다.

**shift /n** : 여기서 n은 0~8. n-1번째 까지는 그대로 두고, n = n+1, n+1 = n+2... 이런식이다.

즉, n-1번째 까지는 그대로 두고, n번째 인자가 사라지고, n+1과 그 이후가 한 칸씩 왼쪽으로 쉬프트된다.

**모든 인자를 사용하는 더 간단한 방법 :**

FOR %%A IN (%*) DO ( .... Now your batch file handles %%A instead of %1 ....) : 단, 이 때 %*는 %1부터 시작한다.  

**조건실행 :**

**& :**  command1 & command2 : command1의 실행이 끝나고, command2를 실행한다.

**&& :**  command1 && command2 : command1의 실행이 성공적으로 끝나는 경우에만, command2를 실행한다.

**\|\| :**  command1 \|\| command2 : command1의 실행이 실패로 끝나는 경우에만, command2를 실행한다.

**CALL :** 배치파일내에서 다른 배치파일을 호출하기 위함이다.

**SET :** [http://computerhope.com/sethlp.htm](http://computerhope.com/sethlp.htm)

**SET** : 현재 설정되어 있는 모든 환경변수들과 그 값들을 보여준다.

**SET variable :** 현재 설정되어 있는 variable의 값을 보여준다. 화면에 variable=설정값 형태로 출력이 된다.

만일 variable이 설정되어 있지 않다면, "variable가 설정되어있지 않다"라는 메시지를 보여준다.

**SET variable=string** : variable의 값을 string으로 설정한다.

**예)** SET var1=%var2% : var2가 undefined 상태라고 하자. 그러면 var1도 undefined상태가 된다.

SET var3= : var3는 undefined 상태가 된다.

**SET /A variable=numerical expression** : string위치에 오는 것은 문자열이 아니라, 수식이다.

수식의 우선순위는 다음과 같다. (위쪽일 수록 높은 우선순위)

() grouping

* / % arithmetic operators

+ - arithmetic operators

<< >> logical shift

& bitwise and

^ bitwise exclusive or

| bitwise or

= *= /= %= += -= assignment  
&= ^= |= <<= >>=

, expression separator

**SET /P variable=[promptString]** : 사용자가 값을 입력할것을 요구를 하고, 입력된 값은 variable로 들어간다.

**예)** SET /P tempvar1=[원하는 수식을 입력하세요:] : 사용자가 3+4엔터 를 입력했다고 하자.  
SET /A tempvar2=%tempvar1% : 3+4가 계산이 되어 tempvar2에 입력이 된다.  
Echo 계산된 값은

SET tempvar2 : 7이 출력이 된다. (주의! tempvar2 다음에 바로 줄바꿈이 와야 한다.)



**EXIT :** exit를 실행시키면, cmd.exe까지 모두 종료시켜버린다.

만일 배치파일만 종료를 시키고 싶다면, Exit /B를 하면 된다.

**DEL :** 지정한 파일들을 삭제한다.

DEL

[/P] [/F] [/S] [/Q] [/A[[:]_attributes_]] [[_drive:_][_path_]_filename_

ERASE

[/P] [/F] [/S] [/Q] [/A[[:]_attributes_]] [[_drive:_][_path_]_filename_

[[_drive:_][_path_]_filename_

Specifies the file(s) to delete. Specify multiple files by using wildcards.

/P

Prompts for confirmation before deleting each file.

/F

Force deleting of read-only files.

/S

Delete specified files from all subdirectories.

/Q

Quiet mode, do not ask if ok to delete on global wildcard

/A

Selects files to delete based on attributes

attributes

A

Files ready for archiving

H

Hidden files

R

Read-only files

S

System files

-

Prefix meaning not

del 다음에 파일이름이 아니고, 디렉토리이름만 지정해 주면, 그 디렉토리안의 모든 파일들을 삭제시킨다.

**Redirection :** 프로그램은 기본적으로 stdin(0)은 키보드, stdout(1)은 화면, stderr(2)은 화면으로 설정이 된다.

stdout과 stderr의 차이는, stdout은 버퍼를 거쳐서 화면에 뿌려진다.

따라서 버퍼가 다 차기 전까지는 화면에 뿌려지지 않는다.

반면에 stderr은 버퍼를 사용하지 않기 때문에, 출력할 데이터는 바로 바로 화면에 뿌려진다.

이렇게 기본적으로 설정된 것들을 사용하지 않고, 다르게 사용하고 싶을때 재지향 기호 **>** 를 사용한다.

**command1 > filename** : command1의 stdout출력을 화면이 아니라, filename으로 보낸다.

command1의 stderr은 기존처럼 화면에 뿌려진다.

**command1 < filename** : command1의 입력을 키보드로부터 받는것이 아니라, filename으로 부터 받는다.

**command1 < infile > outfile** : 키보드가 아니라 infile로 부터 입력을 받고, stdout을 화면이 아니라 outfile로 출력을 한다.

command1의 stderr은 기존처럼 화면에 뿌려진다.

**command1 2> file** : command1의 stdout은 화면으로, stderr은 file로 보낸다.

**command1**  **>**  **file**  2**>&**1 : command1의 stdout은 file로, stderr은 stdout으로 보낸다.

즉 stdout과 stderr모두 file로 보낸다.

이 문장을 간단하게 표기하는 또 다른 방법은 **command1**  **&>****file 와  command1**  **>&file이다.**

**command1 >nul :** command1의 stdout출력을, 화면에 뿌리는 것이 아니라, 그냥 버린다.

**파이프 : command1 | command2** : command1의 stdout출력을 command2의 입력으로 보낸다.

이것은 command1 > tempfile, command2 < tempfile, del tempfile 과 동일하다.

command1, command2의 stderr은 기존처럼 화면에 뿌려진다.

**command1**  2**>&**1 **| command2** : command1의 stdout과 stderr을 모두, command2의 stdin으로 보낸다.

**RMDIR** [/S] [/Q] [drive:]path  
**RD** [/S] [/Q] [drive:]path  
/S Removes all directories and files in the specified directory in addition to the directory itself.

Used to remove a directory tree.  
/Q Quiet mode, do not ask if ok to remove a directory tree with /S  

**EXIT :** exit를 실행시키면, cmd.exe까지 모두 종료시켜버린다.

만일 배치파일만 종료를 시키고 싶다면, Exit /B를 하면 된다.

**XCOPY :**

XCOPY

_source_ [_destination_] [/A | /M] [/C] [/D[:date]] [/F] [/H] [/I] [/K] [/L] [/N] [/P] [/Q] [/R] [/S [/E]] [/T] [/U] [/V] [/W] [/Z] [/EXCLUDE:_filename_]

_source_

Specifies the file(s) to copy.

_destination_

Specifies the location and/or name of new files.

/A

Copies files with the archive attribute set, doesn't change the attribute.

/C

Continues copying even if errors occur.

/D[:_m-d-y_]

Copies files changed on or after the specified date.  
If no date is given, copies only those files whose source time is newer than the destination time.

/E

Copies directories and subdirectories, including empty ones.  
Same as /S /E. May be used to modify /T.

/F

Displays full source and destination file names while copying.

/H

Copies hidden and system files also.

/I

If destination does not exist and copying more than one file, assumes that destination must be a directory.

/K

Copies attributes. Normal Xcopy will reset read-only attributes.

/L

Displays files that _would_ be copied (_list_ only).

/M

Copies files with the archive attribute set, turns off the archive attribute.

/N

Copies using the generated short names.

/P

Prompts you before creating each destination file.

/Q

Does not display file names while copying.

/R

Overwrites read-only files.

/S

Copies directories and subdirectories except empty ones.

/T

Creates directory structure, but does not copy files.  
Does not include empty directories or subdirectories.  
/T /E includes empty directories and subdirectories.

/U

Copies only files that already exist in destination.

/V

Verifies each new file.

/W

Prompts you to press a key before copying.

/Z

Copies networked files in restartable mode.

/EXCLUDE:_filename_

Excludes the files listed in the specified file from the copy operation. The exclusion file can have a list of exclusion patterns (one per line, no wild card characters are supported). If any exclusion pattern in the file matches any part of the path of a subject file, that file is not copied.
