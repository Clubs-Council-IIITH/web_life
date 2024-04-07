#!/bin/bash

cd web
npm install
cd ..

docker compose -p life-web up --build

docker compose -p life-web down
