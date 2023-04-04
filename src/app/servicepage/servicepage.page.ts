import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';
import { Chart, registerables} from 'chart.js';
@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  lineChart: any;
  xyInput = new Map();
  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];
  
  constructor( private tabService:TabService, private seriesService:SeriesService, private recursionService:RecursionService) 
  { 
    Chart.register(...registerables);
  }
  input()
  {
    this.xx = new Array();
    this.yySer = new Array();
    this.yyRec = new Array();
    this.yyTab = new Array();
    this.xyTab.forEach((value,key,map)=>
    {
    let s ='';
    let y:number =0;
    y=value;
    let xyValue = this.xySeries.get(key); 
    if (xyValue) { 
      this.xx.push(xyValue.toFixed(4));
    }
    this.yyTab.push(this.xyTab.get(key).toFixed(4));
    s=y.toFixed(4)+" ";
    y = this.xySeries.get(key);
    this.yySer.push(this.xySeries.get(key).toFixed(4));
    s=s+y.toFixed(4);
    y = this.xyRecursion.get(key);
    this.yyRec.push(this.xyRecursion.get(key).toFixed(4));
    s=s+" "+y.toFixed(4);
    let x =key;
    this.xyInput.set(x.toFixed(4),s);
    })
  }
  ras(xn:any, xk:any, h:any){
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(xn1,xk1,h1);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(xn1,xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(xn1,xk1,h1);
    this.input();
    this.lineChartMake();

  }
  lineChartMake() {
    if(this.lineChart instanceof Chart){
      this.lineChart.destroy();
    }
    
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: 'red',
            borderWidth: 1,
            borderDashOffset:0.0,
            pointRadius: 1,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: 'green',
            borderWidth: 1,
            borderDashOffset:0.0,
            pointRadius: 1,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: 'blue',
            borderWidth: 1,
            borderDashOffset:0.0,
            pointRadius: 1,
            spanGaps: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X'
            },
            ticks: {
              stepSize: 0.001
            }
          },
          y: {
            title: {
              display: true,
              text: 'Y'
            },
            ticks: {
              stepSize: 0.001
            }
          }
        }
      }
    });
  }
  ngOnInit() {
  }
}
