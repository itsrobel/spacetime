from django.urls import path
from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("flash", views.create_flash, name="create_flash"),
]
