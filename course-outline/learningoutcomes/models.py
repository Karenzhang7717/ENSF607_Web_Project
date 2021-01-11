from django.db import models


class LearningOutcome(models.Model):
    courseNum = models.CharField(max_length=10, unique=False)
    learningOutcomeNum = models.IntegerField()
    outcomeDescription = models.CharField(max_length=500)

    def serialize(self):
        return {
            'courseNum': self.courseNum,
            'learningOutcomeNum': self.learningOutcomeNum,
            'outcomeDescription': self.outcomeDescription
        }
