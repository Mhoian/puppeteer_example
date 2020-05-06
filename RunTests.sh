#!/usr/bin/env bash
docker-compose -f docker-compose.yml run tests
errorCode=$? # save the exit code as the first thing done in the trap function
exit $errorCode
