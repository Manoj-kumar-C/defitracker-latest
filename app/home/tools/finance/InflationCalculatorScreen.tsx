import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const InflationCalculatorScreen = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [years, setYears] = useState('');
  const [inflatedValue, setInflatedValue] = useState(null);

  const calculateInflation = () => {
    const amount = parseFloat(initialAmount);
    const rate = parseFloat(inflationRate) / 100; // Convert percentage to decimal
    const n = parseFloat(years);

    if (amount > 0 && rate > 0 && n > 0) {
      const value = (amount * Math.pow(1 + rate, n)).toFixed(2);
      setInflatedValue(value);
    } else {
      setInflatedValue('Please enter valid inputs');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inflation Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Initial Amount (₹)"
        keyboardType="numeric"
        value={initialAmount}
        onChangeText={setInitialAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Annual Inflation Rate (%)"
        keyboardType="numeric"
        value={inflationRate}
        onChangeText={setInflationRate}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Years"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />
      <Button title="Calculate Inflated Value" onPress={calculateInflation} />
      {inflatedValue && (
        <Text style={styles.result}>
          {isNaN(inflatedValue)
            ? inflatedValue
            : `Inflated Value: ₹${inflatedValue}`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default InflationCalculatorScreen;
