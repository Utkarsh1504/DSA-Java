---
path: "/intro-oop"
title: "Introduction"
order: "11A"
section: "Object Oriented Programming"
description: "complete introduction to object oriented programming"
icon: "object-ungroup"
---

Having learned the material in the preceding chapters, you are able to solve many programming problems using selections, loops, methods, and arrays. However, these Java features
are not sufficient for developing graphical user interfaces and large-scale software systems.
Suppose you want to develop a graphical user interface (GUI, pronounced goo-ee) for Calculator. How would you program it?

Okay so, In this lesson we'll be talking about OOP(Object Oriented Porgramming) concepts.Object-Oriented Programming paradigm is a popular programming paradigm which is used to write to good quality code and this is the paradigm which is the default choice everywhere whether you want to do web or android development or any sort of development from now onwards, OOP concepts are the concepts that will be most useful to you. So before we go in detail of the OOPs, let's try to understand why OOP is the most popular choice.

Basically Object-Oriented Programming is actually inspired by the real life problems that you're trying to solve. The intent behind OOP is whatever your problem is, your code should be looks similar to the problem that you are trying to solve. When you are solving a problem then you would find that your code also revolves around **Objects**. An **object** represents an entity in the real world that can be distinctly identified. For example, a student, a
desk, a circle, and button can all be viewed as objects. An object has a unique
identity, state, and behavior. So In OOP, what we do is, we identify which are objects to which our problem will revolves around and then we try writing code assimilating the problem that we're trying to solve.

Let's understand this by an example.
<b>Suppose you have given a project from college which is college management system, now In this project, what all do you think will be key entities around which this system will revolve.
I think the key entities will be teachers, students, departments, batches, courses, etc will be objects for us to work with. Now we have Objects, then obiviously they'll have proeperties associated with themselves.</b>

Now as you move forward you'll realise that OOP is revolving around two major terms which is basically <b>Objects</b> and <b>Classes</b>. So what exactly is an object, let's we have some students S1, S2, S3, S4, so each student is our object, now each student will have certain set properties associated and functionality with them such as name, uid, phone number, address, email etc. and functionality let's say isEligibleForScholarhip, getBatch, getDepartment, etc.
Now S1, S2, S3, S4 all are have these properties, so when you're creating an object you would not want to write that list of properties everytime, instead you would want that I just create an object and I can expect that object will have all the set of properties and functionality, So this is where <b>Classes</b> come in.

**Class** is basically a template of properties of an object. So, if you have a student S1, S2, S3, S4, then you can create a class called Student and then create an object of that class called S1, S2, S3, S4. Now, S1, S2, S3, S4 will have all the properties and functionality of the Student class.

<b>
Now a class will only indicate the list of properties that a student should have not values. Actual values of these properties will be the once that you will specify once you create an object of that class. For example, S1 and S2 will both have a property name, but their values(names may be different) will be different. So this is the difference b/w classes and objects.
Objects are actually is an instance of a class
</b>
Now I hope you've got the idea of how OOP works, so let's move further.
