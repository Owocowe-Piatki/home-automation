import graphene
from apps.users.gql.queries import UserQuery


class Query(UserQuery, graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")
    user = graphene.Field(UserQuery)


schema = graphene.Schema(query=Query)
