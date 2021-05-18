package com.example.mywiki.config;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;

@ComponentScan("com.example.mywiki")
@SpringBootApplication
@MapperScan("com.example.mywiki.mapper")
public class MyWikiApplication {

    private static final Logger LOG =  LoggerFactory.getLogger(MyWikiApplication.class);

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(MyWikiApplication.class);
        Environment nev = app.run(args).getEnvironment();
        LOG.info("启动成功！");
        LOG.info("地址：\thttp://127.0.0.1:{}",nev.getProperty("server.port"));
    }
}
