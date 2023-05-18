import { Component, OnInit,AfterViewInit, ViewChild     } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CustomerserviceService } from '../customerservice.service';
import { Customer } from './customer';
import { Chart } from 'chart.js';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit{

    @ViewChild('chart') chart!: Chart 

    customers!: Customer[]

  barChartData: any;

  visible!:boolean
  doughnutChartData: any;

  msgs!: any[];
  items!: any[];
  displayPosition: boolean | undefined;

  position: string | undefined;
  

  constructor(private primengConfig: PrimeNGConfig, private customerservice:CustomerserviceService){}

  ngOnInit(): void {
    this.barchart();
    this.droughchart();
    this.megamenu();
    this.customerservice.getCustomersLarge().then((customers) => (this.customers = customers));
     
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.chart.resize(); // Call the chart's resize() method after a short delay
    }, 0);
  }
  showDialog(){
    this.visible=true
  }
barchart(){
  this.barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Rejected',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Approved',
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
}

droughchart(){
  this.doughnutChartData = {
    labels: ['Active', 'Inactive', 'Deleted'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
  };
}

megamenu(){
  this.items = [
    {
        label: 'Bank',
        icon: 'pi pi-home',
        items: [
            [
                {
                    label: 'Branches 1',
                    items: [{ label: 'Hadhapur 1.1' }, { label: 'Madhapur 1.2' }]
                },
              
            ],
            [
                {
                    label: 'Branch 2',
                    items: [{ label: 'Hitech city 3.1' }, { label: 'Hitech city 3.2' }]
                },
               
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Credit Card',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
];
}

showPositionDialog(position: string) {
  this.position = position;
  this.displayPosition = true;
}

}
