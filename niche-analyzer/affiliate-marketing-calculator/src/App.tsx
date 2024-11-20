import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import { Formula } from './types/formula';
import { formulas } from './data/formulas';
import { FormulaButton } from './components/FormulaButton';
import { Calculator } from './components/Calculator';
import { MetricsGuide } from './components/MetricsGuide';

function App() {
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            <CalculatorIcon className="inline-block mr-2 mb-1" />
            Affiliate Marketing Calculator
          </h1>
          <p className="text-gray-600">Select a metric to calculate your marketing performance</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {Object.values(formulas).map((formula) => (
            <FormulaButton
              key={formula.name}
              formula={formula}
              isSelected={selectedFormula?.name === formula.name}
              onClick={() => setSelectedFormula(formula)}
            />
          ))}
        </div>

        {selectedFormula && (
          <Calculator
            formula={selectedFormula}
            onClear={() => setSelectedFormula(null)}
          />
        )}

        <MetricsGuide formulas={formulas} />
      </div>
    </div>
  );
}

export default App;