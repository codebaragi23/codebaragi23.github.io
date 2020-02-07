---
title: "Python 문자열 파싱"
categories: 
  - Python
tags: 
  - Python
toc: true

header:
  teaser: https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Hitesh Choudhary on Unsplash"

icon: fa-github
---

Python 문자열 파싱  
Python에서 문자열 파싱 방법에 대해서 설명드립니다. 추출하고자 하는 데이터가 문자열 안에 포함되어 있을 경우 편리하게 추출하는 방법입니다.

추가적으로 추출하고자 하는 값에 이름을 할당하여, 값이 추출 된 뒤에도 변수처럼 사용할 수 있습니다.

![](https://hiseon.me/wp-content/uploads/2019/02/pip-install-parse.png)

### 패키지 설치

가장 먼저 아래의 명령어를 이용하여 parse라는 패키지를 설치해 주시기 바랍니다. 이번 글에서는 parse 라는 패키지를 사용하여 문자열에서 값을 추출하는 방법에 대해서 설명드릴 것입니다.

```
$ pip install parse
```

### 간단 예제

문자열 파싱 하는 방법에 대해서 설명해 드리기 전에, 먼저 간단한 예제를 실행해 보도록 하겠습니다.

```
from parse import *

result = parse("It's {}, I love it!", "It's spam, I love it!")

print (result)
print (result[0])
```

위의 코드를 실행한 결과는 아래와 같습니다.

```
<Result ('spam',) {}>
spam
```

parse 라는 함수를 호출하면서 2가지 값을 전달 하였습니다. 첫 번째 값은 추출하고자 하는 문자열의 패턴을 나타낸 것이고, 두번째 값은 추출하고자 하는 문자열 입니다.

성공적으로 문자열로 부터 값 또는 데이터를 추추하면, 추출된 값이 리턴되지만 추출하지 못했을 경우 None 값을 리턴하게 됩니다.

### 패턴 컴파일

만약 패턴으로부터 데이터를 추출해야 할 문자열이 많을 경우, 패턴을 컴파일 하여 보다 빠르게 사용할 수 있습니다.

```
from parse import compile

p = compile("It's {}, I love it!")
print(p)

result = p.parse("It's spam, I love it!")

print (result)
print (result[0])
```

위의 코드를 실행한 결과는 아래와 같습니다.

```
<Parser "It's {}, I love it!">
<Result ('spam',) {}>
spam
```

패턴을 컴파일 후, 추출하고자 하는 데이터가 포함된 문자열을 전달 하여 파싱 한 것을 알 수 있습니다.

### 포맷 문법

문자열에서 하나의 값 또는 데이터를 추출하는 것이 아니고, 여러 종류의 데이터를 추출해야 하는 경우가 있을 것입니다. 다음 예제를 확인해 보도록 하겠습니다.

```
from parse import *

result = parse("The {} who say {}", "The knights who say Ni!")

print (result)
print (result.fixed)
```

```
<Result ('knights', 'Ni!') {}>
('knights', 'Ni!')
```

위의 예제는 하나의 입력된 문자열에서 여러개의 데이터를 추출 한 것을 알 수 있습니다. 추출된 결과에서 인덱스를 사용하여 추출된 값을 참조 할 수 있습니다.

```
result = parse("Bring out the holy {item}", "Bring out the holy hand grenade")

print (result)
print (result.named)
print (result["item"])
```

```
<Result () {'item': 'hand grenade'}>
{'item': 'hand grenade'}
hand grenade
```

그리고 위의 예제는 추출하고자 하는 값에 이름을 할당하여, 값을 추출한 것을 알 수 있습니다. 위의 방법을 사용하면 인덱스 대신에 의미 있는 이름을 사용하여 추출된 값을 참조 할 수 있을 것입니다.  

다음 예제는 다차원 구조로 데이터로 패턴을 정의 한 뒤에 데이터를 추출 한 예제를 나타냅니다.

```
result = parse("My quest is {quest[name]}", "My quest is to seek the holy grail!")

print (result)
print (result["quest"])
print (result["quest"]["name"])
```

```
<Result () {'quest': {'name': 'to seek the holy grail!'}}>
{'name': 'to seek the holy grail!'}
to seek the holy grail!
```

위의 구조는 그룹화 된 데이터를 추출 할 때 유용하게 사용 될 것입니다.