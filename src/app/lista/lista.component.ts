import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListComponent implements OnInit {
  @Input() tasks: any[] = [];
  @Output() remover = new EventEmitter<number>();
  @Output() estado = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
