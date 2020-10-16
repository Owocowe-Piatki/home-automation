import logging

import paho.mqtt.client as mqtt
from django.conf import settings

from .signals import mqtt_publish, mqtt_receive

logger = logging.getLogger(__name__)

client = mqtt.Client()
client.connect(settings.MQTT_BROKER_URL, settings.MQTT_BROKER_PORT, 60)


def on_connect(client, userdata, flags, rc):
    client.subscribe(f"{settings.MQTT_TOPIC}/#")


def on_message(client, userdata, msg):
    # logger.info(f"[{msg.topic}] {msg.payload.decode()}")
    mqtt_receive.send(__name__, topic=msg.topic, message=msg.payload.decode())


def publish(sender, **kwargs):
    topic = kwargs.get("topic")
    message = kwargs.get("message")

    client.publish(f"{settings.MQTT_TOPIC}/{topic}", message)


client.on_connect = on_connect
client.on_message = on_message
mqtt_publish.connect(publish)
