---
title: 쥬피터 노트북을 이용한 블로그 글 쓰기
categories:
  - GitHub Pages
tags:
  - 쥬피터 노트북
  - Jupyter notebook
  - nbconverter
  - ipynb

header:
  teaser: https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1507149214576-19e2f76d09ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Ryan Plomp on Unsplash

icon: fa-github
---

ipynb에서 상위 2셀은 title 및 ipynb을 위한 주석을 위한 용도로만 사용하고자 구성하였습니다.

nbconverter의 jinja template만으로는 이 문제가 해결되지 않아 아래의 skeleton 자체를 수정해야할 필요가 있습니다.

C:\Program Files (x86)\Microsoft Visual Studio\Shared\Python37_64\Lib\site-packages\nbconvert\templates\skeleton\null.tpl


수정 내용은 간단히 아래와 같습니다.

```
  ...
  \{\%- for cell in nb.cells -\%\}
    \{\%- if loop.index < 3 -\%\}
      \{\% continue \%\}
    \{\%- endif -\%\}
  ...
```
