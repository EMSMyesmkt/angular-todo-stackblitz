import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: any[] = [
    { id: 1, nome: 'todo 1', estado: false },
    { id: 2, nome: 'todo 2', estado: false },
    { id: 3, nome: 'todo 3', estado: false },
  ];
  tasks2 = null;

  obj1 = null;
  obj2 = null;

  constructor() {
    this.carregar();
  }

  guardar() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  carregar() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) this.tasks = JSON.parse(tasks);
    else this.tasks = [];
  }

  onResult(evento: any) {
    this.tasks.push(evento);
    this.guardar();
  }

  onRemove(id) {
    this.tasks = this.tasks.filter((f) => f.id !== id);
    this.guardar();
  }

  onChangeStatus(id) {
    for (const task of this.tasks) {
      if (id === task.id) task.done = !task.done;
    }
    this.guardar();
  }

  mostrar() {
    console.log('# todo 1');
    this.tasks2 = [...this.tasks.map((o) => ({ ...o }))];
  }
}
