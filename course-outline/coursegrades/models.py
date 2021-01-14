from django.db import models

class CourseGrade(models.Model):
    courseNum = models.CharField(max_length=10)
    courseComponent = models.CharField(max_length=50,blank=True)
    courseOutcomes = models.CharField(max_length=50,blank=True)
    courseWeight = models.IntegerField()
   
