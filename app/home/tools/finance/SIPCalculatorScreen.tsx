import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SIPCalculatorScreen = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (P && r && n) {
      const maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      setMaturityAmount(maturity.toFixed(2));
    } else {
      alert('Please fill all the fields correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SIP Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Monthly Investment (₹)"
        keyboardType="numeric"
        value={monthlyInvestment}
        onChangeText={setMonthlyInvestment}
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Interest Rate (%)"
        keyboardType="numeric"
        value={annualRate}
        onChangeText={setAnnualRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time Period (Years)"
        keyboardType="numeric"
        value={timePeriod}
        onChangeText={setTimePeriod}
      />
      <TouchableOpacity style={styles.button} onPress={calculateSIP}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {maturityAmount && (
        <Text style={styles.result}>
          Maturity Amount: ₹{maturityAmount}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default SIPCalculatorScreen;
