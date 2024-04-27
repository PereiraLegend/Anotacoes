package com.testelucas.todosimple.security;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.Objects;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter{
    
    private JWTUtil jwtUtil;
    
    private UserDetailsService userDetailsService;
    
    public JWTAuthorizationFilter(AuthenticationManager authenticationManager, JWTUtil jwtUtil, UserDetailsService userDetailsService) {
        super(authenticationManager);
        this.jwtUtil = jwtUtil;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        String authorizationHeader = request.getHeader("Authorization");
        if (Objects.nonNull(authorizationHeader) && authorizationHeader.startsWith("Bearer ")){
            String token = authorizationHeader.substring(7);
            UsernamePasswordAuthenticationToken auth = getAuthenticationToken(token);
            if (Objects.nonNull(auth))
                SecurityContextHolder.getContext().setAuthentication(auth);
        }
        filterChain.doFilter(request, response);
    }

    // Criando um filtro interno para ver se os dados estão corretos, ou seja veriicar o token, pegando os dados dentro do token e buscando autenticação dentro do token // Ou seja recebo o token e verifico se ele é válido e com isso posso retornar o que o filtro interno precisa
    private UsernamePasswordAuthenticationToken getAuthenticationToken(String token) {
        if (this.jwtUtil.isValidToken(token)) {
            String username = this.jwtUtil.getUsername(token);
            UserDetails user = this.userDetailsService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authenticatedUser = new UsernamePasswordAuthenticationToken(username, null, user.getAuthorities());
            return authenticatedUser;
        }
        return null;
    }


}
