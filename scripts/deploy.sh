#!/usr/bin/env bash

set -e -u -o pipefail

DIST_DIR=blog/.vuepress/dist/
REPO_URL=https://${GITHUB_PAGES_TOKEN}@github.com/${GITHUB_REPOSITORY}.git

cd $DIST_DIR

git config --global user.name github-actions[bot]
git config --global user.email 41898282+github-actions[bot]@users.noreply.github.com

git init -b gh-pages && git remote add origin $REPO_URL
git add ./* && git commit -m "auto deploy"
git push --set-upstream origin gh-pages --force
