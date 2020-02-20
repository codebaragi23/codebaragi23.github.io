---
title: Books
layout: splash
permalink: /books/
taxonomy: Books

entries_layout: grid
classes: wide
custom_stylesheet: book_view
fully_url: true

header:
  overlay_image: https://images.unsplash.com/photo-1573166364902-982ae58a27ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Christina @ wocintechchat.com on Unsplash
excerpt: 책 스터디를 하며 내용 정리 및 예제를 정리하고자 합니다.

howto:
  - overlay_image: https://github.com/mmistakes/minimal-mistakes/raw/master/screenshot.png
    overlay_filter: 0.5
    title: Howto
    alt: Howto
    excerpt: minimal mistakes 사용 방법
    url: /books/howto/quick-start-guide/
    btn_class: btn--primary

DeepLearning:
  - overlay_image: http://www.hanbit.co.kr/data/books/B8475831198_l.jpg
    overlay_filter: 0.3
    title: Deep Learning From Scratch
    alt: Deep Learning From Scratch
    excerpt: 밑바닥부터 시작하는 딥러닝
    url: /books/DeepLearningFromScratch/summary/
    btn_class: btn--primary

  - overlay_image: http://image.yes24.com/goods/65050162/800x0
    overlay_filter: 0.3
    title: Deep Learning Width Python
    alt: Deep Learning Width Python
    excerpt: 케라스 창시자에게 배우는 딥러닝
    url: /books/DeepLearningFromKeras/summary/
    btn_class: btn--primary
---

<!-- # 설명서
{% include feature_row.html id="feature_row_howto" %} -->

# 딥러닝
{% include feature_row.html id="DeepLearning" %}