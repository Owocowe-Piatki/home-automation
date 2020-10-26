import graphene

from ..models import Lamp
from .types import Lamp as LampType


class LampQuery(graphene.ObjectType):
    lamps = graphene.List(LampType)

    def resolve_lamps(self, info, **kwargs):
        return Lamp.objects.all()


class LampMutation(graphene.ObjectType):
    pass
