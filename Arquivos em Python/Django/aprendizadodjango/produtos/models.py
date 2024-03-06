from django.db import models

# Create your models here.
# Tudo o que vai ser feito aqui vai ser feito do modo ORM, ou seja, com python puro, ou seja o ORM permite que com apenas uma linguagem de programação consigamos manipular o banco de dados

class Pessoa(models.Model): # Apartir do momento que eu crio a classe e rodo os comando makemigrations e migrate, essa tabela já fica disponivel no banco de dados e um crud completo dela é criado na área administrativa
    nome = models.CharField(max_length=50)
    idade = models.IntegerField()
    
        
    def __str__(self) -> str: # Mátodo mágico ou seja, simplesmente tem que estar aqui e é gerado automáticamente
        return self.nome