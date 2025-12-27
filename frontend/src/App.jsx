import { Shield, AlertTriangle, BarChart3, Cpu, Download, ExternalLink, TrendingUp, Users, Clock, FileText, ChevronRight, CheckCircle, XCircle, AlertCircle, Activity, Zap, Database, Lock, TrendingDown, Target, PieChart, Search, Settings, Bell, Menu, X, Moon, Sun, Filter, Layers, GitBranch, Code, Bug, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RiskCard from './components/RiskCard';
import Gauge from './components/Gauge';
import axios from "axios";


const actionHoverClasses = {
  gray: 'group-hover:bg-gray-100 dark:group-hover:bg-gray-500/20',
  emerald: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20',
  purple: 'group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20',
};

const someData = {
  package_name: 'example-lib',
  risk_score: 75,
  hallucination: 0.2,
  logic_poisoning: 0.1,
  api_burn_cost: 0.05,
  version: '2.4.1',
  last_updated: '2024-01-15',
  downloads: '1.2M/month'
};

const riskData = [65, 72, 68, 75, 70, 78, 82, 80, 76, 74, 72, 70, 68, 65, 63, 60, 58, 55, 52, 50, 48, 45, 42, 40, 38, 35, 33, 30, 28, 25];

const vulnerabilityData = [
  { id: 1, name: 'SQL Injection', severity: 'Critical', type: 'Code Injection', detected: '2 days ago', status: 'Active', cvss: 9.8 },
  { id: 2, name: 'Cross-site Scripting (XSS)', severity: 'High', type: 'Code Injection', detected: '5 days ago', status: 'Active', cvss: 8.2 },
  { id: 3, name: 'Improper Authentication', severity: 'High', type: 'Data Exposure', detected: '1 week ago', status: 'Active', cvss: 7.5 },
  { id: 4, name: 'Insecure Deserialization', severity: 'Medium', type: 'Logic Poisoning', detected: '2 weeks ago', status: 'Patched', cvss: 6.5 },
  { id: 5, name: 'Race Condition', severity: 'Medium', type: 'Logic Poisoning', detected: '3 weeks ago', status: 'Active', cvss: 6.0 },
  { id: 6, name: 'Buffer Overflow', severity: 'Critical', type: 'Code Injection', detected: '1 month ago', status: 'Active', cvss: 9.1 },
  { id: 7, name: 'Sensitive Data Exposure', severity: 'High', type: 'Data Exposure', detected: '1 month ago', status: 'Patched', cvss: 7.8 },
  { id: 8, name: 'AI Hallucination Risk', severity: 'Medium', type: 'AI Hallucination', detected: '2 days ago', status: 'Active', cvss: 6.2 },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const handleScan = (packageName) => {
  console.log("Scanning:", packageName);
};
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-200 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-black text-gray-100' 
        : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      
      {/* Navigation Header */}
      <header className={`sticky top-0 z-50 border-b ${
        darkMode 
          ? 'bg-gray-900 border-gray-800 shadow-lg' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Sentinel Security</h1>
                <p className="text-xs opacity-70 font-medium uppercase tracking-wider">Enterprise Platform</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105">
                <BarChart3 className="w-4 h-4" />
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 dark:after:bg-gray-100 hover:after:w-full after:transition-all">Dashboard</span>
              </a>
              <a href="#" className="font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105">
                <AlertTriangle className="w-4 h-4" />
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 dark:after:bg-gray-100 hover:after:w-full after:transition-all">Threat Intelligence</span>
              </a>
              <a href="#" className="font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105">
                <FileText className="w-4 h-4" />
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 dark:after:bg-gray-100 hover:after:w-full after:transition-all">Reports</span>
              </a>
              <a href="#" className="font-medium text-sm flex items-center gap-2 transition-all duration-200 hover:scale-105">
                <Users className="w-4 h-4" />
                <span className="relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 dark:after:bg-gray-100 hover:after:w-full after:transition-all">Team</span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="hidden md:block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full">v2.4.1</div>
              <button className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white text-sm font-medium rounded-lg hover:from-black hover:to-gray-900 transition-all duration-200 shadow-sm hover:shadow">
                New Security Scan
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-3">
                <a href="#" className="flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2">
                  <BarChart3 className="w-4 h-4" />
                  Dashboard
                </a>
                <a href="#" className="flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2">
                  <AlertTriangle className="w-4 h-4" />
                  Threat Intelligence
                </a>
                <a href="#" className="flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2">
                  <FileText className="w-4 h-4" />
                  Reports
                </a>
                <a href="#" className="flex items-center gap-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2">
                  <Users className="w-4 h-4" />
                  Team
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 tracking-tight">Security Intelligence Dashboard</h2>
              <p className="opacity-70 max-w-2xl">Comprehensive security assessment and threat analysis for third-party packages and repositories</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 lg:mt-0">
              <button className={`px-4 py-2.5 border text-sm font-medium rounded-lg transition-all duration-200 flex items-center shadow-sm ${
                darkMode 
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </button>
              <button className="px-4 py-2.5 bg-gradient-to-r from-gray-900 to-black text-white text-sm font-medium rounded-lg hover:from-black hover:to-gray-900 transition-all duration-200 flex items-center shadow-sm hover:shadow">
                <FileText className="w-4 h-4 mr-2" />
                Generate Full Report
              </button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className={`rounded-xl border p-6 shadow-sm hover:shadow transition-shadow duration-200 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-70 font-medium mb-1 uppercase tracking-wider">Total Scans</p>
                  <p className="text-2xl font-bold mb-2">1,247</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-emerald-500 font-semibold">+12.4%</span>
                <span className="opacity-70 ml-2">vs last month</span>
              </div>
            </div>
            
            <div className={`rounded-xl border p-6 shadow-sm hover:shadow transition-shadow duration-200 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-70 font-medium mb-1 uppercase tracking-wider">Critical Risks</p>
                  <p className="text-2xl font-bold text-red-500 mb-2">18</p>
                </div>
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm">
                <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-red-500 font-semibold">+3 today</span>
                <span className="opacity-70 ml-2">requires attention</span>
              </div>
            </div>
            
            <div className={`rounded-xl border p-6 shadow-sm hover:shadow transition-shadow duration-200 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-70 font-medium mb-1 uppercase tracking-wider">Avg. Risk Score</p>
                  <p className="text-2xl font-bold mb-2">42.3</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm">
                <TrendingDown className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-emerald-500 font-semibold">-8.2%</span>
                <span className="opacity-70 ml-2">risk reduction</span>
              </div>
            </div>
            
            <div className={`rounded-xl border p-6 shadow-sm hover:shadow transition-shadow duration-200 ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-70 font-medium mb-1 uppercase tracking-wider">Avg. Response</p>
                  <p className="text-2xl font-bold mb-2">2.4s</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                <span className="text-emerald-500 font-semibold">Optimal</span>
                <span className="opacity-70 ml-2">system performance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className={`rounded-xl border shadow-sm p-8 mb-8 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Security Analysis Scanner</h3>
            <p className="opacity-70">Enter a GitHub URL, npm package name, or PyPI package identifier for comprehensive security assessment</p>
          </div>
          <div className="mb-6">
            <SearchBar darkMode={darkMode} onScan={handleScan} />
          </div>
          <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200 dark:border-gray-700">
            <span className={`text-xs px-3 py-1.5 font-medium rounded-full border ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 border-gray-600' 
                : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}>npm: react@latest</span>
            <span className={`text-xs px-3 py-1.5 font-medium rounded-full border ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 border-gray-600' 
                : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}>github: facebook/react</span>
            <span className={`text-xs px-3 py-1.5 font-medium rounded-full border ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 border-gray-600' 
                : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}>pypi: tensorflow</span>
            <span className={`text-xs px-3 py-1.5 font-medium rounded-full border ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 border-gray-600' 
                : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}>Recent: lodash@4.17.21</span>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left Column - Risk Metrics */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Enhanced Vulnerability Analysis Card with Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header Section */}
              <div className={`px-8 pt-8 pb-6 border-b ${
                darkMode ? 'border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900' : 'border-gray-200 bg-gradient-to-r from-gray-50 to-white'
              }`}>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-red-500/20' : 'bg-red-50'
                    }`}>
                      <Bug className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Vulnerability Analysis Report</h3>
                      <p className="text-sm opacity-70 mt-1">Detailed breakdown of security findings and threat assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}>
                      Active Threats: 6
                    </span>
                    <button className="text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="px-8 pt-8">
                <RiskCard result={someData} darkMode={darkMode} />
                
                {/* Vulnerability List */}
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold">Detected Vulnerabilities</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-sm">Critical</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm">High</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm">Medium</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vulnerability Table */}
                  <div className={`rounded-xl overflow-hidden border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className={`grid grid-cols-12 gap-4 px-6 py-4 text-sm font-medium border-b ${
                      darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="col-span-5">Vulnerability</div>
                      <div className="col-span-2">Severity</div>
                      <div className="col-span-2">Type</div>
                      <div className="col-span-2">CVSS Score</div>
                      <div className="col-span-1">Status</div>
                    </div>
                    
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {vulnerabilityData.map((vuln) => (
                        <div key={vuln.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                          <div className="col-span-5">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded ${
                                vuln.severity === 'Critical' ? 'bg-red-500/10' :
                                vuln.severity === 'High' ? 'bg-amber-500/10' :
                                'bg-blue-500/10'
                              }`}>
                                {vuln.severity === 'Critical' ? <AlertTriangle className="w-4 h-4 text-red-500" /> :
                                 vuln.severity === 'High' ? <AlertCircle className="w-4 h-4 text-amber-500" /> :
                                 <AlertCircle className="w-4 h-4 text-blue-500" />}
                              </div>
                              <div>
                                <div className="font-medium">{vuln.name}</div>
                                <div className="text-sm opacity-70">Detected {vuln.detected}</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-600 dark:text-red-400' :
                              vuln.severity === 'High' ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' :
                              'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                            }`}>
                              {vuln.severity}
                            </span>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <Code className="w-4 h-4 opacity-70" />
                              <span>{vuln.type}</span>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <div className="flex items-center gap-2">
                              <div className={`h-2 rounded-full flex-1 ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                <div className={`h-full rounded-full ${
                                  vuln.cvss >= 9 ? 'bg-red-500' :
                                  vuln.cvss >= 7 ? 'bg-amber-500' :
                                  'bg-blue-500'
                                }`} style={{ width: `${vuln.cvss * 10}%` }}></div>
                              </div>
                              <span className="font-medium">{vuln.cvss.toFixed(1)}</span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              vuln.status === 'Active' 
                                ? 'bg-red-500/20 text-red-600 dark:text-red-400' 
                                : 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                            }`}>
                              {vuln.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm opacity-70">
                      Showing {vulnerabilityData.length} vulnerabilities
                    </div>
                    <div className="flex gap-3">
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        darkMode 
                          ? 'border border-gray-700 hover:bg-gray-800' 
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}>
                        Export List
                      </button>
                      <button className="px-4 py-2 bg-gradient-to-r from-gray-900 to-black text-white text-sm font-medium rounded-lg hover:from-black hover:to-gray-900 transition-all duration-200">
                        View All Vulnerabilities
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Risk Graph with Enhanced Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header Section */}
              <div className={`px-8 pt-8 pb-6 border-b ${
                darkMode ? 'border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900' : 'border-gray-200 bg-gradient-to-r from-gray-50 to-white'
              }`}>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-blue-500/20' : 'bg-blue-50'
                    }`}>
                      <TrendingDown className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Risk Trend Analysis</h3>
                      <p className="text-sm opacity-70 mt-1">Risk score development over last 30 days with performance metrics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <select className={`text-sm rounded-lg px-4 py-2.5 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-gray-300' 
                        : 'bg-white border-gray-300 text-gray-700'
                    } border focus:ring-2 focus:ring-gray-500 focus:border-gray-500`}>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last year</option>
                      <option>Custom range</option>
                    </select>
                    <button className={`px-4 py-2.5 border text-sm font-medium rounded-lg ${
                      darkMode 
                        ? 'border-gray-600 hover:bg-gray-700' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}>
                      Export Chart
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Graph Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    {/* Graph Container */}
                    <div className={`relative rounded-xl border p-6 ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                    }`}>
                      {/* Graph content would go here */}
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-4xl mb-2 ${
                            darkMode ? 'text-gray-600' : 'text-gray-300'
                          }`}>📈</div>
                          <p className={darkMode ? 'text-gray-500' : 'text-gray-400'}>Interactive Risk Trend Chart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Risk Metrics Sidebar */}
                  <div className="space-y-6">
                    {/* Current Risk Level */}
                    <div className={`rounded-xl border p-6 ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <h4 className="font-semibold mb-4">Current Risk Level</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold">{riskData[riskData.length - 1]}</div>
                          <div className="text-sm opacity-70">Out of 100</div>
                        </div>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          riskData[riskData.length - 1] > 75 ? 'bg-red-500/20 text-red-500' :
                          riskData[riskData.length - 1] > 50 ? 'bg-amber-500/20 text-amber-500' :
                          'bg-emerald-500/20 text-emerald-500'
                        }`}>
                          <span className="text-xl font-bold">
                            {riskData[riskData.length - 1] > 75 ? 'High' :
                             riskData[riskData.length - 1] > 50 ? 'Med' : 'Low'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Performance Metrics */}
                    <div className={`rounded-xl border p-6 ${
                      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <h4 className="font-semibold mb-4">Performance Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="opacity-70">Risk Reduction</span>
                            <span className="font-semibold text-emerald-500">-40%</span>
                          </div>
                          <div className={`h-2 rounded-full overflow-hidden ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}>
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="opacity-70">Scan Accuracy</span>
                            <span className="font-semibold">98%</span>
                          </div>
                          <div className={`h-2 rounded-full overflow-hidden ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-200'
                          }`}>
                            <div 
                              className="h-full bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"
                              style={{ width: '98%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vulnerability Distribution with Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header Section */}
              <div className={`px-8 pt-8 pb-6 border-b ${
                darkMode ? 'border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900' : 'border-gray-200 bg-gradient-to-r from-gray-50 to-white'
              }`}>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  <div className="flex items-center gap-3 mb-4 lg:mb-0">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-purple-500/20' : 'bg-purple-50'
                    }`}>
                      <PieChart className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Vulnerability Distribution</h3>
                      <p className="text-sm opacity-70 mt-1">Breakdown of vulnerability types and their prevalence</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm font-medium">Critical</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm font-medium">High</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm font-medium">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chart Content */}
              <div className="p-8">
                <div className="h-56 flex items-end space-x-4">
                  {[
                    { name: 'Code Injection', value: 24, color: 'from-red-600 to-red-400', height: 40 },
                    { name: 'Data Exposure', value: 18, color: 'from-amber-500 to-amber-400', height: 48 },
                    { name: 'AI Hallucination', value: 15, color: 'from-blue-600 to-blue-400', height: 36 },
                    { name: 'Logic Poisoning', value: 22, color: 'from-purple-600 to-purple-400', height: 44 },
                    { name: 'Other', value: 21, color: 'from-gray-600 to-gray-400', height: 32 },
                  ].map((item, index) => (
                    <div key={index} className="flex-1 group relative">
                      <div className="text-center">
                        <div className="text-sm font-medium opacity-70 mb-3">{item.name}</div>
                        <div 
                          className={`bg-gradient-to-t ${item.color} rounded-t-xl transition-all duration-300 group-hover:shadow-lg mx-auto`}
                          style={{ 
                            height: `${item.height}%`,
                            width: '80%'
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                              {item.value}%
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="text-lg font-bold">{item.value}%</div>
                          <div className="text-xs opacity-70 mt-1">
                            {item.value > 20 ? 'High' : item.value > 10 ? 'Medium' : 'Low'} priority
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Risk Assessment & Actions */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Risk Assessment Card with Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-900 to-black p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-semibold text-white">Risk Assessment</h3>
                  </div>
                  <span className="px-4 py-1.5 bg-white/20 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    Detailed Analysis
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">{someData.risk_score}</div>
                  <div className="text-sm opacity-70">Overall Risk Score</div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                    someData.risk_score > 75 ? 'bg-red-500/20 text-red-600 dark:text-red-400' :
                    someData.risk_score > 50 ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' :
                    'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {someData.risk_score > 75 ? 'Critical Risk' :
                     someData.risk_score > 50 ? 'Medium Risk' : 'Low Risk'}
                  </div>
                </div>
                
                {/* Score Breakdown */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Score Breakdown
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="opacity-70">Base Risk</span>
                        <span className="font-semibold">65/100</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div className="h-full bg-gradient-to-r from-gray-400 to-gray-600" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="opacity-70">Vulnerability Impact</span>
                        <span className="font-semibold">+10</span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div className="h-full bg-gradient-to-r from-red-400 to-red-600" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Confidence & Severity */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`rounded-lg p-4 ${
                    darkMode ? 'bg-gray-900' : 'bg-gray-50'
                  }`}>
                    <div className="text-sm opacity-70 mb-2">Confidence Score</div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-emerald-500 font-medium mt-1">High Confidence</div>
                  </div>
                  <div className={`rounded-lg p-4 ${
                    darkMode ? 'bg-gray-900' : 'bg-gray-50'
                  }`}>
                    <div className="text-sm opacity-70 mb-2">Severity Level</div>
                    <div className="text-2xl font-bold">7.5/10</div>
                    <div className="text-xs text-red-500 font-medium mt-1">High Severity</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Actions with Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header */}
              <div className={`px-6 pt-6 pb-4 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h3 className="text-xl font-semibold">Quick Actions</h3>
              </div>
              
              {/* Actions */}
              <div className="p-6 space-y-4">
                {[
                  { icon: Download, label: 'Download Full Report', color: 'gray' },
                  { icon: Shield, label: 'View Mitigations', color: 'emerald' },
                  { icon: ExternalLink, label: 'Compare Versions', color: 'purple' },
                ].map((action, index) => (
                 <button
    key={index}
    className={`w-full flex items-center justify-between p-4 border rounded-xl 
      transition-all duration-200 group
      border-gray-200 hover:bg-gray-50 hover:border-gray-900
      dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:border-gray-300
    `}
  >
    <div className="flex items-center">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 
          transition-colors
          bg-gray-100 dark:bg-gray-700
          ${actionHoverClasses[action.color]}
        `}
      >
        <action.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </div>

      <span className="font-medium text-gray-900 dark:text-gray-100">
        {action.label}
      </span>
    </div>

    <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-gray-500 dark:text-gray-400" />
  </button>
))}
                
                <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl hover:from-black hover:to-gray-900 transition-all duration-200 group shadow-sm hover:shadow">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">Schedule Rescan</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Recent Scans with Header */}
            <div className={`rounded-xl border shadow-sm overflow-hidden ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {/* Header */}
              <div className={`px-6 pt-6 pb-4 border-b ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Recent Scans</h3>
                  <button className="text-sm font-medium flex items-center gap-1">
                    View all <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Scans List */}
              <div className="p-6 space-y-4">
                {[
                  { name: 'react@18.2.0', score: 42, time: '2 min ago', status: 'safe' },
                  { name: 'lodash@4.17.21', score: 68, time: '15 min ago', status: 'warning' },
                  { name: 'axios@1.6.0', score: 35, time: '1 hour ago', status: 'safe' },
                  { name: 'express@4.18.2', score: 82, time: '3 hours ago', status: 'critical' },
                ].map((scan, index) => (
                  <div key={index} className={`flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 rounded-xl transition-colors duration-200 border ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div>
                      <div className="font-medium mb-1">{scan.name}</div>
                      <div className="text-sm opacity-70 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {scan.time}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 font-semibold ${
                        scan.score < 50 ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 
                        scan.score < 75 ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400' : 
                        'bg-red-500/20 text-red-600 dark:text-red-400'
                      }`}>
                        {scan.score}
                      </div>
                      {scan.status === 'safe' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                      ) : scan.status === 'warning' ? (
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Security Advisory Panel */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-8 mb-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-700/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="text-white mb-6 lg:mb-0 lg:pr-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-gray-300" />
                Security Advisory
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl">
                This package demonstrates elevated risk indicators including AI-generated code patterns and insufficient testing coverage. 
                We recommend implementing additional security controls, conducting manual code review, or evaluating alternative packages.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
                  <span className="text-gray-200 font-medium">Review recommended</span>
                </div>
                <div className="text-gray-400">•</div>
                <span className="text-gray-200 font-medium">Priority: Medium</span>
                <div className="text-gray-400">•</div>
                <span className="text-gray-200 font-medium">ETA for remediation: 14 days</span>
              </div>
            </div>
            <button className="bg-white text-gray-900 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
              View Detailed Recommendations
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Sentinel Security Platform v2.4.1</div>
                <div className="text-xs opacity-70">© 2024 Sentinel Security Technologies. SOC 2 Type II Certified.</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="font-medium hover:opacity-80 transition-opacity">Privacy Policy</a>
              <a href="#" className="font-medium hover:opacity-80 transition-opacity">Terms of Service</a>
              <a href="#" className="font-medium hover:opacity-80 transition-opacity">Support</a>
              <a href="#" className="font-medium hover:opacity-80 transition-opacity">Documentation</a>
              <a href="#" className="font-medium hover:opacity-80 transition-opacity">Contact Sales</a>
            </div>
          </div>
          <div className="text-center text-xs opacity-70 pt-6 border-t border-gray-200 dark:border-gray-800">
            This system processes security data in real-time. All security scans are logged for audit and compliance purposes.
          </div>
        </footer>

      </main>
    </div>
  );
}