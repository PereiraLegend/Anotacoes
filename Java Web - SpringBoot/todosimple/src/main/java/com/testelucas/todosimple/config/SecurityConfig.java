package com.testelucas.todosimple.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.testelucas.todosimple.security.JWTAuthenticationFilter;
import com.testelucas.todosimple.security.JWTAuthorizationFilter;
import com.testelucas.todosimple.security.JWTUtil;

//Aqui é aondefica o primeiro filtro de sengurança da autenticação de usuário
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true) // Aqui eu falo para todos os métodos adicionarem uma segurança global no pré post
public class SecurityConfig {
    
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JWTUtil jwtUtil;
    
    private static final String[] PUBLIC_MATCHERS = {
        "/"
    };

    private static final String[] PUBLIC_MATCHERS_POST ={ // Para a rota post aqui eu libero o acesso as rotas post, por exemplo em users onde eu crio usuários // Obs.: fora disso o "/login" não é implementado pelo desenvolvedor, ele é abstrato do spring, no próprio spring security
        "/user",
        "/login"
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable(); // Essa linah é uma proteção contra ataques ao cors de requisição de http request, mas a nivel de desenvolvimento eu o deixo desabilitado

        // // Após criar o "UserDetailsServiceImpl.java" eu adiciono logo abaixo // //
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(this.userDetailsService).passwordEncoder(bCryptPasswordEncoder());
        this.authenticationManager = authenticationManagerBuilder.build();
        // // // //
        
        // Aqui é a parte principal da autenticação, que é aonde vamos exigir que esteja autenticado:
        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, PUBLIC_MATCHERS_POST).permitAll() // Aqui digo que qualquer método de post eu vou permitir
                .antMatchers(PUBLIC_MATCHERS).permitAll() // Aqui eu digo que o get, put, update e delete irão ser permitidos
                .anyRequest().authenticated().and() // Aqui eu digo que para qualquer outro request que eu não deixarei passar sem autenticação
                .authenticationManager(authenticationManager);

        // // Aqui eu adiciono o filtro criado // //
        http.addFilter(new JWTAuthenticationFilter(this.authenticationManager, this.jwtUtil));
        http.addFilter(new JWTAuthorizationFilter(this.authenticationManager, this.jwtUtil, this.userDetailsService));
        // // // //
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); // Obs.: Não vamos construir um sistema de salvar seção, então eu digo que o http session management cria uma politica STATELESS
        
        return http.build();
    }

    // Parte de copiar e colar, aonde eu jogo o cor configuration do spring security
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
        configuration.setAllowedMethods(Arrays.asList("POST", "GET","PUT","DELETE","OPTIONS"));
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() { // Aqui eu inio a ideia de criptografia, ou seja, eu criptografo a senha e descriptografo a mesma 
        return new BCryptPasswordEncoder();
    }
}
