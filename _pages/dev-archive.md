---
title: Development
layout: splash
permalink: /devs/
taxonomy: devs

entries_layout: grid
classes: wide
custom_stylesheet: app_view

header:
  overlay_image: https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: "Photo by Carl Heyerdahl on Unsplash"
  actions:
    - label: License
      url : /license/

excerpt: 본인이 직접 개발하고 배포하는 무료 소프트웨어들입니다.

feature_row_win:
  - bg_color: "#1769ff"
    bg_image: /assets/images/apps/LunarCalendarGenerator.png
    layered_dir: right

    title: LunarCalendarGenerator
    excerpt: >
      기능 1. 양력/음력 변환<br/>
      기능 2. 음력 일정을 반복적으로 추가하여 일정 파일(.ics) 생성
    url: https://github.com/codebaragi23/LunarCalendarGenerator/releases/latest/download/LunarCalendarGenerator.exe
    btn_label: 다운로드
    btn_class: btn--primary

  - bg_color: "#205081"
    bg_image: /assets/images/apps/ComicCollector.png
    layered_dir: right

    title: ComicCollector
    excerpt: >
      기능 1. 사이트별 웹툰 검색<br/>
      기능 2. 웹툰 에피소드 별 선택<br/>
      기능 3. 다운로드 및 압축형태 지정
    url: https://github.com/codebaragi23/ComicCollector/releases/latest/download/ComicCollector.exe
    btn_label: 다운로드
    btn_class: btn--primary

feature_row_web:
  # - bg_image: /assets/images/apps/LunarCalendarGenerator.png
  #   layered_dir: right

  #   title: 양력↔음력 변환
  #   excerpt: >
  #     기능 1. 양력/음력 변환<br />
  #     기능 2. 음력 일정을 반복적으로 추가하여 일정 파일(.ics) 생성
  #   url: https://github.com/codebaragi23/LunarCalendarGenerator/releases/latest/download/LunarCalendarGenerator.exe
  #   btn_label: 이동
  #   btn_class: btn--primary
---

# Window/MacOS App
{% include feature_row.html id="feature_row_win" %}

# Web
{% include feature_row.html id="feature_row_web" %}
