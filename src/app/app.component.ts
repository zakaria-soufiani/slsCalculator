import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service'
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent {
  title = 'app works!';
  public new_memory_allocation;
  public new_execution_times;
  public new_execution_length;
  public new_free_check;
  public results = [];

  onSubmit(f: NgForm) {
  }

  constructor(private CalculatorService: CalculatorService) {
  }

  calculate(memory_allocation, execution_times, execution_length, free_tier_check) {
    let mem_alloc = {memory_allocation: memory_allocation};
    let exec_times = {execution_times: execution_times};
    let exec_length = {execution_length: execution_length};
    let check = {free_tier_check: free_tier_check};

    this.CalculatorService.calculate(mem_alloc, exec_times, exec_length, check).subscribe(data => this.results = data);
    console.log(this.results);
  }
}



