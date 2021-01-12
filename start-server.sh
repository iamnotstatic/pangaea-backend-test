#!/usr/bin/env bash
echo "Installing Dependencies"
npm install 

for d in ./services/*/ ; do
    (cd $d && npm install)
done
echo "Dependencies Installed!"

echo "Publisher Server listening and Subscriber Server listening respectively"

npm start