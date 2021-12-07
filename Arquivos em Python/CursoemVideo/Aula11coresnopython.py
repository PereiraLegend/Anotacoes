print("\033[4:31:43m Olá, Mundo! \033[m")
print("\033[0;33;44m Olá, Mundo! \033[m")
a =3
b = 5
print("Os valores são \033[32m {} \033[m e \033[31m {} \033[m!!!".format(a, b))
# Deforma mais avançada
nome = "Lucas"
print("Seja bem vindo, {}{}{} !!!".format("\033[4;34m",nome,"\033[m"))
# Mais uma forma de fazer
nome = "Pereira"
cores = {"limpa":"\033[m","azul":"\033[34m","amarelo":"\033[33m","pretoebranco":"\033[7:30m"}
print("Olá! Muito prazer em te conhecer, {}{}{}!!!".format(cores["azul"], nome, cores["limpa"]))