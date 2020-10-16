from django.dispatch import Signal

mqtt_receive = Signal(["topic", "message"])
mqtt_publish = Signal(["topic", "message"])
