frase = "Curso em Video Python"
# Fatiamento
# Nessa funcionalidade de baixo ele só vai mostrar o caractere nessa posição da frase
print(frase[9])
# Ele vai pegar do 9 até o 13 mas o 13 ele vai excluir
print(frase[9:13])
# Nessa funcionalidade eu vou começar numa posição, terminar na outra, pulando de x em x
print(frase[9:21:2])
# Nessa funcionalidade sem o primeiro valor ou o valor do começo ele começa a partir do zero
print(frase[:5])
# Se eu coloco o começo, mas não coloco o fim ele vai até o final
print(frase[15:])
# Se eu coloco o começo , mas não coloco o fim, mas coloco de quanto em quanto ele pula ele vai ate o final pulando
print(frase[9::3])
# Análise
# Aqui ele vai mostrar o conprimento da frase
print(len(frase)) # se fosse assim frase = '   Curso em Video Python'  ,na outra linha poderia fazer a junção print(len(frase.strip())) para contar sem os espaços
# Aqui ele vai contar quantas vezes aparece uma letra
print(frase.count('o'))
# Aqui ele faz uma contagem com fatiamento
print(frase.count('o',0,13))# o ultimo valor foi ignorado pelo python
# Aqui ele vai mostrar aonde (em qual posição) ele encontrou a junção de caracteres
print(frase.find('deo')) #obs se eu colocar aqui uma junção que não existe na variavél como a palavra 'Android', ele vai retornar -1
# Verificar a existencia de uma palavra em uma frase, ele senpre retorna um valor booleano
print('Curso' in frase)
# Transformação
# Essa funcionalidade vai ubstituir uma palavra pela outra, e se a que foi substituida tiver mais caracteres o próprio python vai compensar
print(frase.replace('Python','Android'))# Aqui ela só fica gravada nessa instancia e para ficar realmente salvo na variavél tem que ser colocado frase = frase.replace('Python','Android')
# Essa funcionalidade vai deixar todas as letras maiúsculas
print(frase.upper())
# Essa funcionalidade deixa em minusculo toda a frase
print(frase.lower()) # Posso também fazer a junção primeiro eu jogo a frase para minusculo depois eu seleciona a parte que eu quero em minúsculo print(frase.lower().find('video'))
# Vai jogar toda a frase em minúsculo exceto a primeira letra
print(frase.capitalize())
#Essa funcionalidade deixa todas as palavras com a primeira letra maiúscula
print(frase.title())
# Eliminar espaços inúteis no inicio e no final da string
frasi="   Aprenda Python   "
print(frasi.strip())
# De forma similar essa funcionalidade abaixo com r vai somente remover os últimos espaços
print(frasi.rstrip())
# Já essa funcionalidade com l vai remover os espaços a esquerda
print(frasi.lstrip())
# Funcionalidades de Divisão
# Essa funcionalidade vai fazer uma divisão dentro dos espaços e criar pedaços diferentes no injdices, e cada palavra vai receber uma indexação nova
print(frase.split())
#posso com essa funcionalidade fazer também abaixo
dividido = frase.split()
print(dividido[2]) # Aqui eu seleciono o item 2 do que foi separado anteriormente, que é o bloco da palavra selecionada
print(dividido[2][3]) # Aqui ele pega primeiro o bloco e depois ele seleciona a posição da letra que ele vai mostrar na tela
# Essa funcionalidade vai fazer a junção do que foi ou está separado
#Obs.: essa funcionalidade vai separar todas as letras por conta da ultima funcionalidade que separou a palavra em indices
print('-'.join(frase))
print( )
#Inprimir um texto inteiro
print("""A História do Brasil começa com a chegada 
dos primeiros humanos na América do Sul há pelo menos
22 000 anos AP.[1][2] Em fins do século XV, quando do 
Tratado de Tordesilhas, toda a área hoje conhecida 
como Brasil era habitada por tribos seminômades que 
subsistiam da caça, pesca, coleta e agricultura. 
""")