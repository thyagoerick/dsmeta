# Projeto DSMETA - Thyago Erick
[Demonstração](./DemonstracaoDSMeta_Thyago.mp4)

## Ferramentas:
- Nodejs 16 e Yarn
- STS (Spring Tool Suite 4)
- VS Code
    - `IntelliCode`
    - `ESLint`
    - `JSX HTML <tags/>`
- Postman

## Criando um projeto react (typescript) com yarn e vite:
```
yarn create vite [nomeDoProjeto] --template react-ts
```

## Criando um projeto Java 8 com Spring Boot:
- Criar projeto Spring Boot no Spring Initializr com as seguintes dependências:
    - Web
    - JPA
    - H2
    - Security   

## Configuração de segurança (SecurityConfig.java):
```Java
import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		http.headers().frameOptions().disable();
		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.authorizeHttpRequests((auth) -> auth.anyRequest().permitAll());

		return http.build();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
}
```

## Banco de Dados
- Criar entidade Sale
- Fazer mapeamento objeto-relacional (JPA)
- Configurar dados de conexão do banco de dados H2
- Fazer seed do banco de dados (arquivo resources/import.sql)

### application.properties (configuração BD H2)
```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

## Envio de SMS
Dependências Maven do Twilio
```XML
<dependency>
	<groupId>com.twilio.sdk</groupId>
	<artifactId>twilio</artifactId>
	<version>8.31.1</version>
</dependency>
```
### Variáveis de ambiente no application.properties:
```
twilio.sid=${TWILIO_SID}
twilio.key=${TWILIO_KEY}
twilio.phone.from=${TWILIO_PHONE_FROM}
twilio.phone.to=${TWILIO_PHONE_TO}
```

----

## O que foi aprendido?

- Salvar os projeto no Github em monorepo;
    - Esclarecimentos sobre o monorepo
    
- Criar projetos backend e frontend
    - Estruturação do projeto (Organização dos arquivos e dos diretórios)
    - Montar o visual estático do front end
        - Frontend (ReactJS com TypeScript) -> Componentização, Hooks, Props, Axios
    - Implementar o back end
        - Backend (Java 8 com Spring) -> Annotaions, Variáveis de ambiente, Adição de dependências
        - Criar endpoints da API REST;
    - Acesso a banco de dados
        - Esclarecimentos sobre banco em memória (H2)
        
- Integração com SMS;
    - Uso da API do Twilio para troca/envio de SMS's

- Integrar back end e front end
    - Esclarecimentos sobre integração front e back, com Java e Spring, com ReactJS

~Implantação na nuvem && Implantar o front end~
    - _Não realizado pois o Heroku agora está pago_
