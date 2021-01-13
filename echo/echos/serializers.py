from rest_framework import serializers 
from echos.models import echos
 
 
class echosSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = echos
        fields = ('id',
                  'title',
                  'description',
                  'published')