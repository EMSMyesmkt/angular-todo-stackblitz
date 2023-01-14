import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() resultado = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  adicionar(input: any) {
    this.resultado.emit({
      id: new Date().getTime(),
      nome: input.value,
      estado: false,
    });
    input.value = '';
  }
}
