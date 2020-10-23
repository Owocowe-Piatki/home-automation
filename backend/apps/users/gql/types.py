from graphene_django import DjangoObjectType
from django.contrib.auth.models import Group
from django.contrib.auth.models import Permission
from ..models import User


class CurrentUserType(DjangoObjectType):
    class Meta:
        model = User
        exclude = ["id", "password"]


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = ["email", "first_name", "last_name", "birth_date"]


class GroupType(DjangoObjectType):
    class Meta:
        model = Group


class PermissionType(DjangoObjectType):
    class Meta:
        model = Permission
