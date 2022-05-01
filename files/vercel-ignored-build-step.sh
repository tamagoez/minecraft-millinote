#!/bin/bash

# https://zenn.dev/catnose99/articles/b37104fc7ef214
# https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables

COMMIT_MESSAGE=$VERCEL_GIT_COMMIT_MESSAGE
echo "Got Comment: $COMMIT_MESSAGE"

if [[ "$COMMIT_MESSAGE" =~ "deploy" || "$COMMIT_MESSAGE" =~ "**" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
