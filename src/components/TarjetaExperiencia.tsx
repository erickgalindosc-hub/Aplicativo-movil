
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.icono}>
        <Ionicons name="code-slash-outline" size={24} color="#F97316" />
      </View>

      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  icono: {
    backgroundColor: '#FFF1E6',
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cargo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#172554',
  },
  empresa: {
    fontSize: 14,
    color: '#475569',
    marginTop: 5,
  },
  periodo: {
    color: '#F97316',
    fontSize: 12,
    marginTop: 8,
    fontWeight: 'bold',
  },
  descripcion: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 10,
    lineHeight: 20,
  },
});
