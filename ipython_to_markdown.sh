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
