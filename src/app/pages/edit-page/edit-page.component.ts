import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit, OnDestroy {

  id: number;
  activatedRouteSubscription: Subscription;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    })
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required, Validators.min(0.01)])],
    })
  }

  ngOnDestroy(): void {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  save(): void {
    if (this.form.valid) {

    } else {
      const formKeyList: Array<string> = Object.keys(this.form.controls);
      for (const key of formKeyList) {
        this.form.controls[key].markAsTouched();
      }
    }
  }

}
