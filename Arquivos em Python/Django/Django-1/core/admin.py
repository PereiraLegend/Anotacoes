from django.contrib import admin

# Register your models here.

# Aqui eu registro dados do banco de dados no admin do site
from .models import Produto,Cliente

class ProdutoAdmin(admin.ModelAdmin):# Caso eu queira mostrar mais que só o nome do produto na interface
    list_display =  ('nome','preco','estoque') # Aqui ele vai mostrar o preço e a quantidade em estoque na interface gráfica pna parte core produtos

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nome','sobrenome','email')

admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Cliente, ClienteAdmin)