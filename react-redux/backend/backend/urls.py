from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
import todos.views

router = routers.DefaultRouter()
router.register('api', todos.views.TodoViewset)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
