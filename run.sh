#!/bin/bash

docker compose -p life-web up --build

docker compose -p life-web down
