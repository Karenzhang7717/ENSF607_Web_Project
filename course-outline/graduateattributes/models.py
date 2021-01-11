from django.db import models


class GraduateAttribute(models.Model):
    courseNum = models.CharField(max_length=10, unique=False)
    learningOutcomeNum = models.IntegerField()
    graduateAttribute = models.CharField(max_length=500)
    instructionLevel = models.CharField(max_length=500)

    def serialize(self):
        return {
            'courseNum': self.courseNum,
            'learningOutcomeNum': self.learningOutcomeNum,
            'graduateAttribute': self.graduateAttribute,
            'instructionLevel': self.instructionLevel
        }
