import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [ConfirmationService],
})
export class ModalComponent {
  constructor(private confirmationService: ConfirmationService) {}
  @Input('show') display!: boolean;
  @Output('selection') selection = new EventEmitter();
  ngOnInit(): void {}
  selected(value: string) {
    this.selection.emit(value);
    this.display = false;
  }
  dialogHidden($event: any) {
    console.log($event);
    this.selection.emit('close');
  }
}
