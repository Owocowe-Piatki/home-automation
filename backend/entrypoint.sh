#!/bin/sh
export RUN_WSGI=true
python manage.py collectstatic --noinput
python manage.py migrate
daphne -b 0.0.0.0 -p 8000 core.asgi:application