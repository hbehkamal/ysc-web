import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this.creatFrom();
  }

  handleSubmit() {
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe(
      res => {
        console.log('SUCCESS', res);
      },
      err => {
        console.log('ERROR', err);
      }
    );
  }

  creatFrom() {
    this.form = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
    });
  }
}
