---
title: Developer Jinn
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  actions:
    - label: About me
      url : /about/
excerpt: >
  개인 블로그를 운영할까 합니다.<br />
  개발 노하우 및 공부 자료 위주로 정리할까 하는데 개발자 분들께 참고가 되었으면 좋겠네요.<br />

feature_row_env:
  - overlay_image: /assets/images/category/dev_env/git/background-teaser.png
    overlay_filter: 0.5
    title: Git
    alt: Git
    excerpt: 버전 관리를 위한 git을 사용하면서 정리해 보고자 합니다.
    url: /git/
    btn_class: btn--primary

feature_row_ui:
  - overlay_image: /assets/images/category/ui_dev/mfc/background-teaser.png
    overlay_filter: 0.5
    title: "MFC"
    alt: MFC
    excerpt: MFC를 사용하면서 tip을 정리하고자 합니다.
    url: /mfc/
    btn_class: btn--primary

  - overlay_image: /assets/images/category/ui_dev/qt/background-teaser.png
    overlay_filter: 0.5
    title: Qt
    alt: Qt
    excerpt: Qt를 사용하면서 tip을 정리하고자 합니다.
    url: /qt/
    btn_class: btn--primary

  - overlay_image: /assets/images/category/ui_dev/github_pages/background-teaser.png
    overlay_filter: 0.5
    title: GitHub Pages
    alt: GitHub Pages
    excerpt: 블로그를 운영하기 위해 사용한 GitHub Pages에 대한 기록입니다.
    url: /github_pages/
    btn_class: btn--primary

feature_row_serv:
---

# Dev. Environment
{% include feature_row.html id="feature_row_env" %}

# UI Development
{% include feature_row.html id="feature_row_ui" %}

# Service
{% include feature_row.html id="feature_row_serv" %}