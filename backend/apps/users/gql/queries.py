import graphene
from datetime import datetime
from .types import UserType, CurrentUserType
from ..models import User


class UserQuery(graphene.ObjectType):
    current_user = graphene.Field(CurrentUserType)
    user_birthday = graphene.List(UserType)

    def resolve_current_user(self, info):
        return info.context.user

    def resolve_user_birthday(self, info):
        return User.objects.filter(
                birth_date__month=datetime.now().month,
                birth_date__day__gte=datetime.now().day
            )


schema = graphene.Schema(query=UserQuery)
