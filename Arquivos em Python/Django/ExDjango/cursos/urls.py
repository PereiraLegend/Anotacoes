from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('acessar_curso/', views.acessar_curso),
    path('criar_curso/', views.criar_curso)
]
