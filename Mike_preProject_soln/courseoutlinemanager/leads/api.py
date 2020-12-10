from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializer import LeadSerializer

# Lead viewset
# we get CRUD api out of viewsets without having to define explicit message
# We don't even need to register the routes!


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LeadSerializer
