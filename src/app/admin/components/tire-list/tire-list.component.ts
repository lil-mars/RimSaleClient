import {Component, OnInit} from '@angular/core';
import {RimService} from '../../../core/services/rim/rim.service';
import {Rim} from '../../../core/models/rim.model';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css'],
  providers: [RimService]
})
export class TireListComponent implements OnInit {
  rims: Rim[];
  displayedColumns: string[] = ['id', 'brand', 'hoop', 'amountAvailable', 'prize', 'actions'];
  dataSource: any[];

  constructor(private rimService: RimService) {
    this.getAllRims();
    this.dataSource = this.rims;
  }

  getAllRims() {
    this.rimService.getAllRims().subscribe(data => {
      this.rims = data;
      this.dataSource = data;
      console.log(data);
    });
  }

  onDelete(id) {
    this.rimService.deleteRim(id).subscribe(data => {
      console.log(data);
      this.getAllRims();
    });
  }

  ngOnInit() {
    this.getAllRims();
  }

}
