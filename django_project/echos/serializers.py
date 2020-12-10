from rest_framework import serializers
from echos.models import Echo


class EchoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Echo
        fields = ('id',
                  'message')