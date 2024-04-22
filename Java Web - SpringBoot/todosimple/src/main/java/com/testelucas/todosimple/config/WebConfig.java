package com.testelucas.todosimple.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{ // Para dizer que isso é uma configuração web preciso implementar a interface do spring que proporciona isso
    // Fazendo configurações de segurança no cors
    public void addCorsMapping(CorsRegistry registry){
        registry.addMapping("/**"); // Essa configuração "fala" que qualquer requisição que vier de fora ela será liberada apartir dessa rota // Resumnido aqui diz que tudo depois do "localhost:8080" ou qualquer outro endereço que for ser utilizado estará liberado // Se essa configuração não for feita a api vai bloquear qualquer requisição feita
        // Na configuração acima também posso bloquear e definir metódos permitidos adicionando "...("/**").allowed()" e com isso restringo o acesso ao que eu não quero que seja acessado // Ou seja posso obrigar o frontend falar apenas com o back end e vice versa para evitar que um terceiro tenha acesso
    }
}
