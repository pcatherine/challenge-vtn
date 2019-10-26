import React from "react";
import { Link } from "react-router-dom";
import DescriptionExercise from "../DescriptionExercise";
// import prototypeClimao from "../../assets/prototypes/climao.png";
import classes from "./Excercise4.module.scss";

const prototypeUrl =
    "//xd.adobe.com/spec/9ebd698b-429e-4369-51b6-da668ae21fd2-e88c";
const apiUrl = "//openweathermap.org/api";

const instructions = [
    "Neste exercício você terá que implementar um dashboard de previsão do tempo (use esse mesmo arquivo para implementar - você pode remover aqui o código que desejar).",
    () => (
        <>
            Você deve seguir todas as especificações do protótipo (seja o mais
            fiel ao protótipo):
            <Link target="_blank" to={prototypeUrl}>
                {" "}
                https:{prototypeUrl}
            </Link>
        </>
    ),
    () => (
        <>
            Use a api{" "}
            <Link target="_blank" to={apiUrl}>
                https:{apiUrl}
            </Link>{" "}
            para buscar dados de previsão do tempo.
        </>
    ),
    "Mostre temperatura em graus Celsius",
    "Mostre a cidade atual do usuário por padrão (dica: vamos testar com outras cidades)",
    "Mostre data atual formatada",
    "Buscar dados previsão usando a api indicada (você pode mockar os dados, mas irá receber menos pontos)",
    "Mostre temperatura, umidade, vento, direção vento atuais",
    "Mostre ícone de previsão do tempo de acordo com a previsão",
    "Buscar dados previsão para 5 dias da api indicada",
    "Mostre previsão para próximos 5 dias",
    "Pesquisar e alterar cidade"
];

// const = {
//     // { "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "base": "stations", "main": { "temp": 280.48, "pressure": 1012, "humidity": 93, "temp_min": 279.15, "temp_max": 282.15 }, "visibility": 8000, "wind": { "speed": 3.1, "deg": 300 }, "rain": { }, "clouds": { "all": 75 }, "dt": 1572120062, "sys": { "type": 1, "id": 1414, "country": "GB", "sunrise": 1572072157, "sunset": 1572108370 }, "timezone": 3600, "id": 2643743, "name": "London", "cod": 200 }

// }

export default function Exercise4() {

    // componentDidMount(){

    // }

    // handleInputChange = (event) => {
    //     event.preventDefault();

    //     const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    //     const name = event.target.id;

    //     this.setState({
    //       isEditing: true,
    //       values: {
    //         ...this.state.values,
    //         [name]: value,
    //       }
    //     });
    //   }



    return (
        // <>
        // {/* <DescriptionExercise instructions={instructions} /> */}
        // {/* <img
        //     alt="Protótipo"
        //     src={prototypeClimao}
        //     className={classes.PrototypeImage}
        // /> */}
        <>
            <div style={{ display: "none" }}>
                <DescriptionExercise instructions={instructions} />
            </div>

            <div className={classes.base}>
                <div className={classes.header} >
                    <h1>CLIMÃO.COM</h1>
                    <input id="city" onChange={() => this.handleInputChange()} placeholder="Buscar Cidade" />
                </div>
                <div className={classes.clima}>CASA</div>

                <div className={classes.blue}>
                    <div className={classes.div25}>
                        <span className={classes.fontBold}>casa</span>
                        <span className={classes.fontRegular}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div50}>
                        <span className={classes.fontBold}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div25}>
                        <span className={classes.fontBold2}>Min. 15</span>
                        <span className={classes.fontBold2}>Max. 25</span>
                    </div>
                </div>

                <div className={classes.orange}>
                    <div className={classes.div25}>
                        <span className={classes.fontBold}>casa</span>
                        <span className={classes.fontRegular}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div50}>
                        <span className={classes.fontBold}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div25}>
                        <span className={classes.fontBold2}>Min. 15</span>
                        <span className={classes.fontBold2}>Max. 25</span>
                    </div>
                </div>

                <div className={classes.green}>
                    <div className={classes.div25}>
                        <span className={classes.fontBold}>casa</span>
                        <span className={classes.fontRegular}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div50}>
                        <span className={classes.fontBold}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div25}>
                        <span className={classes.fontBold2}>Min. 15</span>
                        <span className={classes.fontBold2}>Max. 25</span>
                    </div>
                </div>

                <div className={classes.purple}>
                    <div className={classes.div25}>
                        <span className={classes.fontBold}>casa</span>
                        <span className={classes.fontRegular}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div50}>
                        <span className={classes.fontBold}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div25}>
                        <span className={classes.fontBold2}>Min. 15</span>
                        <span className={classes.fontBold2}>Max. 25</span>
                    </div>
                </div>

                <div className={classes.pink}>
                    <div className={classes.div25}>
                        <span className={classes.fontBold}>casa</span>
                        <span className={classes.fontRegular}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div50}>
                        <span className={classes.fontBold}>casa</span>
                    </div>
                    <div className={classes.separetor}></div>
                    <div className={classes.div25}>
                        <span className={classes.fontBold2}>Min. 15</span>
                        <span className={classes.fontBold2}>Max. 25</span>
                    </div>
                </div>
            </div>
        </>
    );
}
