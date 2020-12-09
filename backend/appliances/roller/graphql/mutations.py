import graphene

from apps.mqtt.signals import mqtt_publish

from ..models import Roller


class ToggleRoller(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    ok = graphene.Boolean()

    def mutate(root, info, id):
        roller = Roller.objects.get(id=id)
        possible_action = next(roller.get_available_state_transitions())

        if possible_action.name not in ("open", "close"):
            return ToggleRoller(ok=False)

        if roller.state == "opened":
            payload = "close"
        elif roller.state == "closed":
            payload = "open"
        else:
            return ToggleRoller(ok=False)

        mqtt_publish.send(__name__, topic=roller.mqtt_topic, payload=payload)
        return ToggleRoller(ok=True)


class SetRoller(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        state = graphene.Boolean()

    ok = graphene.Boolean()

    def mutate(root, info, id, state):
        roller = Roller.objects.get(id=id)
        possible_action = next(roller.get_available_state_transitions())

        payload = "open" if state else "close"

        if possible_action.name != payload:
            return SetRoller(ok=False)

        mqtt_publish.send(__name__, topic=roller.mqtt_topic, payload=payload)
        return SetRoller(ok=True)


class BatchSetRoller(graphene.Mutation):
    class Arguments:
        id_list = graphene.List(graphene.ID)
        state = graphene.Boolean()

    ok = graphene.Boolean()

    def mutate(root, info, id_list, state):
        rollers = Roller.objects.filter(id__in=id_list)

        payload = "open" if state else "close"

        for roller in rollers:
            possible_action = next(roller.get_available_state_transitions())

            if possible_action.name == payload:
                mqtt_publish.send(__name__, topic=roller.mqtt_topic, payload=payload)

        return BatchSetRoller(ok=True)
