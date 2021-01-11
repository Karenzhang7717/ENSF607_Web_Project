from .models import LearningOutcome
from rest_framework import serializers


class LearningOutcomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LearningOutcome
        fields = ['courseNum', 'learningOutcomeNum', 'outcomeDescription']
