
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F97316',
          tabBarInactiveTintColor: '#94A3B8',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 65,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopColor: '#E2E8F0',
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={size}
                color={String(color)}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="estudios"
          options={{
            title: 'Estudios',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="school-outline"
                size={size}
                color={String(color)}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="experiencia"
          options={{
            title: 'Experiencia',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="briefcase-outline"
                size={size}
                color={String(color)}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="hobbies"
          options={{
            title: 'Hobbies',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="game-controller-outline"
                size={size}
                color={String(color)}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
