from django.contrib import admin
from .models import Chassi, Carro, Montadora
# Register your models here.

@admin.register(Montadora)
class MontadoraAdmin(admin.ModelAdmin):
    list_display = ('nome',)

@admin.register(Chassi)
class ChassAdmin(admin.ModelAdmin):
    list_display = ('numero',)

@admin.register(Carro)
class CarroAdmin(admin.ModelAdmin):
    list_display = ('Montadora','modelo','chassi','preco')