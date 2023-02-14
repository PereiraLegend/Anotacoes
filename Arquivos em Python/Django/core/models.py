from django.db import models

# Create your models here.
# Models é um modelo de dados, ou seja através dele eu persisto dados em um banco de dados, onde eu posso utilizar banco de dados como um arquivo python
class Produto(models.Model):
    nome = models.CharField("Nome", max_length= 100)
    preco = models.DecimalField("Preço", decimal_places= 2, max_digits=8)
    estoque = models.IntegerField('Quantidade em Estoque')
class Cliente(models.Model):
    nome = models.CharField("Nome", max_length=100)
    sobrenome = models.CharField('Sobrenome',max_length=100)
    email = models.CharField("Email", max_length=100)