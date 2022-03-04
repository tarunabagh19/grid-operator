import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data =
{
  "startTime": "2025-03-30T12:00:00Z",
  "settlementPeriod": 25,
  "data": [
    {
      "fuelType": "BIOMASS",
      "generation": 338
    },
    {
      "fuelType": "CCGT",
      "generation": 1959
    },
    {
      "fuelType": "COAL",
      "generation": 0
    },
    {
      "fuelType": "INTELEC",
      "generation": 419
    },
    {
      "fuelType": "INTEW",
      "generation": -527
    },
    {
      "fuelType": "INTFR",
      "generation": -123
    },
    {
      "fuelType": "INTGRNL",
      "generation": -514
    },
    {
      "fuelType": "INTIFA2",
      "generation": 119
    },
    {
      "fuelType": "INTIRL",
      "generation": -451
    },
    {
      "fuelType": "INTNED",
      "generation": 830
    },
          {
      "fuelType": "INTNEM",
      "generation": 921
    }, 
    {
      "fuelType": "INTNSL",
      "generation": -505
    },
    {
      "fuelType": "INTVKL",
      "generation": -655
    },
    {
      "fuelType": "NPSHYD",
      "generation": 315
    },
    {
      "fuelType": "NUCLEAR",
      "generation": 3756
    },
    {
      "fuelType": "OCGT",
      "generation": 1
    },
    {
      "fuelType": "OIL",
      "generation": 0
    },
    {
      "fuelType": "OTHER",
      "generation": 404
    },
    {
      "fuelType": "PS",
      "generation": -1315
    },
    {
      "fuelType": "WIND",
      "generation": 10993
    }
  ]
}


const getMessage = (value) => {
  if (value <= 1) return "The grid is very green! Now’s a great time to use energy.";
  if (value >= 300) return "The grid is moderately green. Try to reduce usage if you can.";
  return "The grid is not very green right now. Consider waiting to use appliances.";
};

const GreenGridStatus = () => {
  const current = data.data[data.data.length - 1];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Green Grid Status</h2>

      <p className="mb-2 text-lg">
        Current Green Energy Usage: <strong>{current['generation']}</strong>
      </p>
      <p className="mb-4 text-sm text-gray-600">{getMessage(current['generation'])}</p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data.data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="fuelType" />
          <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}`} />
          <Tooltip formatter={(v) => `${v}`} />
          <Line type="monotone" dataKey="generation" stroke="#34d399" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GreenGridStatus;
