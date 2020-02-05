---
title: App List
layout: splash
permalink: /apps/
taxonomy: apps

entries_layout: grid
classes: wide
custom_stylesheet: column_view

header:
  overlay_color: "#5e616c"
excerpt: 오픈소스로 개발한 Application 목록들입니다.

feature_row_win:
  - bg_color: "#5e616c"
    bg_image: /assets/images/apps/LunarCalendarGenerator.png
    layered_dir: right

    title: LunarCalendarGenerator
    excerpt: >
      기능 1. 양력/음력 변환<br />
      기능 2. 음력 일정을 반복적으로 추가하여 일정 파일(.ics) 생성
    url: https://github.com/codebaragi23/LunarCalendarGenerator/releases/latest/download/LunarCalendarGenerator.exe
    btn_label: 다운로드
    btn_class: btn--primary
---

# Window/MacOS App
{% include feature_row.html id="feature_row_win" %}
