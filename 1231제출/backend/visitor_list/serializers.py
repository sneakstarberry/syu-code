from rest_framework import serializers
from . import models

class VisitorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.VisitorList
        fields = '__all__'