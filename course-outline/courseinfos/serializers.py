from rest_framework import serializers
from courseinfos.models import CourseInfo

class CourseInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseInfo
        fields = '__all__'