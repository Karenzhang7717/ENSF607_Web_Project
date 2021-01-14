from django.db import models

class CourseGrade(models.Model):
    courseNum = models.CharField(max_length=10)
    courseComponent = models.CharField(max_length=50)
    courseOutcomes = models.CharField(max_length=50)
    courseWeight = models.CharField(max_length=10)
   
