from django.db import models

class GPAConversion(models.Model):
    letterGrade= models.CharField(max_length=10)
    totalMark = models.CharField(max_length=10)
  
