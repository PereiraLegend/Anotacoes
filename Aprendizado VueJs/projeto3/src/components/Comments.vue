<template>
    <div class="container">
        <h1>Comentários</h1>

        <FormTodo v-on:add-todo="addComment"></FormTodo>
        
        <br>
        <div class="list-group">
            
            <p v-if="comments.lenght <= 0">Sem Comentários...</p>
            
            <div v-else class="list-group-item" v-for="(comment, index) in allComments" v-bind-key="index">
                <!-- Aqui eu faço um teste de iteração atribuido por 'v-for', o 'comment' é uma variável que eu estou criando para saber o valor de cada iteração -->
                <!-- Ao adicionar parênteses em "(comment, index)" , eu posso atribuir mais de um valor, nesse caso index seria algo como o id a ser passado para por exemplo criar a funcionalidade 'excluir' -->
                <span class="comment__author">Author: <strong>{{ comment.name }}</strong></span>
                <!-- Aqui eu quero cuspir um valor, para isso eu utilizo a sintaxe "{{comment.name}}"-->
                <p>{{ comment.message }}</p>
                <div>
                    <a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
                    <!-- Aqui eu passo o index como um identificador do item para fazer a funcionalidade excluir-->
                    <!-- Aqui eu passo o ".prevent" para inpedir que a tag link "<a>" haja como um link -->
                </div>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>// Aqui não é necessário criar um "new Vue({..." pois por trás dos panos já acontece isso

import FormTodo from './FormTodo'

export default {
    components: {
        FormTodo
    },
    data() { // É a mesma coisa de "data: function(){..."
        return {
            comments: [
                //{
                //    name: 'Ayrton',
                //    message: 'Lorem ipsum'
                //}
            ],
            // name: '', // Aqui serão aramzenados os comantários
            // message: ''
        }
    },
    // Aqui eu atribuo os métodos para os meus eventos, ou seja eu distribuo todos os métodos implantados nos tamplates sobre as diretivas
    methods: {
        // addComment() {
        //     // aqui faço uma verificação se caso o 'comentário' e o 'autor' sejam vazios e o botão comentar seja apertado que não aconteça a ação de criar cards/blocos vazios
        //     // this.name.trim() === '' || 
        //     if (this.message.trim() === '') {
        //         return
        //     }

        //     console.log("Chamando!")
        //     console.log(this.name)
        //     console.log(this.message)
        //     // No caso anteriormente em data eu predefini valores para serem enviados ao front-end,agora vou fazer o caminho inverso como um 'pseudo crud' para atribuir valores
        //     this.comments.push({ // Aqui depois de capturar as variáveis e as seto para serem arazenadas
        //         name: this.name,
        //         message: this.message
        //     })

        //     // Aqui após os dados serem atribuidos ao aramzenamento temporário eu limpo os campos
        //     this.name = ''
        //     this.message = ''

        // },

        addComment(comment) {
            this.comments.push(comment)
        },

        // Aqui eu crio o método para excluir os comentários, e para esse caso é necessário apagar o array
        removeComment(index) {
            console.log(`Index: ${index}`)
            this.comments.splice(index, 1) // Aqui eu removo o item através do próprio javascript
        }

    },
    // O computed disponibiliza também variaveis para a renderização de templates assim como a propriedade data, sendo o computed mais relacionado com a interface e a parte de vizualização, diferente do data que cuida mais da parte de dados
    computed: { // No caso o computed serve para customizar o que será mandado para a interface, ou seja ele é muito util para que não seja necessário que eu faça lógicas dentro do meu template
        // Esas função vai retornar um valor que vai ser a propriedade que estará na view
        allComments() {
            //Aqui eu digo que se o nome não for colocado ele será dado/salvo como anônimo
            return this.comments.map(comment => ({
                ...comment,
                name: comment.name.trim() === '' ? 'Anônimo' : comment.name
            }))
        }
    },

    // Aqui eu consigo monitorar qualquer propriedade e apartir disso tomar uma ação
    watch: { // Posso usar o watch para salvar dados no localstorage, cookies, ou qualquer outro local
        comments(val) { // Aqui eu coloco na função o mesmo nome da propriedade que eu quero ver
            console.log('val: ', val) // Obs.: Deu erro quando fiz da forma: "console.log(`Val: ${val}`)"
        }
    }

}
</script>