import { animate, style, transition, group, trigger } from '@angular/animations';

export const fadeInVertical = trigger('visibilityChanged', [
  transition(':enter', [
    style({ transform: 'translateY(-40px)' }),
    group([
      animate(150, style({ transform: 'translateY(0)' }))
    ])
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    group([
      animate(150, style({ transform: 'translateY(-40px)' })),
    ])
  ]),
]);
