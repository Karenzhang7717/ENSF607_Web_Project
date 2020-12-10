from django.db import models

# Create your models here.
class Echo (models.Model):
    message = models.CharField(max_length=70)
