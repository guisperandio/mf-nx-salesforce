import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

type ButtonType =
  | 'neutral'
  | 'brand'
  | 'outline-brand'
  | 'destructive'
  | 'text-destructive'
  | 'success';

@Component({
  selector: 'sf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType;

  buttonClass = ['slds-button'];

  ngOnInit(): void {
    if (this.type) {
      this.buttonClass.push(`slds-button_${this.type}`);
    }
  }
}
