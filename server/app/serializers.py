__author__ = 'dustinschie'

from marshmallow import Serializer, fields


class UserSerializer(Serializer):
    class Meta:
        fields = ('id', 'email')


class PostSerializer(Serializer):
    user = fields.Nested(UserSerializer)

    class Meta:
        fields = ('id', 'title', 'body', 'user', 'created_at')
