from django.db import models

# Create your models here.
class Weather(models.Model):
    date=models.DateField(auto_now=True)
    time=models.TimeField(auto_now=True)
    day=models.CharField(max_length=10)
    wcd=models.CharField(max_length=100)
    ko_sky=models.CharField(max_length=100)

