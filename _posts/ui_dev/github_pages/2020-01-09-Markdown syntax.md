---
title: "마크다운 문법"
categories:
  - GitHub Pages
tags:
  - GitHub Pages
  - Markdown
toc: true
icon: fa-github
---


마크다운에 대해서 자세히 알아보시려면 다음 URL을 참조하세요.

-   [http://daringfireball.net/projects/markdown/](http://daringfireball.net/projects/markdown/)
-   [http://en.wikipedia.org/wiki/Markdown](http://en.wikipedia.org/wiki/Markdown)


## 헤딩태그

예:

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

```

결과:

# H1

## H2

### H3

#### H4

##### H5

###### H6

위키독스에서 헤딩태그 사용 시 H2 헤딩태그부터 사용할 것을 권장합니다. 전자문서 생성 시 H1 헤딩태그는 챕터로 인식되기 때문입니다. 전자문서를 염두에 두고 계시다면 H2 태그부터 사용하시기 바랍니다.

(※ 위키독스 H1, H2 태그에는 밑줄을 긋도록 디자인 했습니다.)

## 인용구
입력할 문장 앞에 `>` 를 입력합니다. 중첩으로 표시할 때는, `>>`, `>>>` 을 사용합니다.

예:

```
> 첫번째 인용문입니다.
>> 두번째 인용문입니다.
>>> 세번째 인용문입니다.
>
> 이렇게 한 줄을 띌 수도 있습니다.
```

결과:

> 첫번째 인용문입니다.
>> 두번째 인용문입니다.
>>> 세번째 인용문입니다.
>
> 한줄 뛰기 입니다.

## 리스트

리스트에는 두 가지 종류가 있습니다. 순차를 표시하는 것과 그렇지 않은것 두 가지입니다.

### 순차표시
순서가 있는 리스트는 항목 앞에 `1.`, `2.`,과 같이 입력합니다. 숫자의 증가는 상관없습니다.

예:

```
1. 리스트 1
1. 리스트 2
	1. 리스트 2-1
		1. 리스트 2-1-1
	1. 리스트 2-1-1
1. 리스트 3
```

결과:

1. 리스트 1
1. 리스트 2
	1. 리스트 2-1
		1. 리스트 2-1-1
	1. 리스트 2-1-1
1. 리스트 3

### 순차표시 없는 것

순서가 없는 리스트는 항목 앞에 `*`, `-`, `+` 를 입력합니다.

예:

```
* 리스트 1
	* 리스트 1-1
		* 리스트 1-1-1
- 리스트 2
	- 리스트 2-1
		- 리스트 2-1-1
+ 리스트 3
	+ 리스트 3-1
		+ 리스트 3-1-1
```

결과:

* 리스트 1
	* 리스트 1-1
		* 리스트 1-1-1
- 리스트 2
	- 리스트 2-1
		- 리스트 2-1-1
+ 리스트 3
	+ 리스트 3-1
		+ 리스트 3-1-1

## 체크 박스
`- [ ]` 입력으로 리스트를 체크박스 형태로 표시할 수 있습니다.

예:
```
- [ ] 체크1
- [x] 체크2
```

결과:
- [ ] 체크1
- [x] 체크2


## 강조구문

강조 구문에도 두가지가 있습니다. 진하게 표시하는 것과 기울여서 표시하는 것 두 가지입니다.

### 굵게 (Bold)

예:

```
전 매우 **착하게** 살고 싶었습니다.
```

결과:

전 매우  **착하게**  살고 싶었습니다.

### 기울임 (Italic)

예:

```
전 매우 *착하게* 살고 싶었습니다. (또는 _착하게_)
```

결과:

전 매우  *착하게*  살고 싶었습니다. (또는  _착하게_)

### 취소선 (strikethrough)
~취소선~

## 링크와 이미지

### 인라인 링크

`[링크문구](링크주소)`  와 같이 작성하면 링크가 생성됩니다.

예:

```
[위키독스](http://wikidocs.net)
```

결과:

[위키독스](http://wikidocs.net/)


### URL 링크

'<url주소>'과 같이 작성하면 링크가 생성됩니다.

예:

```
<http://wikidocs.net>
```

결과:

<http://wikidocs.net>

### 참조 링크

링크 삽입: `[링크문구] [참조 번호]` 또는 `[참조 번호]` 또는 `[참조 이름]`

참조 삽입: `[참조]: 주소` 



예:

```
#글 중간
이 부분은 [Google] [1]을 참고하세요. ([1] 또는 [Google])

#몇 줄 뒤
이 부분은 [Google] [1]과, [facebook] [2]을 참고하세요. ([1] 또는 [Google], [2] 또는 [facebook])

#글 마지막
[1]: http://www.google.com
[2]: http://www.facebook.com
#또는
[Google]: http://www.google.com
[facebook]: http://www.facebook.com
```

결과:

이 부분은 [Google] [1]을 참고하세요. ([1] 또는 [Google])

이 부분은 [Google] [1]과, [facebook] [2]을 참고하세요. ([1] 또는 [Google], [2] 또는 [facebook])


### 이미지 링크


이미지 링크인 경우 앞에  `!`  만 추가하면 됩니다.

예:

```
![위키독스 로고](http://wikidocs.net/images/book/wikidocs.png)
```

결과:

![위키독스 로고](http://wikidocs.net/images/book/wikidocs.png)


## 강제 줄 바꿈

마크다운 에디터에서 엔터키를 이용하여 줄 바꿈을 하더라도 실제 보는 화면에서는 줄 바꿈이 되지 않습니다. 만약 강제로 줄 바꿈을 하고 싶으면 줄 끝에 공백(space)을 두 개 추가하면 됩니다.

작성 예:

```
첫번째 줄  
두번째 줄 
```

결과:

첫번째 줄  
두번째 줄


## 코드블록

코드블록은 프로그래밍 코드를 삽입할 경우 사용합니다. 삽입된 코드는 보기 좋게(Syntax Highlighting) 표시됩니다.

### 스페이스 코드블록

삽입하는 코드 앞에 스페이스 4개를 삽입하면 됩니다. (모든줄에 스페이스 4개 삽입해야 함) 스페이스 블록인 경우 코드의 구문을 체크하여 자동으로 신택스 하이라이팅을 합니다. (자동으로 해당 언어를 감지합니다.)

예:

```
    def sum(a, b):
        return a+b
```

결과:

    def sum(a, b):
	    return a+b

### 언어지정 코드블록

또는 다음과 같이 코드에 특정 언어(예:python)를 지정하여 코드블록을 설정할 수도 있습니다. Back Quote(\`) 문자 세개와 중괄호 사이에 코드의 언어를 입력하면 됩니다. (예:\```{.python})블록을 닫을 때는 마찬가지로 Back Quote(`) 문자 세개를 입력합니다.

_python 의 예_

>\`\`\`{.python}  
 def sum(a, b):  
 &nbsp;&nbsp;&nbsp;&nbsp;return a+b  
 \`\`\`

결과:

```{.python}  
def sum(a, b):  
    return a+b  
```

_java 의 예_

>\`\`\`{.java}  
 class Test {    
 &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.pritnln("hello world");  
 &nbsp;&nbsp;&nbsp;&nbsp;}  
 }  
>\`\`\`

결과:

```{.java}  
class Test {
    public static void main(String[] args) {
        System.out.pritnln("hello world");
    }
}
```

다음은 Syntax Highlighting이 지원되는 언어(Language)들입니다. 마크다운 에디터에서는 괄호안의 값으로 사용하면 됩니다.

-   Bash (bash)
-   C# (cs)
-   C++ (cpp)
-   CSS (css)
-   Diff (diff)
-   HTML, XML (html)
-   HTTP (http)
-   Ini (ini)
-   JSON (json)
-   Java (java)
-   JavaScript (javascript)
-   PHP (php)
-   Perl (perl)
-   Python (python)
-   Ruby (ruby)
-   SQL (sql)

### no-highlight 코드블록

만약 코드블럭을 사용하고 싶지만 신택스 하이라이트 기능을 사용하고 싶지 않은 경우에는 다음과 같이 no-highlight를 사용 할 수 있습니다.

> \`\`\`{.no-highlight}  
 class Test {  
 &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {  
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.pritnln("hello world");  
 &nbsp;&nbsp;&nbsp;&nbsp;}  
 }  
 \`\`\`

결과:

```{.no-highlight}
class Test {
    public static void main(String[] args) {
        System.out.pritnln("hello world");
    }
}
```

### 인라인 코드블록

코드는 대부분 1줄이상으로 이루어져 있지만 짧막한 코드문장을 한 문장 내에 삽입하고 싶을 경우 있습니다.
이런 경우에 사용할 수 있는 인라인 코드 문법이 있습니다.

다음 예처럼 코드 부분을 ` (back quote) 문자로 감싸면 됩니다.

예:

```
프로그램 수행 중 `return a+b` 라는 문장을 만나면 결과값이 리턴됩니다.
```

결과:

프로그램 수행 중  `return a+b`  라는 문장을 만나면 결과값이 리턴됩니다.

## 표

예:

```
head1 | head2
------|-------
hello | foo
hi    | bar

```

결과:


head1 | head2
------|-------
hello | foo
hi    | bar

(※ 테이블 내에 파이프문자(`|`)를 표시하려면  `&#124;`를 입력하면 됩니다.)


## 수평선

보통 문단의 구분으로 사용되는 `<hr />` 태그는 `***`, `---`, `___`로 표시할 수 있습니다.

예:

```
***
---
___
```

결과:

***
---
___

## 각주

각주란 본문의 어떤 부분을 설명하거나 보충하기 위해 본문 아래쪽에 별도로 작성하는 간단한 설명문으로서 주로 내용의 출처를 밝힐 때 사용됩니다.

예:

```
에릭 레이먼드는 파이썬을 배운지 하루만에 원하는 프로그램을 작성할 수 있었다고 한다. [^footnote]

[^footnote]: 에릭 레이먼드는 프로그래밍 경험이 많은 구루 프로그래머이다. 보통 사람은 파이썬을 배우고 사용하는 데 1주일 정도의 적응 시간이 필요할 것이다.
```

결과:

에릭 레이먼드는 파이썬을 배운지 하루만에 원하는 프로그램을 작성할 수 있었다고 한다. [^footnote]

[^footnote]: 에릭 레이먼드는 프로그래밍 경험이 많은 구루 프로그래머이다. 보통 사람은 파이썬을 배우고 사용하는 데 1주일 정도의 적응 시간이 필요할 것이다.

> ※ 각주명(예:myfootnote)은 마음대로 명명할 수 있습니다.


[1]: https://www.google.com
[2]: https://www.facebook.com

[Google]: https://www.google.com
[facebook]: https://www.facebook.com