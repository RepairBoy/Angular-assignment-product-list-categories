import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxComponent } from "../../ui/checkbox/checkbox.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoArray: string[] = [];
  todoForm!:FormGroup;
  @ViewChild('inputElement', { static: true }) inputElement!: ElementRef; //for focusing on input
  ngOnInit(){
    this.todoForm = new FormGroup({
      todoItem:new FormControl('',[Validators.required]),
    })
  }

  onSubmit(){
    
    this.todoArray.push(this.todoForm.value.todoItem)
    console.log(this.todoArray);
    this.todoForm.get('todoItem')?.reset();
    this.inputElement.nativeElement.focus(); // Focus the input element
  }

  deleteTodo(index:number){
    
    this.todoArray.splice(index, 1);
  }
}
