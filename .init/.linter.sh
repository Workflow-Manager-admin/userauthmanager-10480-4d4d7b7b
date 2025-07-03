#!/bin/bash
cd /home/kavia/workspace/code-generation/userauthmanager-10480-4d4d7b7b/user_management_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

