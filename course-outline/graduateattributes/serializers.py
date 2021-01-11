from .models import GraduateAttribute
from rest_framework import serializers


class GraduateAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GraduateAttribute
        fields = ['courseNum', 'learningOutcomeNum',
                  'graduateAttribute', 'instructionLevel']
