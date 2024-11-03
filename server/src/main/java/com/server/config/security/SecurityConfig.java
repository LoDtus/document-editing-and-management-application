package com.server.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.sql.DataSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.addAllowedHeader("Authorization");
        configuration.addAllowedHeader("Content-Type");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);
        jdbcUserDetailsManager.setUsersByUsernameQuery(
                "select user_id, user_password, active from users where user_id=?"
        );
        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery(
                "select user_id, role from roles where user_id=?"
        );
        return jdbcUserDetailsManager;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.exceptionHandling(c -> c.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)));
        http.cors(c -> c.configurationSource(corsConfigurationSource()));
        http.csrf(AbstractHttpConfigurer::disable);
        http.sessionManagement(c -> c.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.authorizeHttpRequests(configure -> configure
                .requestMatchers(HttpMethod.GET, "/users").hasRole("MEMBER")
                .requestMatchers(HttpMethod.GET, "/users/check/{userId}").permitAll()
                .requestMatchers(HttpMethod.GET, "/users/{userId}/{passwordId}").permitAll()
                .requestMatchers(HttpMethod.POST, "/users").permitAll()
                .requestMatchers(HttpMethod.PUT, "/users/{userId}").hasRole("MEMBER")
                .requestMatchers(HttpMethod.DELETE, "/users/**").hasRole("MEMBER")

                .requestMatchers(HttpMethod.GET, "/documents/**").hasRole("MEMBER")
                .requestMatchers(HttpMethod.POST, "/documents").hasRole("MEMBER")
                .requestMatchers(HttpMethod.PUT, "/documents").hasRole("MEMBER")
                .requestMatchers(HttpMethod.DELETE, "/documents/**").hasRole("MEMBER")

                .requestMatchers(HttpMethod.GET, "{userId}/documents").hasRole("MEMBER")
                .requestMatchers(HttpMethod.GET, "{userId}/itemDocuments").hasRole("MEMBER")
        );
        http.httpBasic(Customizer.withDefaults());
        return http.build();
    }
}
