from django.contrib import admin
from django.urls import path
from django.conf.urls import include
import info_Weather.views

urlpatterns = [
    path('', info_Weather.views.index, name='index'),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]
