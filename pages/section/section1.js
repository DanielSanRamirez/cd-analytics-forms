import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import stylesSection from '../../styles/Section1.module.css'
import Layout from '../../components/Layout/Layout'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const FirstPost = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Layout>
            <div className={styles.principal_information}>
                <pichincha-typography
                    variant="h2"
                    color="blue"
                    weight="normal"
                    weight_color="500"
                    align="inherit"
                    class="typography hydrated bp-mt-72">
                    Sección 1: Datos generales del caso de uso
                </pichincha-typography>
                <p className={styles.paragraph}>
                    En esta sección se busca recopilar información general del caso de uso, con el fin de poder identificar variables relevantes para la asignación y descripción del mismo.
                </p>
                <form>
                    <div className={stylesSection.label_agrupated}>
                        <pichincha-typography variant="smallText" color="darkGrey" weight="bold" weight_color="500" align="inherit" class="typography hydrated bp-mr-4">
                            Problemática a resolver
                        </pichincha-typography>
                        <pichincha-tooltip position="top" text-align="center" class="hydrated">
                            <span slot="item-text">Describa la problemática con la que esta relacionada su caso de uso en no mas de 20 palabras.</span>
                            <span slot="item-body"><InfoOutlinedIcon style={{ color: "#0f265c" }} /></span>
                        </pichincha-tooltip>
                    </div>
                    <pichincha-input id="problematica-resolver" name="problematica-resolver" type="text" placeholder="Ej. Pronostico del PIB Anual" normal-helper="" error-helper="Escribe un código dactilar válido" value="" state="normal" size="medium" full-width="true" max-length="null" class="hydrated">
                    </pichincha-input>

                    <div className={stylesSection.label_agrupated}>
                        <pichincha-typography
                            variant="smallText"
                            color="darkGrey"
                            weight="bold"
                            weight_color="500"
                            align="inherit"
                            class="typography hydrated bp-mr-4"
                        >
                            Descripción de la problemática
                        </pichincha-typography>
                        <pichincha-tooltip position="top" text-align="center" class="hydrated">
                            <span slot="item-text">Se busca tener un detalle adicional de tu problemática. Ayúdenos a entender cual es la situación actual y que se busca resolver con este caso de uso.</span>
                            <span slot="item-body"><InfoOutlinedIcon style={{ color: "#0f265c" }} /></span>
                        </pichincha-tooltip>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Ej. Saber con anticipación el nombre de la persona para personalizar el servicio cuando llegue a la caja"
                        variant="outlined"
                        style={{ width: "100%" }}
                        className="bp-my-12"
                    />

                    <div className={stylesSection.label_agrupated}>
                        <pichincha-typography
                            variant="smallText"
                            color="darkGrey"
                            weight="bold"
                            weight_color="500"
                            align="inherit"
                            class="typography hydrated bp-mr-4"
                        >
                            Nombre del caso de uso
                        </pichincha-typography>
                        <pichincha-tooltip position="top" text-align="center" class="hydrated">
                            <span slot="item-text">El nombre que se le quiere asignar a este caso de uso. Trate de utilizar palabras que tengan relación con la problemática que se quiere solucionar.</span>
                            <span slot="item-body"><InfoOutlinedIcon style={{ color: "#0f265c" }} /></span>
                        </pichincha-tooltip>
                    </div>
                    <pichincha-input
                        id="problematica-resolver"
                        name="problematica-resolver"
                        type="text"
                        placeholder="Ej. Modelo de Scoring crediticio banca personas"
                        normal-helper="" error-helper="Escribe un código dactilar válido"
                        value=""
                        state="normal"
                        size="medium"
                        full-width="true"
                        max-length="null"
                        class="hydrated"
                    >
                    </pichincha-input>

                    <div className={stylesSection.label_agrupated}>
                        <pichincha-typography
                            variant="smallText"
                            color="darkGrey"
                            weight="bold"
                            weight_color="500"
                            align="inherit"
                            class="typography hydrated bp-mr-4"
                        >
                            Identifique el área que solicita el caso de uso
                        </pichincha-typography>
                    </div>
                    <FormControl variant="outlined" className={stylesSection.select}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            style={{height: '48px'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <div className={stylesSection.label_agrupated}>
                        <pichincha-typography
                            variant="smallText"
                            color="darkGrey"
                            weight="bold"
                            weight_color="500"
                            align="inherit"
                            class="typography hydrated bp-mr-4"
                        >
                            Identifique las áreas con las que se relaciona el caso de uso
                        </pichincha-typography>
                    </div>
                    <FormControl variant="outlined" className={stylesSection.select}>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            style={{height: '48px'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </div>
        </Layout>
    )
}

export default FirstPost