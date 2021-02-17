package com.pears.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pears.app.model.User;
import com.pears.app.repository.UserRepository;

@RestController
@RequestMapping("api/v1")
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
}
