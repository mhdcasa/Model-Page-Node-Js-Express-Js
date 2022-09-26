'use strict'

const { readFile } = require('fs');
const { promisify } = require('util')
const readfileAsync = promisify(readFile)
var path = require('path');

const READ_OPTION = {encoding: 'UTF-8'};

const HTML_URL = 'C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/ExpressJs/Model-Page-Node-Js-Express-Js/html';
// ================================== FIRST WAY =============================================

// const MODELE_URL = path.join(HTML_URL, 'modele.html')
// const HEAD_URL = path.join(HTML_URL, 'index.head.html')
// const CORPS_URL = path.join(HTML_URL, 'index.content.html')

// module.exports = async() => {
//     // Opération

//         // Récupérer le Model
//         const modelHTML = await readfileAsync( MODELE_URL, READ_OPTION );

//         // Récupérer le Head
//         const headHTML = await readfileAsync( HEAD_URL, READ_OPTION );

//         // Récupérer le Contenu
//         const corpsHTML = await readfileAsync( CORPS_URL, READ_OPTION );


//         // ================================== FIRST WAY =============================================

//         const Index_html = modelHTML
//             .replace('{{EN-TETE}}', headHTML)
//             .replace('{{CORPS}}', corpsHTML)

//     return Index_html;
//     // Retourner la page HTML
// }
// ================================== FIRST WAY =============================================

// ================================== SECOND WAY =============================================

// const lireFichierHtml = file => 
//         readfileAsync(path.join(HTML_URL, file), READ_OPTION );

// module.exports = async() => {
//     // Opération

//         // // Récupérer le Model
//         // const modelHTML = await lireFichierHtml('modele.html');

//         // // Récupérer le Head
//         // const headHTML = await lireFichierHtml('index.head.html');

//         // // Récupérer le Contenu
//         // const corpsHTML = await lireFichierHtml('index.content.html');

//         // pske readfileAsync c'est une promise drna ad had methode
//         // on est fait destrcure array
//         const [
//             modelHTML,
//             headHTML,
//             corpsHTML
//         ] = await Promise.all([
//             lireFichierHtml('modele.html'),
//             lireFichierHtml('index.head.html'),
//             lireFichierHtml('index.content.html'),
//         ])

//         const Index_html = modelHTML
//             .replace('{{EN-TETE}}', headHTML)
//             .replace('{{CORPS}}', corpsHTML)

//     return Index_html;
//     // Retourner la page HTML
// }

// ================================== SECOND WAY =============================================


// ================================== SECOND WAY WITH PARAMETERS =============================================
const lireFichierHtml = file => 
        readfileAsync(path.join(HTML_URL, file), READ_OPTION );

        //file c'est le fichier concerné , ca depends la page et la route (index , contact, about Us.....)
module.exports = async(pageName) => {
    // Opération
        // // Récupérer le Model
        const [
            modelHTML,
            headHTML,
            corpsHTML
        ] = await Promise.all([
            lireFichierHtml('modele.html'),
            lireFichierHtml(`${pageName}.head.html`),
            lireFichierHtml(`${pageName}.content.html`),
        ])

        const Index_html = modelHTML
            .replace('{{EN-TETE}}', headHTML)
            .replace('{{CORPS}}', corpsHTML)

    return Index_html;
    // Retourner la page HTML
}

// ================================== SECOND WAY WITH PARAMETERS =============================================