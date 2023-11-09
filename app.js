const form = document.querySelector('#form')
const targetLanguage = document.querySelector('#target-language')
const textToTranslate = document.querySelector('#source-text')
const resultText = document.querySelector('#result')
const originalText = document.querySelector('#original-text')

const fetchData = async () => {
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text'
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '867eac44f9msh1d68d7efa52a925p1deb36jsn602eaa8d7197',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: 'auto',
            to: targetLanguage.value,
            text: textToTranslate.value
        })
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return  result.trans

    } catch (err) {  
        console.log(err);
    }
}

const showTraslatedText = async () => {
    const translateText = await fetchData()

    resultText.textContent = translateText
    originalText.textContent = textToTranslate.value

    textToTranslate.value = ''
} 


form.addEventListener('keypress', e => {
    if(textToTranslate){
        if(e.key === 'Enter'){
            showTraslatedText()
        }
    }
})
form.addEventListener('submit', e => {
    e.preventDefault()

    showTraslatedText()
})