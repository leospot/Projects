import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-diarios-list',
  templateUrl: './diarios-list.component.html',
  styleUrls: ['./diarios-list.component.css']
})
export class DiariosListComponent implements OnInit {

  Diarios: any = [];
  totalizado : number;
  
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadDiarios();
  }

  // Get diarios list
  loadDiarios() {
    return this.restApi.getDiarios().subscribe((data: {}) => {
      this.Diarios = data;    
      this.totalizado = this.getTotales(data);
    });
  }

  // Delete diario
  deleteDiario(id) {
    if (window.confirm('Esta seguro que quiere elimnarlo?')){
      this.restApi.deleteDiario(id).subscribe(data => {
        this.loadDiarios();
      });
    }
  }

  getTotales(data)
  {
      let totales = 0;
      data.forEach(element => {
        totales += element.RE;
      });
      return totales;
  }
}
