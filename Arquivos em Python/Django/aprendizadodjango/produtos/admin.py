from django.contrib import admin
from .models import Pessoa # Aqui eu importo a model que eu criei
# Register your models here.
admin.site.register(Pessoa) # Aqui eu registro a model para que ela apareça na área administrativa do django # Aqui ele já me dá um crud completo com conexão direta ao banco de dados