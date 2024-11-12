#!/bin/bash

DIRECTORY="./"

for FILE in "$DIRECTORY"/*.json; do
  echo "Validando $FILE"
  jsonlint "$FILE"
  if [ $? -eq 0 ]; then
    echo "$FILE es válido."
  else
    echo "Error al validar $FILE."
  fi
  echo "--------------------------------"
done
