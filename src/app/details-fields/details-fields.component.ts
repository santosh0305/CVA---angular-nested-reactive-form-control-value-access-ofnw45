import {Component, Input, Output, EventEmitter, OnInit, OnDestroy, forwardRef} from '@angular/core';
import {AbstractControl, FormGroup, FormArray, FormControl, Validator, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-details-fields',
  templateUrl: './details-fields.component.html',
  styleUrls: ['./details-fields.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DetailsFields)
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: forwardRef(() => DetailsFields),
    //   multi: true
    // }
  ]
})

export class DetailsFields implements ControlValueAccessor {

 // Initialize nested form components.
    formGroup: FormGroup = new FormGroup({
        make: new FormControl(),
        year: new FormControl(),
        color: new FormControl(),
    });

    onTouched: () => void = () => {};

    disableYear() {
      (<FormGroup>this.formGroup).get('year').disable();
    }

    enableYear() {
      (<FormGroup>this.formGroup).get('year').enable();
    }
    
    writeValue(v: any) {
        this.formGroup.setValue(v, {emitEvent: true});
    }

    registerOnChange(fn: (v: any) => void) {
        this.formGroup.valueChanges.subscribe((val) => {
          console.log(val);
          fn(val);
        });
    }

    setDisabledState(disabled: boolean) {
        disabled ? this.formGroup.disable() : this.formGroup.enable();
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    ngOnDestroy() {}
}