package com.example.todo.Todo;

import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend
@RequiredArgsConstructor
public class TodoController {

    private final TodoRepository repository;

    @GetMapping
    public List<Todo> getTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return repository.save(todo);
    }

    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        Todo existing = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Cannot find todo"));
        existing.setTitle(todo.getTitle());
        existing.setCompleted(todo.isCompleted());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
