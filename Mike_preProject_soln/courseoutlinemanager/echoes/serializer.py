from rest_framework import serializers
from echoes.models import Echoes

# Lead Serializer


class EchoesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Echoes
        fields = '__all__'
