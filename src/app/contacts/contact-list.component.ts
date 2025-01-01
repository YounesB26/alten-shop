import { Component, OnInit } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MessageModule } from "primeng/message";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"],
  standalone: true,
  imports: [FormsModule, MessageModule, ButtonModule],
})
export class ContactForm implements OnInit {
  ngOnInit(): void {}

  onFormSubmit(contactForm: NgForm): void {
    console.log(contactForm.valid);
  }
}
