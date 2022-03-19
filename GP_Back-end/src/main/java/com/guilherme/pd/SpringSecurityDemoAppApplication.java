package com.guilherme.pd;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.guilherme.pd.model.Authority;
import com.guilherme.pd.model.User;
import com.guilherme.pd.repositories.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringSecurityDemoAppApplication {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDetailsRepository userDetailsRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringSecurityDemoAppApplication.class, args);
	}

	@PostConstruct
	protected void init() {

		List<Authority> authorityList=new ArrayList<>();

		authorityList.add(createAuthority("USER","User role"));
		authorityList.add(createAuthority("ADMIN","Admin role"));

		User user=new User();

		user.setUserName("admin");
		user.setFirstName("admin");
		user.setLastName("admin");

		user.setPassword(passwordEncoder.encode("admin123"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);

		userDetailsRepository.save(user);

	}
	
	
	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authority=new Authority();
		authority.setRoleCode(roleCode);
		authority.setRoleDescription(roleDescription);
		return authority;
	}
	
	

}
