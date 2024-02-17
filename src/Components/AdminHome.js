import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';



const data = [
  {
    name: 'January',
    Customer: 4000,
    Supplier: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    Customer: 3000,
    Supplier: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    Customer: 2000,
    Supplier: 8,
    amt: 2290,
  },
  {
    name: 'April',
    Customer: 2780,
    Supplier: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Customer: 18,
    Supplier: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    Customer: 2390,
    Supplier: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
  {
    name: 'Octomber',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    Customer: 3490,
    Supplier: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

class AdminHome extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-min-height-3ilfq';

  render() {
    return (
      <div classname="AdminHome" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' , color:'red' }}>
        <h1> Registration Level For Customer & Supplier </h1>
      
      <ResponsiveContainer width={800} height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Customer" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="Supplier" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
export default AdminHome;

