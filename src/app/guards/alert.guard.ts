import { CanDeactivateFn } from '@angular/router';
import { CreateGroupComponent } from '../components/exos/exo3/create-group/create-group.component';
import { Observable, Subject } from 'rxjs';
export const alertGuard: CanDeactivateFn<CreateGroupComponent> = (component, currentRoute, currentState, nextState) => {
  console.log('deactivate');
  let subject = new Subject<boolean>();
  component.openDialog();
  subject = component.subject;
  return subject.asObservable();
};
