from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def acessar_curso(req):
    #return HttpResponse('<h1>Olá Mundo!<h1>')
    return render(req, 'acessar_curso.html')

def criar_curso(req):
    return render(req, 'criar_curso.html')