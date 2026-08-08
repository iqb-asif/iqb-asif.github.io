@echo off
title Git Auto Push

cd /d D:\Project\Portfolio

git add .
git commit -m "Update"
git push origin main

pause