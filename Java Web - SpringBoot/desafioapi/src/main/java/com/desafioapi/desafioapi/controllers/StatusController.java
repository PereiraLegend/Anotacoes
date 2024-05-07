package com.desafioapi.desafioapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.desafioapi.desafioapi.service.StatusService;


@Controller
@RequestMapping("/status")
public class StatusController {
    
    @Autowired
    private StatusService statusService;

}
