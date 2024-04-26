package com.testelucas.todosimple.security;

import java.util.Date;
import java.util.Objects;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

// Após mexer no propierts adicionando um token e criar o "UserDetailsServiceImpl.java"
public class JWTUtil {
    // Aqui eu gero uma key para gerar um token

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generteToken(String username) {
        SecretKey key = getKeyBySecret();
        return Jwts.builder()
                   .setSubject(username)
                   .setExpiration(new Date(System.currentTimeMillis() + this.expiration))
                   .signWith(key)
                   .compact();
    }

    private SecretKey getKeyBySecret() {
        SecretKey key = Keys.hmacShaKeyFor(this.secret.getBytes());
        return key;
    }

    // Verificr se o token é válido

    // Criptografando
    public boolean isValidToken(String token){
        Claims claims = getClaims(token);
        if(Objects.nonNull(claims)) {
            String username = claims.getSubject();
            Date expirationDate = claims.getExpiration();
            Date now = new Date(System.currentTimeMillis());
            if(Objects.nonNull(username) && Objects.nonNull(expirationDate) && now.before(expirationDate))
                return true;
        }
        return false;
    }

    //Descriptografando
    private Claims getClaims(String token){
        SecretKey key = getKeyBySecret();
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        } catch (Exception e) {
            return null;
        }
    }
}
