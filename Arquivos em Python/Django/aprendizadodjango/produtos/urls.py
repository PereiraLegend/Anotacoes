from django.urls import path
from . import views # Chamo views, pois 'ver_produto' está dentro dele "views.py"

urlpatterns = [
    #path('base/', views.ver_produto, name="base"),
    path('ver_produto/', views.ver_produto, name="ver_produto"),
    path('inserir_produto/', views.inserir_produto, name="inserir_produto")
]
