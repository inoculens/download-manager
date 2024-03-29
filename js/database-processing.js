// Procesarea bazei de date
const scriptURL = 'https://script.google.com/macros/s/AKfycbyh-FOIr70R4bEWFMbQgiFAN_XLzl_B-hXEF0x8piCVsshE9SfTrroWtQv3wV1Y7d92/exec'
const form = document.forms['Traffic']

// Trimite inputul catre baza de date
form.addEventListener ('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    }
)

// Inregistreaza adresa IPv4 a inputului
const ipFormInput = document.getElementById('userIPv4');
fetch('https://api.ipify.org?format=json')
.then((response) => { return response.json() })
.then((json) => {
    const ip = json.ip;
    ipFormInput.value = ip;
    console.log(ip);
})
.catch((err) => { console.error(`Error getting IP Address: ${err}`) })

// Inregistreaza adresa IPv6 a inputului
const ipFormInputV6 = document.getElementById('userIPv6');
fetch('https://ipify.org?format=json')
.then((response) => { return response.json() })
.then((json) => {
    const ip = json.ip;
    ipFormInputV6.value = ip;
    console.log(ip);
})
.catch((err) => { console.error(`Error getting IP Address: ${err}`) })