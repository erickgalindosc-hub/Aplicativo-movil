
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  titulo: string;
  descripcion: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

export default function TarjetaHobby({
  titulo,
  descripcion,
  icono,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <View style={styles.icono}>
        <Ionicons name={icono} size={27} color="#F97316" />
      </View>

      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <Text style={styles.detalle}>Toca para conocer más →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  icono: {
    width: 55,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#FFF1E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    flex: 1,
    marginLeft: 14,
  },
  titulo: {
    fontSize: 16,
    color: '#172554',
    fontWeight: 'bold',
  },
  descripcion: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
  detalle: {
    color: '#F97316',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
