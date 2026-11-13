
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type MiBotonProps = {
  titulo: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  estilo?: ViewStyle;
};

export default function MiBoton({
  titulo,
  icono,
  onPress,
  estilo,
}: MiBotonProps) {
  return (
    <TouchableOpacity
      style={[styles.boton, estilo]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Ionicons name={icono} size={20} color="#FFFFFF" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#F97316',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 5,
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
