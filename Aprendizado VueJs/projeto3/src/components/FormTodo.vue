<template>
    <div class="form-todo form-group">
        <p>
            <input placeholder="nome" type="text" name="author" class="form-control" v-model="name" />
            <!-- Aqui eu ligar o databind com o vuejs eu uso: "v-model='name'" -->
        </p>
        <p>
            <textarea placeholder="Comentário" name="author" class="form-control" v-model="message"></textarea>
        </p>
        <button v-on:click="addComment" type="submit" class="btn btn-primary">Comentar</button>
        <!-- Aqui eu crio um evento usando a tag "v-on:click='adComment'" para quando o botão for apertado-->
    </div>
    <br>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            message: ''
        }
    },

    methods: {
        addComment() {
            // aqui faço uma verificação se caso o 'comentário' e o 'autor' sejam vazios e o botão comentar seja apertado que não aconteça a ação de criar cards/blocos vazios
            // this.name.trim() === '' || 
            if (this.message.trim() === '') {
                return
            }

            // Aqui eu crio um método chamado emit que propaga um evento para todo mundo que estiver ouvindo capturar o evento
            this.$emit('add-todo', {
                name: this.name,
                message: this.message,
            })

            console.log("Chamando!")
            console.log(this.name)
            console.log(this.message)
            // No caso anteriormente em data eu predefini valores para serem enviados ao front-end,agora vou fazer o caminho inverso como um 'pseudo crud' para atribuir valores
            this.comments.push({ // Aqui depois de capturar as variáveis e as seto para serem arazenadas
                name: this.name,
                message: this.message
            })

            // Aqui após os dados serem atribuidos ao aramzenamento temporário eu limpo os campos
            this.name = ''
            this.message = ''

        },
    }
}
</script>