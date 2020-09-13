from django.urls import path
from . import views

urlpatterns = [
    path('weather/', views.weather, name='weather'),
    path('dust/', views.dust, name='dust'),
]