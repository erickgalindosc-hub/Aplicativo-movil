
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type TarjetaEstudioProps = {
  titulo: string;
  institucion: string;
  periodo: string;
  descripcion: string;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  titulo,
  institucion,
  periodo,
  descripcion,
  enCurso,
}: TarjetaEstudioProps) {
  return (
    <View style={[
      styles.tarjeta,
      enCurso && styles.tarjetaEnCurso
    ]}>
      <View style={styles.encabezado}>
        <View style={styles.icono}>
          <Ionicons
            name="school-outline"
            size={25}
            color="#F97316"
          />
        </View>

        {enCurso && (
          <View style={styles.insignia}>
            <Text style={styles.textoInsignia}>En Curso</Text>
          </View>
        )}
      </View>

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.institucion}>{institucion}</Text>

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
  tarjetaEnCurso: {
    backgroundColor: '#FFF7ED',
    borderColor: '#F97316',
    borderWidth: 2,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  icono: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#FFF1E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insignia: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  textoInsignia: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  titulo: {
    color: '#172554',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  institucion: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
  periodo: {
    color: '#F97316',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
  },
  descripcion: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 10,
    lineHeight: 20,
  },
});
