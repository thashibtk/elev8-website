'use client';

import React, { useState } from 'react';

export default function BmiSection() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [activity, setActivity] = useState('Fitness');
  
  const [result, setResult] = useState<{
    bmi: string;
    status: 'Underweight' | 'Healthy' | 'Overweight' | 'Obese';
    bmr: string;
    calories: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age) || 25;

    if (!h || !w || h <= 0 || w <= 0) return;

    // Detection: if height <= 100, treat as inches. If > 100, treat as cm.
    let heightInInches = h;
    let weightInLbs = w;
    let heightInCm = h;
    let weightInKg = w * 0.453592;

    if (h > 100) {
      // Input in cm
      heightInCm = h;
      heightInInches = h / 2.54;
    } else {
      heightInCm = h * 2.54;
    }

    if (w > 200 && h > 100) {
      // Weight in lbs
      weightInLbs = w;
      weightInKg = w * 0.453592;
    } else if (w < 200 && h > 100) {
      // Weight likely in kg
      weightInKg = w;
      weightInLbs = w * 2.20462;
    }

    // Imperial BMI formula: (weight in lbs / (height in inches)^2) * 703
    const bmiVal = (weightInLbs / (heightInInches * heightInInches)) * 703;

    let statusVal: 'Underweight' | 'Healthy' | 'Overweight' | 'Obese' = 'Healthy';
    if (bmiVal < 18.5) {
      statusVal = 'Underweight';
    } else if (bmiVal <= 24.9) {
      statusVal = 'Healthy';
    } else if (bmiVal <= 29.9) {
      statusVal = 'Overweight';
    } else {
      statusVal = 'Obese';
    }

    // Mifflin-St Jeor BMR Equation
    let bmrVal = 10 * weightInKg + 6.25 * heightInCm - 5 * a;
    if (gender === 'Male') {
      bmrVal += 5;
    } else {
      bmrVal -= 161;
    }

    // Activity multiplier
    let mult = 1.2;
    if (activity === 'Gym') mult = 1.55;
    if (activity === 'Personal') mult = 1.725;

    const caloriesVal = bmrVal * mult;

    setResult({
      bmi: bmiVal.toFixed(1),
      status: statusVal,
      bmr: Math.round(bmrVal).toLocaleString(),
      calories: Math.round(caloriesVal).toLocaleString(),
    });
  };

  return (
    <div className="tf-spacing-1 section-bmi">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-6">
            <div className="left">
              <div className="title text-uppercase h2 mb-30 text-anime">What's Your BMI?</div>
              <table className="table-bmi mb-20">
                <thead>
                  <tr>
                    <td>BMI</td>
                    <td>WEIGHT STATUS</td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={result?.status === 'Underweight' ? { backgroundColor: 'rgba(33, 150, 243, 0.25)', fontWeight: 'bold' } : {}}>
                    <td>Below 18.5</td>
                    <td className="fw-semibold text-Title">Underweight</td>
                  </tr>
                  <tr style={result?.status === 'Healthy' ? { backgroundColor: 'rgba(76, 175, 80, 0.25)', fontWeight: 'bold' } : {}}>
                    <td>18.5 - 24.9</td>
                    <td className="fw-semibold text-Title">Healthy</td>
                  </tr>
                  <tr style={result?.status === 'Overweight' ? { backgroundColor: 'rgba(255, 152, 0, 0.25)', fontWeight: 'bold' } : {}}>
                    <td>25.0 - 29.9</td>
                    <td className="fw-semibold text-Title">Overweight</td>
                  </tr>
                  <tr style={result?.status === 'Obese' ? { backgroundColor: 'rgba(244, 67, 54, 0.25)', fontWeight: 'bold' } : {}}>
                    <td>30.0 - and Above</td>
                    <td className="fw-semibold text-Title">Obese</td>
                  </tr>
                </tbody>
              </table>
              <div className="text"><span className="fw-bold text-Title">BMR</span> Metabolic Rate / <span className="fw-bold text-Title">BMI</span> Body Mass Index</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right">
              <div className="title text-uppercase h2 mb-10 text-Title text-uppercase text-anime">Determine Your BMI</div>
              <div className="text mb-30">Understanding your Body Mass Index (BMI) is the first step toward achieving your fitness goals.</div>
              
              <form onSubmit={calculateBMI} className="form-booking">
                <div className="cols cols-2 g-20 mb-20">
                  <fieldset>
                    <input 
                      className="style-4" 
                      type="number" 
                      step="any"
                      placeholder="Height (inc or cm)" 
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required 
                    />
                  </fieldset>
                  <fieldset>
                    <input 
                      className="style-4" 
                      type="number" 
                      step="any"
                      placeholder="Weight (lbs or kg)" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required 
                    />
                  </fieldset>
                </div>
                
                <div className="cols cols-2 g-20 mb-20">
                  <fieldset>
                    <input 
                      className="style-4" 
                      type="number" 
                      placeholder="Age" 
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required 
                    />
                  </fieldset>
                  
                  <fieldset>
                    <select
                      aria-label="Gender"
                      className="style-4 w-100"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{
                        height: '56px',
                        backgroundColor: '#181818',
                        color: '#fff',
                        border: '1px solid #333',
                        borderRadius: '8px',
                        padding: '0 15px',
                        fontSize: '15px'
                      }}
                    >
                      <option value="Male">Gender: Male</option>
                      <option value="Female">Gender: Female</option>
                      <option value="Other">Gender: Other</option>
                    </select>
                  </fieldset>
                </div>

                <div className="mb-20">
                  <select
                    aria-label="Activity Level"
                    className="style-4 w-100"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    style={{
                      height: '56px',
                      backgroundColor: '#181818',
                      color: '#fff',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      padding: '0 15px',
                      fontSize: '15px'
                    }}
                  >
                    <option value="Fitness">Activity: Fitness / Moderate</option>
                    <option value="Gym">Activity: Gym / Active</option>
                    <option value="Personal">Activity: Personal Training / Heavy</option>
                  </select>
                </div>

                <button type="submit" className="tf-btn text-uppercase justify-content-center w-100 mb-20">
                  Calculate
                </button>
              </form>

              {result && (
                <div 
                  className="bmi-result-card mt-25"
                  style={{
                    backgroundColor: '#141414',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: '24px 28px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-20">
                    <div>
                      <div 
                        className="text-uppercase mb-5" 
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: '700', 
                          letterSpacing: '1.5px', 
                          color: '#888888' 
                        }}
                      >
                        YOUR BMI SCORE
                      </div>
                      <div 
                        style={{ 
                          fontSize: '44px', 
                          fontWeight: '800', 
                          lineHeight: '1', 
                          color: '#FFFFFF',
                          fontFamily: '"Bai Jamjuree", sans-serif'
                        }}
                      >
                        {result.bmi}
                      </div>
                    </div>
                    <div>
                      <span 
                        className="badge text-uppercase"
                        style={{
                          backgroundColor: 
                            result.status === 'Healthy' ? '#22C55E' : 
                            result.status === 'Underweight' ? '#3B82F6' : 
                            result.status === 'Overweight' ? '#F97316' : '#EF4444',
                          color: '#FFFFFF',
                          borderRadius: '30px',
                          padding: '8px 20px',
                          fontSize: '13px',
                          fontWeight: '700',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                        }}
                      >
                        {result.status}
                      </span>
                    </div>
                  </div>

                  <div 
                    className="row text-center pt-20" 
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    <div className="col-6">
                      <div 
                        className="text-uppercase mb-5" 
                        style={{ fontSize: '12px', fontWeight: '600', color: '#888888', letterSpacing: '0.5px' }}
                      >
                        Est. BMR
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF' }}>
                        {result.bmr} <span style={{ fontSize: '12px', fontWeight: '400', color: '#666666' }}>kcal</span>
                      </div>
                    </div>
                    <div className="col-6" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div 
                        className="text-uppercase mb-5" 
                        style={{ fontSize: '12px', fontWeight: '600', color: '#888888', letterSpacing: '0.5px' }}
                      >
                        Daily Calorie Need
                      </div>
                      <div style={{ fontSize: '20px', fontWeight: '700', color: '#F30A46' }}>
                        {result.calories} <span style={{ fontSize: '12px', fontWeight: '400', color: '#666666' }}>kcal</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
