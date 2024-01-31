import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState("0")
    const [numeroAnterior, setNumeroAnterior] = useState("0")
    const ultOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero("0")
        setNumeroAnterior("0")
    }

    const armarNumero = (numeroTexto: string) => {
        if(numero.includes(".") && numeroTexto === ".")return

        if(numero.startsWith("0") || numero.startsWith("-0")){
            if(numeroTexto === "."){
                setNumero(numero + numeroTexto)
            }else if(numeroTexto === "0" && numero.includes(".")){
                setNumero(numero + numeroTexto)
            }else if(numeroTexto !== "0" && !numero.includes(".")){
                setNumero(numeroTexto)
            }else if(numeroTexto === "0" && !numero.includes(".")){
                setNumero(numero)
            }else {
                setNumero(numero + numeroTexto)
            }



        }else {

            setNumero(numero + numeroTexto)
        }

    }

    const deleteNumbers = () => {
        let negativo = ""
        let numeroTemporal = numero

        if(numero.includes("-")){
            negativo = "-"
            numeroTemporal = numero.substring(1)
        }

        if(numeroTemporal.length > 1){
            setNumero(negativo + numeroTemporal.slice(0,-1))
        }else{
            setNumero("0")
        }
    }

    const positivoNegativo = () => {
        if(numero.includes("-")){
            setNumero(numero.replace("-", ""))
        }else{
            setNumero("-" + numero)
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if(numero.endsWith(".")){

            setNumeroAnterior(numero.slice(0,-1))
        }else {
            setNumeroAnterior(numero)
        }
        setNumero("0")
    }

    const botonSumar = () => {
        cambiarNumeroPorAnterior()
        ultOperacion.current = Operadores.sumar
    }

    const botonRestar = () => {
        cambiarNumeroPorAnterior()
        ultOperacion.current = Operadores.restar
    }

    const botonMultiplicar = () => {
        cambiarNumeroPorAnterior()
        ultOperacion.current = Operadores.multiplicar
    }

    const botonDividir = () => {
        cambiarNumeroPorAnterior()
        ultOperacion.current = Operadores.dividir
    }

    const calcular = () => {
        const numero1 =  Number(numero)
        const numero2 =  Number(numeroAnterior)

        switch (ultOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`)
                break;
                
                case Operadores.restar:
                    setNumero(`${numero2 - numero1}`)
                    break;

                    case Operadores.dividir:
                        setNumero(`${numero2 / numero1}`)
                        break;

                        case Operadores.multiplicar:
                            setNumero(`${numero1 * numero2}`)
                            break;
                
                }
                setNumeroAnterior("0")
    }
    return{
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        deleteNumbers,
        botonDividir,
        armarNumero,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular,
    }
}
