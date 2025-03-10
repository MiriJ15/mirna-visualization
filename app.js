import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const BracketDistributionChart = () => {
  const [activeView, setActiveView] = useState('histogram');
  
  // Histogram data for max consecutive brackets
  const histogramData = [
    {"binStart": 5, "binEnd": 10, "count": 4993, "percentage": 10.82},
    {"binStart": 10, "binEnd": 15, "count": 21297, "percentage": 46.14},
    {"binStart": 15, "binEnd": 20, "count": 6337, "percentage": 13.73},
    {"binStart": 20, "binEnd": 25, "count": 5157, "percentage": 11.17},
    {"binStart": 25, "binEnd": 30, "count": 3027, "percentage": 6.56},
    {"binStart": 30, "binEnd": 35, "count": 1793, "percentage": 3.88},
    {"binStart": 35, "binEnd": 40, "count": 1094, "percentage": 2.37},
    {"binStart": 40, "binEnd": 45, "count": 770, "percentage": 1.67},
    {"binStart": 45, "binEnd": 50, "count": 356, "percentage": 0.77},
    {"binStart": 50, "binEnd": 55, "count": 479, "percentage": 1.04},
    {"binStart": 55, "binEnd": 60, "count": 430, "percentage": 0.93},
    {"binStart": 60, "binEnd": 65, "count": 299, "percentage": 0.65},
    {"binStart": 65, "binEnd": 70, "count": 62, "percentage": 0.13},
    {"binStart": 70, "binEnd": 75, "count": 23, "percentage": 0.05},
    {"binStart": 75, "binEnd": 80, "count": 11, "percentage": 0.02},
    {"binStart": 80, "binEnd": 85, "count": 11, "percentage": 0.02},
    {"binStart": 85, "binEnd": 90, "count": 5, "percentage": 0.01},
    {"binStart": 90, "binEnd": 95, "count": 4, "percentage": 0.01},
    {"binStart": 95, "binEnd": 100, "count": 2, "percentage": 0.00},
    {"binStart": 100, "binEnd": 105, "count": 2, "percentage": 0.00},
    {"binStart": 105, "binEnd": 110, "count": 1, "percentage": 0.00}
  ];
  
  // Format the bin labels for display
  const formattedHistogramData = histogramData.map(item => ({
    ...item,
    binLabel: `${item.binStart}-${item.binEnd}`
  }));
  
  // Data for all miRNA types
  const mirnaTypeData = [
    { name: "mir277", count: 1383, average: 24.24, max: 54 },
    { name: "mir314", count: 278, average: 23.51, max: 30 },
    { name: "mir2", count: 18577, average: 22.79, max: 105 },
    { name: "mir315", count: 783, average: 20.05, max: 35 },
    { name: "mir190", count: 1432, average: 18.7, max: 53 },
    { name: "mir216", count: 2690, average: 18.23, max: 55 },
    { name: "mir10", count: 8412, average: 17.64, max: 87 },
    { name: "mir92", count: 4542, average: 17.62, max: 41 },
    { name: "mir29", count: 2923, average: 17.56, max: 49 },
    { name: "mir96", count: 3431, average: 17.01, max: 39 },
    { name: "mir2001", count: 854, average: 16.91, max: 40 },
    { name: "bantam", count: 1434, average: 16.41, max: 59 },
    { name: "mir1", count: 1535, average: 16.29, max: 36 },
    { name: "mir193", count: 1799, average: 16.05, max: 59 },
    { name: "mir33", count: 1232, average: 15.95, max: 53 },
    { name: "mir305", count: 1414, average: 15.73, max: 35 },
    { name: "mir279", count: 5687, average: 15.69, max: 33 },
    { name: "mir137", count: 1421, average: 15.19, max: 41 },
    { name: "mir7", count: 1449, average: 15.07, max: 33 },
    { name: "mir76", count: 1353, average: 14.88, max: 28 },
    { name: "mir67", count: 1396, average: 14.29, max: 27 },
    { name: "mir306", count: 672, average: 14.25, max: 28 },
    { name: "mir133", count: 1483, average: 14.25, max: 32 },
    { name: "mir124", count: 1651, average: 14.12, max: 32 },
    { name: "mir31", count: 1929, average: 14.02, max: 23 },
    { name: "mir184", count: 1502, average: 13.94, max: 35 },
    { name: "mir27", count: 2074, average: 13.81, max: 30 },
    { name: "mir317", count: 1290, average: 13.46, max: 27 },
    { name: "let7", count: 1473, average: 13.44, max: 28 },
    { name: "mir3", count: 10990, average: 13.3, max: 56 },
    { name: "mir252", count: 1933, average: 13.09, max: 29 },
    { name: "mir12", count: 1247, average: 13.06, max: 29 },
    { name: "mir989", count: 1211, average: 12.96, max: 27 },
    { name: "mir219", count: 877, average: 12.85, max: 27 },
    { name: "mir375", count: 877, average: 12.57, max: 27 },
    { name: "mir281", count: 1938, average: 12.37, max: 28 },
    { name: "mir34", count: 1376, average: 12.31, max: 25 },
    { name: "mir927", count: 1668, average: 12.24, max: 24 },
    { name: "mir750", count: 143, average: 12.05, max: 16 },
    { name: "mir87", count: 1209, average: 11.98, max: 25 },
    { name: "mir9", count: 5529, average: 11.26, max: 70 },
    { name: "mir8", count: 1376, average: 10.66, max: 25 },
    { name: "mir282", count: 1280, average: 10.56, max: 49 },
    { name: "mir278", count: 1387, average: 10.45, max: 43 },
    { name: "mir14", count: 648, average: 10.12, max: 26 },
    { name: "mir956", count: 71, average: 9.89, max: 16 }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Distribution of Max Consecutive Brackets</h2>
        <p className="text-gray-600">
          Analysis of maximum consecutive brackets in miRNA structures based on data from {mirnaTypeData.reduce((sum, type) => sum + type.count, 0)} samples across multiple miRNA types
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${activeView === 'histogram' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('histogram')}
          >
            Histogram
          </button>
          <button
            className={`px-4 py-2 rounded ${activeView === 'miRNA' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('miRNA')}
          >
            miRNA Type Comparison
          </button>
        </div>
      </div>
      
      {activeView === 'histogram' && (
        <div>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              This histogram shows the distribution of maximum consecutive brackets across all samples. 
              The data indicates that most miRNAs have 10-15 consecutive brackets in their structure.
            </p>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={formattedHistogramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="binLabel" 
                  label={{ value: 'Max Consecutive Brackets', position: 'insideBottom', offset: -5 }}
                  tick={{ fontSize: 10 }}
                  interval={0}
                />
                <YAxis 
                  label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value, name) => [value, 'Count']}
                  labelFormatter={(label) => `Max Brackets: ${label}`}
                />
                <Bar 
                  dataKey="count" 
                  fill="#8884d8" 
                  name="Count" 
                  label={{
                    position: 'top',
                    formatter: (value) => value > 1000 ? `${(value/1000).toFixed(1)}k` : value
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li><span className="font-medium">Most common range:</span> 10-15 consecutive brackets ({formattedHistogramData[1].percentage}% of samples)</li>
              <li><span className="font-medium">Range:</span> 5 to 105+ consecutive brackets</li>
              <li><span className="font-medium">Rare occurrences:</span> Only 0.1% of samples have more than 70 consecutive brackets</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeView === 'miRNA' && (
        <div>
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              This shows how the maximum consecutive brackets vary across different miRNA types. 
              mir2 has the highest average number of consecutive brackets.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Top 10 miRNAs by Average Max Consecutive Brackets</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mirnaTypeData.slice(0, 10)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Average', angle: -90, position: 'insideLeft' }} domain={[0, 30]} />
                  <Tooltip formatter={(value) => value.toFixed(2)} />
                  <Bar dataKey="average" fill="#82ca9d" name="Average Max Brackets">
                    <LabelList dataKey="average" position="top" formatter={(value) => value.toFixed(1)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Bottom 10 miRNAs by Average Max Consecutive Brackets</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mirnaTypeData.slice(-10).reverse()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Average', angle: -90, position: 'insideLeft' }} domain={[0, 15]} />
                  <Tooltip formatter={(value) => value.toFixed(2)} />
                  <Bar dataKey="average" fill="#8884d8" name="Average Max Brackets">
                    <LabelList dataKey="average" position="top" formatter={(value) => value.toFixed(1)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Top 10 miRNAs by Maximum Consecutive Brackets</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[...mirnaTypeData].sort((a, b) => b.max - a.max).slice(0, 10)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: 'Maximum', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="max" fill="#ffc658" name="Maximum Value">
                    <LabelList dataKey="max" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-2">Overall Statistics</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Total miRNA families:</span> {mirnaTypeData.length}</li>
                  <li><span className="font-medium">Total samples analyzed:</span> {mirnaTypeData.reduce((sum, type) => sum + type.count, 0).toLocaleString()}</li>
                  <li><span className="font-medium">Overall weighted average:</span> 15.65 consecutive brackets</li>
                  <li><span className="font-medium">Global maximum:</span> 105 consecutive brackets (mir2)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-2">Notable Findings</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Highest average:</span> mir277 (24.24)</li>
                  <li><span className="font-medium">Lowest average:</span> mir956 (9.89)</li>
                  <li><span className="font-medium">Most samples:</span> mir2 (18,577 entries)</li>
                  <li><span className="font-medium">Fewest samples:</span> mir750 (143 entries)</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-2">
              <p className="text-sm text-gray-600">Showing all {mirnaTypeData.length} miRNA families, sorted by average max consecutive brackets (highest to lowest)</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Rank</th>
                    <th className="py-2 px-4 border-b">miRNA Type</th>
                    <th className="py-2 px-4 border-b">Sample Count</th>
                    <th className="py-2 px-4 border-b">Average Max Brackets</th>
                    <th className="py-2 px-4 border-b">Maximum Value</th>
                  </tr>
                </thead>
                <tbody>
                  {mirnaTypeData.map((type, index) => (
                    <tr key={type.name} className={index < 5 ? "bg-green-50" : (index >= mirnaTypeData.length - 5 ? "bg-red-50" : "")}>
                      <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                      <td className="py-2 px-4 border-b font-medium">{type.name}</td>
                      <td className="py-2 px-4 border-b text-right">{type.count.toLocaleString()}</td>
                      <td className="py-2 px-4 border-b text-right">{type.average.toFixed(2)}</td>
                      <td className="py-2 px-4 border-b text-right">{type.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BracketDistributionChart;
