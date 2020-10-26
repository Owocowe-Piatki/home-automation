from ..models import Lamp as LampModel
from .queries import LampMutation, LampQuery
from .types import Lamp as LampType

query = LampQuery
mutation = LampMutation
type = LampType
model = LampModel
