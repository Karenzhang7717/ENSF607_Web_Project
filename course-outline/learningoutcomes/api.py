from .models import LearningOutcome
from rest_framework import viewsets, permissions
from .serializers import LearningOutcomeSerializer


class LearningOutcomeViewSet(viewsets.ModelViewSet):
    queryset = LearningOutcome.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LearningOutcomeSerializer
