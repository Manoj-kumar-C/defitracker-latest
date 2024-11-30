import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit'; // Import the chart component

const VisualCharts = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X-axis labels
    datasets: [
      {
        data: [60, 70, 80, 90, 85, 95],  // Data points for the bar chart
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Visual Charts</Text>

      <Text style={styles.subHeader}>Bar Chart - Monthly Performance</Text>

      {/* Chart */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <BarChart
          style={styles.chart}
          data={data}
          width={600}  // Width of the chart
          height={250} // Height of the chart
          yAxisLabel="$" // Y-axis label (e.g., for financial data)
          yAxisSuffix="k" // Y-axis suffix
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#f5f5f5',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // Bar color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          verticalLabelRotation={30} // Rotate the x-axis labels
        />
      </ScrollView>

      <Text style={styles.description}>
        This is a simple bar chart showing the monthly performance. You can
        visualize the data points in a more intuitive way using this chart.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default VisualCharts;
