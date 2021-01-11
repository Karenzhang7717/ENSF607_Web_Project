from .models import GraduateAttribute
from rest_framework import viewsets, permissions
from .serializers import GraduateAttributeSerializer


class GraduateAttributesViewSet(viewsets.ModelViewSet):
    queryset = GraduateAttribute.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GraduateAttributeSerializer
