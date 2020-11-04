from django.apps import AppConfig


class LampConfig(AppConfig):
    name = "appliances.lamp"

    def ready(self):
        import appliances.lamp.signals
