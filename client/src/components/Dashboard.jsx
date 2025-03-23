import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import KpiCards from './KpiCards';
import VisitorInsights from './charts/VisitorInsights';
import TotalRevenue from './charts/TotalRevenue';
import CustomerSatisfaction from './charts/CustomerSatisfaction';
import TargetVsReality from './charts/TargetVsReality';
import TopProducts from './charts/TopProducts';
import SalesMap from './charts/SalesMap';
import VolumeVsService from './charts/VolumeVsService';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#F3FFF8]">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="space-y-6">
                {/* Today's Sales Section */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">Today's Sales</h2>
                    <p className="text-sm text-gray-500">Sales Summary</p>
                  </div>
                  <button className="flex items-center space-x-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span>Export</span>
                  </button>
                </div>

                {/* KPI Cards */}
                <KpiCards />
                
                {/* Charts Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Total Revenue Chart */}
                  <div className="bg-white rounded-lg shadow p-4 col-span-1 lg:col-span-1">
                    <h3 className="text-base font-medium text-gray-900 mb-4">Total Revenue</h3>
                    <TotalRevenue />
                  </div>
                  
                  {/* Customer Satisfaction Chart */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-base font-medium text-gray-900 mb-4">Customer Satisfaction</h3>
                    <CustomerSatisfaction />
                  </div>
                  
                  {/* Target vs Reality Chart */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-base font-medium text-gray-900 mb-4">Target vs Reality</h3>
                    <TargetVsReality />
                  </div>
                </div>
                
                {/* Visitor Insights Chart */}
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-medium text-gray-900">Visitor Insights</h3>
                  </div>
                  <VisitorInsights />
                </div>
                
                {/* Charts Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Top Products Table */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-base font-medium text-gray-900 mb-4">Top Products</h3>
                    <TopProducts />
                  </div>
                  
                  {/* Sales Mapping by Country */}
                  <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-base font-medium text-gray-900 mb-4">Sales Mapping by Country</h3>
                    <SalesMap />
                  </div>
                </div>
                
                {/* Volume vs Service Level Chart */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="text-base font-medium text-gray-900 mb-4">Volume vs Service Level</h3>
                  <VolumeVsService />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
