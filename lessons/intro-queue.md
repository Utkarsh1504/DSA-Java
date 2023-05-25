---
path: "/intro-queue"
title: "Intro to Queue"
order: "8B"
section: "Queue"
description: "Learn about the Queue data structure and its operations"
icon: "redo"
---

Queue is a fundamental data structure that follows the First-In-First-Out (FIFO) principle. In a queue, elements are inserted at one end (rear) and removed from the other end (front). This makes it an ideal choice for scenarios where the order of processing or accessing elements is crucial.

> In simple terms, a queue is like a line of people waiting for a service, where the person who arrives first gets served first.

This lesson provides an introduction to the concept of queues and explores the various operations associated with it. Let's dive in!

### Overview

A queue has two main operations:

1. **Enqueue**: Adds an element to the rear of the queue.
2. **Dequeue**: Removes the element from the front of the queue.

Additional operations that can be performed on a queue include:

- **Peek**: Retrieves the element at the front of the queue without removing it.
- **IsEmpty**: Checks if the queue is empty.
- **Size**: Returns the number of elements in the queue.

### Implementing a Queue

A queue can be implemented using various data structures, such as arrays or linked lists. In this lesson, we'll focus on a basic implementation using a linked list.

Here's an example of a simple Queue class in Java:

```java
import java.util.LinkedList;

public class Queue<T> {
    private LinkedList<T> queue;

    public Queue() {
        queue = new LinkedList<>();
    }

    public void enqueue(T element) {
        queue.addLast(element);
    }

    public T dequeue() {
        return queue.pollFirst();
    }

    public T peek() {
        return queue.peekFirst();
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }

    public int size() {
        return queue.size();
    }
}
```

### Example Usage

Let's see an example of using the Queue class:

```java
public class QueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new Queue<>();

        queue.enqueue("Alice");
        queue.enqueue("Bob");
        queue.enqueue("Charlie");

        System.out.println("Queue size: " + queue.size()); // Output: Queue size: 3
        System.out.println("Front element: " + queue.peek()); // Output: Front element: Alice

        String firstPerson = queue.dequeue();
        System.out.println("Dequeued element: " + firstPerson); // Output: Dequeued element: Alice

        System.out.println("Is queue empty? " + queue.isEmpty()); // Output: Is queue empty? false
    }
}
```

### Conclusion

In this introductory lesson on queues, we learned about their properties, operations, and a basic implementation using a linked list. Queues are widely used in various applications, including task scheduling, breadth-first search, and more. Having a good understanding of queues will be valuable in solving many real-world problems efficiently.

Feel free to explore more advanced concepts related to queues, such as circular queues or priority queues, to enhance your knowledge and problem-solving capabilities. Happy coding!