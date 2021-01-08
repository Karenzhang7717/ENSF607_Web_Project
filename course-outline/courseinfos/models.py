from django.db import models

class CourseInfo(models.Model):
    courseNum = models.CharField(max_length=10, unique=True)
    courseName = models.CharField(max_length=50)
    courseDesc = models.CharField(max_length=500)
    courseHour = models.CharField(max_length=20)
    credit = models.CharField(max_length=1)
    link = models.URLField()
