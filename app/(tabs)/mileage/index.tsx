import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { supabase } from '../../../lib/supabase';

export default function MileageScreen() {
  const [trips, setTrips] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mileage Tracker</Text>
        <Link href="/mileage/new" asChild>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1,234</Text>
          <Text style={styles.statLabel}>Total Miles</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>£617</Text>
          <Text style={styles.statLabel}>Tax Relief</Text>
        </View>
      </View>

      <FlatList
        data={trips}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tripItem}>
            <View style={styles.tripInfo}>
              <Text style={styles.tripPurpose}>{item.purpose}</Text>
              <Text style={styles.tripRoute}>
                {item.startLocation} → {item.endLocation}
              </Text>
            </View>
            <View style={styles.tripDetails}>
              <Text style={styles.tripDistance}>{item.distance} miles</Text>
              <Text style={styles.tripDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Ionicons name="car-outline" size={48} color="#999" />
            <Text style={styles.emptyStateText}>No trips recorded</Text>
            <Text style={styles.emptyStateSubtext}>
              Start tracking your business mileage
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    margin: 5,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tripItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginVertical: 1,
  },
  tripInfo: {
    flex: 1,
  },
  tripPurpose: {
    fontSize: 16,
    fontWeight: '500',
  },
  tripRoute: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tripDetails: {
    alignItems: 'flex-end',
  },
  tripDistance: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  tripDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
});