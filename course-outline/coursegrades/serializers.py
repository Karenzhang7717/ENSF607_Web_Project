from rest_framework import serializers
from coursegrades.models import CourseGrade

class CourseGradesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseGrade
        fields = '__all__'