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
  teaser: https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=40
  overlay_image: https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80
  overlay_filter: 0.5
  caption: Photo by Ryan Plomp on Unsplash

icon: fa-github
---

기존에 포스트로 markdown 파일로만 작성했었는데 python 기반 스터디를 하며 코드와 함께 블로그 글을 작성하기 하고자 했습니다.

본 포스트는 Jupyter notebook으로 jekyll 포스트를 작성하는 방법을 다룹니다.

자세한 내용을 보기 전에 간단하게 진행과정을 살펴보겠습니다.

먼저 진행하기 위해서는 jupyter nbconverter가 설치되어 있어야 합니다.

## 진행 과정
1. jupyter notebook(*.ipynb)으로 작성된 포스트 준비(실행하여 결과값을 저장한 상태)
2. nbconvert 기반 형식에 맞도록 작성된 shell script를 실행  
  ->jupyter notebook 파일(*.ipynb)와 같은 경로에 markdown 파일(*.md) 생성됨.  
  ->이미지의 경우 "/assets/images/[포스트의 상대 경로]"에 저장됨.


## nbconvert 설치

`pip install nbconvert`

콘다 환경인 경우

`conda install nbconvert`

를 통해 간단히 설치 가능합니다.

주피터 파일을 html이나 md가 아닌 pdf, text 등으로 변환하는 등 nbconvert의 모든 기능을 이용하기 위해서는 pandoc 과 XeLaTeX를 추가로 설치해야 한다고 합니다. 해당 내용은 [nbconvert 공식문서](https://nbconvert.readthedocs.io/en/latest/install.html)에서 확인 가능하니 본 포스트에서는 넘어가도록 하겠습니다.

**사용법**

- html: `jupyter nbconvert --to html [ipynb_file].ipynb`
- markdown: `jupyter nbconvert --to markdown [ipynb_file].ipynb`


## nbconvert의 markdown 템플릿 작성

nbconvert는 내부적으로 파이썬의 템플릿 엔진인 jinja 템플릿을 사용합니다. 이 템플릿을 본 블로그 스타일로 수정하여 변환 시 블로그 글 처럼 만들 수 있도록 수정해 보겠습니다.

nbconvert는 html로 변환하는 경우에는 basic.tpl, 마크다운으로 변환하는 경우에는 markdown.tpl 템플릿을 기본값으로 사용하여 변환합니다. 본 포스트에서는 마크다운으로 변환해 포스팅을 하는 것이 목적이므로, nbconvert 패키지 내에 markdown.tpl을 상속받아 jekyll.tpl을 다음과 같이 만들었습니다.


**jekyll.tpl**

아래 파일을 참고하시기 바랍니다.
(해당 템플릿을 markdown에서 보여주기 위한 방법을 모르겠네요. 찾게 되면 수정하도록 하겠습니다.)

[jekyll.tpl](/jekyll.tpl)

ipynb에서 상위 2셀은 title 및 ipynb을 위한 주석을 위한 용도로만 사용하고자 구성하였습니다. 따라서 템플릿도 이에 의존적으로 작성되었음을 주의하시기 바랍니다.

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


## 쉘 스크립트를 통한 변환 자동화

해당 스크립트는 다음의 내용들이 반영되어 있습니다.

- assets의 이미지들은 포스트의 상대 경로와 같도록 반영
  예) 포스트가 "/_posts/title1/subtitle1/"에 있다면 이미지는 "/assets/images/title1/subtitle1/"에 위치

- jupyter notebook 파일(*.ipynb)와 같은 경로에 markdown 파일(*.md) 생성


```bash
#!/bin/bash/

FNAME=$1
SCRIPT_PATH=$(dirname $(realpath $0))
CUR_PATH=$(pwd)
IMG_PATH="/assets/images"${CUR_PATH/${SCRIPT_PATH}/}
IMG_PATH=${IMG_PATH/\/_/\/}

jupyter nbconvert --to markdown --template $SCRIPT_PATH/jekyll.tpl ${FNAME}.ipynb

# move image files
mkdir -p ${SCRIPT_PATH}${IMG_PATH}
mv ${FNAME}_files/*.png ${SCRIPT_PATH}${IMG_PATH}/
rm -rf ${FNAME}_files

# change image paths
sed -i -e "s:!\[svg\](${FNAME}_files/:!\[표시 할 수 없음\](${IMG_PATH}/:g" -e "s:.svg):.png):g" ${FNAME}.md
sed -i -e "s:!\[png\](${FNAME}_files/:!\[표시 할 수 없음\](${IMG_PATH}/:g" -e "s:.svg):.png):g" ${FNAME}.md
```

스크립트를 통해 변환된 포스트는 아래와 같습니다.

[주피터 노트북으로 작성된 포스트]("")