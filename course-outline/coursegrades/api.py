from coursegrades.models import CourseGrade
from rest_framework import viewsets, permissions
from .serializers import CourseGradesSerializer

class CourseGradeViewSet(viewsets.ModelViewSet):
    queryset = CourseGrade.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CourseGradesSerializer