#!/bin/bash

# Use TTY Colors
export FORCE_COLOR=true

# Build all workspaces in parallel
yarn workspaces foreach -pvit run build | yarn format-logs

# Prettier Format
yarn run format