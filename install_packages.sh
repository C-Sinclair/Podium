#!/bin/bash

for package in packages/*; 
do
    (cd "$package" && yarn install)
done