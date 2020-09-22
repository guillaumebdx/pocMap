import React from "react"
import "./App.css"
import { WorldMap } from "react-svg-worldmap"

const countriesFromApi = {
    'US' : '#ff6961',
    'GB' : '#ff6961',
    'IT' : '#ff6961',
    'BE' : '#ff6961',
    'FR' : '#ff6961',
    'DE' : '#ff6961',
    'BR' : '#ff6961',
    'PT' : '#ff6961',
    'CN' : '#ff6961',
    'JP' : '#ff6961',
    'AU' : '#ff6961',
    'ES' : '#ff6961',
    'CA' : '#ff6961',
    'CH' : '#ff6961',
    'KR' : '#ff6961',
    'NL' : '#ff6961',
    'MX' : '#ff6961',
    'MY' : '#ff6961',
    'VN' : '#ff6961',
    'PE' : '#ff6961',
    'CI' : '#ff6961',
    'UG' : '#ff6961',
    'IL' : '#ff6961',
    'CO' : '#ff6961',
    'CL' : '#ff6961',
    'AR' : '#ff6961',
    'ZA' : '#ff6961',
    'IN' : '#2E8B57',
    'RU' : '#efd807',
    'SA' : '#efd807',
}

function App() {
    const data =
        [
            { country: "us", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "ar", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "pe", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "ug", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "cl", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "gb", value: " : Utilisation déconseillée quelle que soit la gravité" },
            { country: "it", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "my", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "ci", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "be", value: " : Utilisation fortement déconseillée quelle que soit la gravité" },
            { country: "vn", value: " : Utilisation fortement déconseillée quelle que soit la gravité" },
            { country: "nl", value: " : Utilisation fortement déconseillée quelle que soit la gravité" },
            { country: "fr", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "de", value: " : Utilisation déconseillée quelle que soit la gravité" },
            { country: "br", value: " : Utilisation déconseillée quelle que soit la gravité" },
            { country: "pt", value: " : Utilisation déconseillée quelle que soit la gravité" },
            { country: "cn", value: " : Toxique et pas de bénéfice" },
            { country: "jp", value: " : Non recommandé" },
            { country: "au", value: " : Fortement déconseillé quelle que soit la gravité" },
            { country: "es", value: " : Retiré des recommandations / uniquement essais cliniques" },
            { country: "ch", value: " : Retiré des recommandations / uniquement essais cliniques" },
            { country: "ca", value: " : Aucun bénéfice clinique quelle que soit la gravité" },
            { country: "kr", value: " : Retiré des recommandations" },
            { country: "mx", value: " : Ne devrait pas être utilisé quelle que soit la gravité" },
            { country: "in", value: " : Recommandé cas mild et modérés" },
            { country: "ru", value: " : Ni recommandé ni déconseillé" },
            { country: "za", value: " : Ne pas utiliser quelle que soit la gravité" },
            { country: "sa", value: " : Recommandé en 3ème ligne" },
            { country: "il", value: " : Aucun traitement antiviral recommandé pour COVID19" },
            { country: "co", value: " : Ne pas utiliser / uniquement essais cliniques" },

        ]
    const stylingFunction = (context : any) => {
console.log(context.country)
        return {
            fill: countriesFromApi[context.country],
            cursor: "pointer"
        }
    }

    function Disclaimer() {
        return (
            <div>
                <p>
                Carte réalisée à partir des <a href="https://twitter.com/nathanpsmad/status/1305583025707720706/photo/1">données</a> recueillies par <a href="https://twitter.com/nathanpsmad"> Nathan Peiffer-Smadja </a>
                </p>
                <p>
                    Dernière mise à jour le 21 septembre 2020
                </p>
            </div>
        )
    }
    return (
        <div className="App" >
            <WorldMap width="1000" styleFunction={stylingFunction} color="red" title="Recommandations gouvernementales Hydroxychloroquine" size="xl" data={data} />
            <Disclaimer/>
        </div>
    )
}
export default App;
