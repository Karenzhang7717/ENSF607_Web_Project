from gpaconversion.models import GPAConversion
from rest_framework import viewsets, permissions
from .serializers import GPAConversionSerializer

class GPAConversionViewSet(viewsets.ModelViewSet):
    queryset = GPAConversion.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = GPAConversionSerializer