import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalculadora } from '../components/BotonCalculadora'
import { useCalculadora } from '../hooks/useCalculadora'



export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        deleteNumbers,
        botonDividir,
        armarNumero,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular} = useCalculadora()

  return (
    <View style={styles.calculadorContainer}>
        {
            (numeroAnterior !== "0") && (

                <Text style={styles.resultadoPequeno}>
            {numeroAnterior}
            </Text>
                )
        }
        
        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit={true}>
        {numero}
        </Text>

        <View style={styles.fila}>
            
            <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar}/>
            <BotonCalculadora texto="+/-" color="#9B9B9B" accion={positivoNegativo}/>
            <BotonCalculadora texto="del" color="#9B9B9B" accion={deleteNumbers}/>
            <BotonCalculadora texto="/" color="#FF9427" accion={botonDividir}/>
        </View>
        <View style={styles.fila}>
            
            <BotonCalculadora texto="7" accion={armarNumero}/>
            <BotonCalculadora texto="8" accion={armarNumero}/>
            <BotonCalculadora texto="9" accion={armarNumero}/>
            <BotonCalculadora texto="X" color="#FF9427" accion={botonMultiplicar}/>
        </View>
        <View style={styles.fila}>
            
            <BotonCalculadora texto="4" accion={armarNumero}/>
            <BotonCalculadora texto="5" accion={armarNumero}/>
            <BotonCalculadora texto="6" accion={armarNumero}/>
            <BotonCalculadora texto="-" color="#FF9427" accion={botonRestar}/>
        </View>
        <View style={styles.fila}>
            
            <BotonCalculadora texto="3" accion={armarNumero}/>
            <BotonCalculadora texto="2" accion={armarNumero}/>
            <BotonCalculadora texto="1" accion={armarNumero}/>
            <BotonCalculadora texto="+" color="#FF9427" accion={botonSumar}/>
        </View>
        <View style={styles.fila}>
            
            <BotonCalculadora texto="0" ancho={true} accion={armarNumero}/>
            <BotonCalculadora texto="." accion={armarNumero}/>
            <BotonCalculadora texto="=" color="#FF9427" accion={calcular}/>
        </View>       

        </View>
  )
}
