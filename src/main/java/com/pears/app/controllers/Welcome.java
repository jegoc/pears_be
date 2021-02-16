package com.pears.app.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Welcome {
	
	@RequestMapping("/")
	String welcome() {
		return "Stay safe, #Covid!asdsdgdddddddddddfgdfad";
	}
}
