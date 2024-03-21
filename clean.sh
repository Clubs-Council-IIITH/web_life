#!/bin/bash

docker compose -p life-web down -v

cd web
sudo rm -rf node_modules .svelte-kit
cd ..