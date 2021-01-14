from django.db import models

class GPAConversion(models.Model):
    courseNum = models.CharField(max_length=10)
    letterGrade= models.CharField(max_length=10)
    totalMark = models.IntegerField()
  
