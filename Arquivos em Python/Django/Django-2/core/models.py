from django.db import models

# Create your models here.
from stdimage.models import StdImageField
# SIGNALS  --> Serve para inserir algo nos dados antes ou depois de armazenar eles no banco de dados
from django.db.models import signals
from django.template.defaultfilters import slugify # Slugy vai pegar o titulo e o nome do produto e criar um slugy
class Base(models.Model):
    criado = models.DateField('Data de Criação', auto_now_add = True)
    modificado = models.DateField('Data de Atualização', auto_now= True)
    ativo = models.BooleanField('Ativo?', default=True)

    class Meta:
        abstract = True

class Produto(Base):
    nome = models.CharField('Nome', max_length=100)
    preco = models.DecimalField("Preço", max_digits=8, decimal_places=2)
    estoque = models.IntegerField('Estoque')
    imagem = StdImageField('Imagem', upload_to='produtos', variations={'thumb': (124,124)}) # Aqui eu defino uma imagem para ficar com thunb no caso menoir do que ela é
    slug = models.SlugField('Slug', max_length=100, blank=True, editable=False)

    def __str__(self):
        return self.nome
    
def produto_pre_save(signal, instance, sender, **kwargs):
    instance.slug = slugify(instance.nome)

signals.pre_save.connect(produto_pre_save, sender=Produto)