from rest_framework import serializers
from gpaconversion.models import GPAConversion

class GPAConversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GPAConversion
        fields = '__all__'