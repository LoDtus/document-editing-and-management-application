//package com.server.config.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.provisioning.JdbcUserDetailsManager;
//import org.springframework.security.provisioning.UserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//import javax.sql.DataSource;
//
//@Configuration
//public class SecurityConfig {
//    @Bean
//    public UserDetailsManager userDetailsManager(DataSource dataSource) {
//        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);
//        jdbcUserDetailsManager.setUsersByUsernameQuery(
//                "select user_id, user_password, active from users where user_id=?"
//        );
//        jdbcUserDetailsManager.setAuthoritiesByUsernameQuery(
//                "select user_id, role from roles where user_id=?"
//        );
//        return jdbcUserDetailsManager;
//    }
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests( configurer ->
//                        configurer
//                                .requestMatchers(HttpMethod.GET, "/users/**").hasRole("GUEST")
//                                .requestMatchers(HttpMethod.POST, "/users").hasRole("GUEST")
//                                .requestMatchers(HttpMethod.PUT, "/users").hasRole("GUEST")
//                                .requestMatchers(HttpMethod.DELETE, "/users/**").hasRole("GUEST")
//        );
//        http.httpBasic(Customizer.withDefaults());
//        http.csrf(csfr -> csfr.disable());
//        return http.build();
//    }
//}
