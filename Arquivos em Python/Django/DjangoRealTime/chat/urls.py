from django.urls import path
from .views import IndexView, SalaView
urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('chat/str:nome_sala/', SalaView.as_view(), name='sala'),
]
