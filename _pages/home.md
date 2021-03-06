---
title: Developer Jinn
layout: splash
permalink: /
header:
  overlay_image: https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Arian Darvishi on Unsplash

  actions:
    - label: About me
      url : /about/
excerpt: >
  개인 블로그를 운영할까 합니다.<br/>
  개발 노하우 및 공부 자료 위주로 정리할까 하는데 개발자 분들께 참고가 되었으면 좋겠네요.<br/>

feature_row_academy:
  - #overlay_image: /assets/images/category/academy/machine_learning/background-teaser.png
    overlay_image: https://imagescdn.gettyimagesbank.com/500/18/450/808/0/973333646.jpg
    overlay_filter: 0.5
    title: Machine Learning
    alt: Machine Learning
    excerpt: 머신러닝에 대한 정리 및 논문 리뷰 위주로 정리해 볼까 합니다.
    url: /machine_learning/
    btn_class: btn--primary

feature_row_env:
  - overlay_image: /assets/images/category/dev_env/git/background-teaser.png
    overlay_filter: 0.5
    title: Git
    alt: Git
    excerpt: 버전 관리를 위해 git을 사용하려고 합니다. 이번 기회를 통해 git에 대한 내용을 정리해 보도록 하겠습니다.
    url: /git/
    btn_class: btn--primary

  - overlay_image: /assets/images/category/dev_env/script/background-teaser.png
    overlay_filter: 0.5
    title: Script
    alt: Script
    excerpt: >
      개발하면서 간단히 제작할 수 있는 bat, vbs, ps1 등의 스크립트에 대한 내용을 정리하고자 합니다. <br/>
      배치 파일 보다는 쉘 스크립트가 좀 더 많은 기능을 구현할 수 있고 가장 최근 공개까지 된 파워쉘이 가장 많은 기능을 구현 할 수 있습니다.
    url: /script/
    btn_class: btn--primary

feature_row_lang:
  - overlay_image: /assets/images/category/dev_lang/python/background-teaser.png
    overlay_filter: 0.5
    title: Python
    alt: Python
    excerpt: Python 언어를 개인 개발 용도로 조금씩 사용해왔는데 매번 찾아쓰기 바빴네요. 앞으로 사용이 잦아질 관계로 내용을 조금씩 정리해 보고자 합니다.
    url: /python/
    btn_class: btn--primary

feature_row_ui:
  - overlay_image: /assets/images/category/ui_dev/mfc/background-teaser.png
    overlay_filter: 0.5
    title: MFC
    alt: MFC
    excerpt: 학부 연구생 때 이미지 비전 데모 시연을 위해 공부했던 MFC가 매번 따라 다니네요. 의도치 않게 직장마다 활용하게 되어 알고 있는 내용을 정리를 하고자 합니다.
    url: /mfc/
    btn_class: btn--primary

  - overlay_image: /assets/images/category/ui_dev/qt/background-teaser.png
    overlay_filter: 0.5
    title: Qt
    alt: Qt
    excerpt: Qt 사용하며 custom control 및 기타 tip들을 정리해 보고자 한다.
    url: /qt/
    btn_class: btn--primary

  - overlay_image: /assets/images/category/ui_dev/github_pages/background-teaser.png
    overlay_filter: 0.5
    title: GitHub Pages
    alt: GitHub Pages
    excerpt: 블로그를 운영하기 위해 사용한 GitHub Pages에 대한 기록입니다. 기본 내용을 간단히 정리하고 주로 이 블로그에서 custom하기 위해 조사한 내용들 위주로 정리를 할까 합니다.
    url: /github_pages/
    btn_class: btn--primary

feature_row_serv:
---

# Academy
{% include feature_row.html id="feature_row_academy" %}

# Dev. Environment
{% include feature_row.html id="feature_row_env" %}

# Dev. Language
{% include feature_row.html id="feature_row_lang" %}

# UI Development
{% include feature_row.html id="feature_row_ui" %}

# Service
{% include feature_row.html id="feature_row_serv" %}