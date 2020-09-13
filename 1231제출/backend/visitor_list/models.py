from django.db import models

# Create your models here.
class VisitorList(models.Model):
    id = models.AutoField(primary_key=True)
    visitor=models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)