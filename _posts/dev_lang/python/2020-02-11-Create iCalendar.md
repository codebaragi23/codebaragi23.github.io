---
title: "Python을 이용한 iCalendar(ics 파일) 만들기"
categories: 
  - Python
tags: 
  - iCalendar
  - ics 파일
  - 일정 파일
toc: true

header:
  teaser: https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo by Estée Janssens on Unsplash"

icon: fa-github
---

이글은 구글 캘린더에 음력 달력을 생성하기 위한 개인 프로젝트를 위해 찾게된 캘린더 ics파일을 만들기 위한 내용을 정리하였습니다.

이 글에서는 Python의 vobject를 이용하여 iCalendar를 만듭니다. vobject를 이용하여 vCard역시 파싱할 수 있다고 나오지만 본 글에서는 주제에 맞게 iCalendar만 다루도록 하겠습니다.

iCalendar를 위한 다른 라이브러리로 py-iCalendar도 있다고 하는데 잘 안된다고 하여 정리하지 않습니다.

## iCalendar 란?

> 아이캘린더(iCalendar)는 인터넷 사용자들이 다른 인터넷 사용자들에게 전자 메일을 이용하여 미팅 요청과 할 일을 보내거나 .ics 확장자로 파일들을 공유할 수 있게 해 주는 컴퓨터 파일 형식이다. 아이캘린더 데이터 파일을 받은 사람들은 이메일 클라이언트나 캘린더 프로그램 따위를 이용하여 보낸이에게 쉽게 응답할 수 있고 다른 미팅 일정을 역제안할 수 있다.  
> [출처] - [위키백과-아이캘린더](https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%BA%98%EB%A6%B0%EB%8D%94)


## 패키지 설치

먼저 아래의 명령어를 통해 vobject라는 패키지를 설치해 주시기 바랍니다.

```bash
$ pip install vobject
```

## 예제

간단한 예제를 추가합니다.

아래와 같이 일정 시작/끝 시간 설명 참석자 등을 추가할 수 있습니다.

```python
#-*- coding: utf-8 -*-

import vobject
from datetime import datetime
 
cal = vobject.iCalendar()
vevent = cal.add('vevent')
vevent.add('summary').value = u'event1'
vevent.add('description').value = u'3명 참석 예정입니다.'
vevent.add('dtstart').value = datetime(2020, 1, 10, 12, 0, 0)
vevent.add('dtend').value = datetime(2020, 1, 10, 20, 0, 0)
vevent.add('dtstamp').value = datetime(2020, 1, 1, 15, 0, 0)
vevent.add('location').value = u'회의실'
 
o = vevent.add('organizer')
o.value = u'MAILTO:organizer@gmail.com'
o.params['CN'] = [u'주최자']
 
o = vevent.add('attendee')
o.value = u'MAILTO:attendee1@gmail.com'
o.params['CN'] = [u'참석자1']
o.params['ROLE'] = [u'REQ-PARTICIPANT']
 
o = vevent.add('attendee')
o.value = u'MAILTO:attendee2@gmail.com'
o.params['CN'] = [u'참석자2']
o.params['ROLE'] = [u'OPT-PARTICIPANT']

with open('example.ics', 'wb') as f:
        f.write(cal.serialize().encode('utf-8'))
```

example.ics 파일 내용입니다.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PYVOBJECT//NONSGML Version 1//EN
BEGIN:VEVENT
UID:20200210T075353Z - 34189@DESKTOP-TAEJIN
DTSTART:20200110T120000
DTEND:20200110T200000
ATTENDEE;CN=참석자1;ROLE=REQ-PARTICIPANT:MAILTO:attendee1@gmail.com
ATTENDEE;CN=참석자2;ROLE=OPT-PARTICIPANT:MAILTO:attendee2@gmail.com
DESCRIPTION:3명 참석 예정입니다.
DTSTAMP:20200101T150000
LOCATION:회의실
ORGANIZER;CN=주최자:MAILTO:organizer@gmail.com
SUMMARY:event1
END:VEVENT
END:VCALENDAR
```

일정을 여러개 추가할 때는 `iCalendar.add()`의 `vevent`를 추가해 주시면 되고 일정 시작/끝이 `datetime` 즉, 시간이 아니라 일이라면 `date`를 사용하시면 됩니다.
단 주의해야 할 점은 후자의 경우 `dtend`는 **종료일 + 1일**을 한 값을 저장해야 한다는 것입니다.

```python
#-*- coding: utf-8 -*-

import vobject
from datetime import date, datetime
 
cal = vobject.iCalendar()
vevent = cal.add('vevent')
vevent.add('summary').value = u'가족 행사'
vevent.add('dtstart').value = date(2020, 1, 11)
vevent.add('dtend').value = date(2020, 1, 12)
vevent.add('dtstamp').value = datetime(2020, 1, 1, 15, 0, 0)
vevent.add('location').value = u'회의실'

vevent = cal.add('vevent')
vevent.add('summary').value = u'1박 2일 여행'
vevent.add('dtstart').value = date(2020, 1, 12)
vevent.add('dtend').value = date(2020, 1, 14)
vevent.add('dtstamp').value = datetime(2020, 1, 1, 15, 0, 0)
vevent.add('location').value = u'회의실'

with open('example2.ics', 'wb') as f:
        f.write(cal.serialize().encode('utf-8'))
```

example2.ics 파일 내용입니다.

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//PYVOBJECT//NONSGML Version 1//EN
BEGIN:VEVENT
UID:20200210T075515Z - 4042@DESKTOP-TAEJIN
DTSTART;VALUE=DATE:20200111
DTEND;VALUE=DATE:20200112
DTSTAMP:20200101T150000
LOCATION:회의실
SUMMARY:가족 행사
END:VEVENT
BEGIN:VEVENT
UID:20200210T075515Z - 56478@DESKTOP-TAEJIN
DTSTART;VALUE=DATE:20200112
DTEND;VALUE=DATE:20200114
DTSTAMP:20200101T150000
LOCATION:회의실
SUMMARY:1박 2일 여행
END:VEVENT
END:VCALENDAR
```

첫 일정은 2020.1.11 하루 동안의 일정이고 두번째 일정은 2020.1.12~2020.1.13일 동안의 2일간의 일정입니다.