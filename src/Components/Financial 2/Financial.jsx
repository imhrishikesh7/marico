import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Financial.css';
import Leaf from '../Leaf/Leaf';

// Register necessary components and plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const dataSets = [
  { label: 'Consolidated Turnover(₹ in Crores)', data: [7315, 8048, 9512, 9762, 9653], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Share of International FMCG Business(in %)', data: [23, 23, 23, 25, 26], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'EBITDA Margins(in %)', data: [20.1, 19.8, 17.7, 18.5,21.0], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Recurring Consolidated Net Profit After Tax(₹ Crores)', data: [1043, 1162, 1225, 1280, 1470], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Earnings per share(in ₹/share)', data: [8.1, 9.0, 9.5, 10.1, 11.5], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Debt / Equity(X)', data: [0.1, 0.1, 0.1, 0.1,0.1], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Dividend declared(as % of Face Value)', data: [675, 750, 925, 450, 950], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Cash profits(₹ crores)', data: [1167, 1327, 1397, 1521, 1742], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Return on Capital Employed(in %)', data: [34.8, 37.1, 44.6, 44.0, 44.7], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Return on Net Worth(in %)', data: [34.8, 37.1, 37.2, 36.4,38.8], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Loan on Books(₹ crores)', data: [335, 348, 345,475, 383], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'Surplus on Books(₹ crores)', data: [607, 1355, 956, 1301, 1034], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
  { label: 'EVA(₹ crores)', data: [704, 845, 894, 910, 1092], years: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'] },
];

const Financial = () => {
  const renderCharts = () => {
    return dataSets.map((dataset, index) => {
      const data = {
        labels: dataset.years,
        datasets: [
          {
            label: dataset.label,
            backgroundColor: dataset.data.map((_, i) => (i === dataset.data.length - 1 ? 'rgba(53,130,161,1)' : 'rgba(234,243,218,1)')),
            borderColor: 'rgba(234,243,218,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(234,243,218,1)',
            hoverBorderColor: 'rgba(234,243,218,1)',
            borderRadius: 10, // Add rounded corners to bars
            data: dataset.data,
            barThickness: 18, // Adjust bar thickness for spacing
          },
        ],
      };

      const options = {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.raw;
              },
            },
          },
          datalabels: {
            anchor: 'end',
            align: 'end',
            formatter: (value) => value,
            color: 'black',
            font: {
              weight: 'bold',
            },
            // Adding a small circle on top of each bar
            listeners: {
              afterDraw: (chart) => {
                chart.ctx.save();
                chart.data.datasets.forEach((dataset) => {
                  for (let i = 0; i < dataset.data.length; i++) {
                    const meta = chart.getDatasetMeta(0);
                    const posX = meta.data[i].x;
                    const posY = meta.data[i].y - 5; // Position above the bar
                    chart.ctx.beginPath();
                    chart.ctx.arc(posX, posY, 5, 0, Math.PI * 2, false);
                    chart.ctx.fillStyle = '#0098b6';
                    chart.ctx.fill();
                    chart.ctx.closePath();
                  }
                });
                chart.ctx.restore();
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the y-axis labels
            },
            grid: {
              display: false, // Remove y-axis grid lines
            },
          },
          x: {
            grid: {
              display: false, // Remove x-axis grid lines
            },
          },
        },
        layout: {
          padding: {
            top: 40,
            bottom: 35,
          },
        },
        maintainAspectRatio: false,
      };

      return (
        <div key={index} style={{ padding: '8px', height: '380px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>{dataset.label}</h4>
          <div style={{ flexGrow: 1, width: '80%' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className='marginal financial-component w-100'>
      <h2 className='text-center text-4xl font-bold text-green py-8'>KEY PERFORMANCE INDICATORS

      
      </h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        style={{ width: '70%' }} // Adjust the width as needed
      >
        
        {renderCharts()}
      </Carousel>
    </div>
  );
};

export default Financial;
