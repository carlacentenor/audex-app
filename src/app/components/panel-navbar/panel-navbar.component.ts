import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-navbar',
  templateUrl: './panel-navbar.component.html',
  styleUrls: ['./panel-navbar.component.scss']
})
export class PanelNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuItems = [
    {
      label:'Maestros',
      icon: 'pi pi-pw pi-table',
      items: [{
              label: 'Dimension', 
              styleClass:'conector',
              routerLink: ['/dimension']
            
          },
          {label: 'Marca'},
        
          {label: 'Quit'}
      ]

    },
    {
      label:'Cargas',
      
    },
    {
      label:'Exportaciones',
      
    },
    {
      label:'Configuración',
      
    },
    {
      label:'Bandeja de Salida',
      
    }
  ];


}
