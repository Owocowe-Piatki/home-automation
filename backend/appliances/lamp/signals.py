from django.db.models.signals import post_save
from graphene_subscriptions.signals import post_save_subscription

from .models import Lamp

post_save.connect(post_save_subscription, sender=Lamp, dispatch_uid="lamp_post_save")
