import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
})
export class ChartCardComponent implements AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() type: 'pie' | 'line' = 'pie';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];

  chartId = `chart-${Math.random().toString(36).substring(2, 9)}`;
  chartInstance: Chart | null = null;

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnDestroy(): void {
    this.chartInstance?.destroy();
  }

  renderChart() {
    const isLine = this.type === 'line';

    const canvas = document.getElementById(this.chartId) as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    // 🎨 Gradient for LINE ONLY
    let gradient: CanvasGradient | undefined;

    if (isLine && ctx) {
      gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(37, 99, 235, 0.35)');
      gradient.addColorStop(1, 'rgba(37, 99, 235, 0.02)');
    }

    this.chartInstance = new Chart(this.chartId, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.title,
            data: this.data,

            // 👉 PIE stays untouched, LINE improved only
            backgroundColor: isLine
              ? gradient
              : [
                  '#2563eb',
                  '#f59e0b',
                  '#3b82f6',
                  '#fb923c',
                  '#1d4ed8',
                  '#fdba74',
                ],

            borderColor: isLine ? '#2563eb' : '#ffffff',
            borderWidth: isLine ? 3 : 2,

            // 🔥 LINE IMPROVEMENTS
            fill: isLine,
            tension: isLine ? 0.45 : 0.4,
            cubicInterpolationMode: isLine ? 'monotone' : undefined,

            pointRadius: isLine ? 4 : 0,
            pointHoverRadius: isLine ? 7 : 0,

            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#2563eb',
            pointBorderWidth: 2,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        interaction: {
          mode: 'index',
          intersect: false,
        },

        animation: {
          duration: 1400,
          easing: 'easeOutQuart',
        },

        plugins: {
          legend: {
            display: this.type === 'pie',
          },

          tooltip: {
            backgroundColor: '#0f172a',
            titleColor: '#ffffff',
            bodyColor: '#cbd5e1',
            padding: 12,
            cornerRadius: 10,
            displayColors: false,
          },
        },

        // 👉 ONLY LINE CHART SCALE UPGRADE
        scales: isLine
          ? {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: '#64748b',
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(148, 163, 184, 0.2)',
                },
                ticks: {
                  color: '#64748b',
                },
              },
            }
          : {},
      },
    });
  }
}
