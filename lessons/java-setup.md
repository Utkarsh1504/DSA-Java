---
path: "/java-setup"
title: "Java Development Setup"
order: "2B"
section: "Basics"
description: "Intro to java"
---

## Tools You Will Need

For setting up environment for performing java codes you need with a minimum of 64 MB of RAM.
You will also need the following softwares:
- Linux 5.14 or Windows XP/7/8/10 operating system
- [Java JDK 16](https://www.oracle.com/java/technologies/javase-jdk16-downloads.html)
- IDEs


### About JDK and JRE
- **JDK(Java Development Kit)** is complete java package for developing java applications. It contains the following components
- **JRE(Java Runtime Environment)** it basically create a **Java virtual machine(JVM)** for running java applications.


## Setting up Java development environment

Java SE is freely available from the link [Download Java](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). You can download a version based on your 
operating system. Follow the instructions to download Java and run the `.exe` to install Java on your machine. Once Java is installed on your machine, you will need to set 
environment variables to point to correct installation directories:

### Setting Up the Path for Windows:

Assuming you have installed Java in *`C:\Program Files\Java\JDK* directory`:*
- Right-click on `This PC` and select `Properties`.
- Click the `Environment variables` button under the `Advanced` tab.
- Now, alter the `PATH` variable so that it also contains the path to the Java executable. Example, if the path is currently set to *`C:\WINDOWS\SYSTEM32`*, then change your 
path to read *`C:\WINDOWS\SYSTEM32;C:\Program Files\Java\JDK\bin`*

### Setting Up the Path for Linux, UNIX:

Environment variable `PATH` should be set to point to where the Java binaries have been installed. Refer to your shell documentation, if you have trouble doing this. Example, if
you use bash as your shell, then you would add the following line to the end of your *`.bashrc: export PATH = /path/to/java:$PATH`*.


## IDEs

It is a software development environment for writing, debugging, and testing Java programs. we can write code very smoothly using IDE.There are many IDE's available for java. for example, **[IntelliJ IDEA](https://www.jetbrains.com/idea/)**, [Eclipse](https://www.eclipse.org/downloads/), [Netbeans](https://netbeans.apache.org/download/nb120/nb120.html), etc.


After setting up JDK, install anyone of the of your favorite IDE just by clicking on the link and install it.


*It really Simple!*
