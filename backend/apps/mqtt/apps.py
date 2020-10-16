import logging
import os

from django.apps import AppConfig

from .client import client

logger = logging.getLogger(__name__)


class MqttConfig(AppConfig):
    name = "apps.mqtt"
    verbose_name = "MQTT handler"

    def ready(self):
        client.loop_stop()
        client.loop_start()
