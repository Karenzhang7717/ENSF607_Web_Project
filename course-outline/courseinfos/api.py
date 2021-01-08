from courseinfos.models import CourseInfo
from rest_framework import viewsets, permissions
from .serializers import CourseInfoSerializer

class CourseInfoViewSet(viewsets.ModelViewSet):
    queryset = CourseInfo.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CourseInfoSerializer