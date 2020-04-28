export async function enlistPerson(data) {
    await fetch('/users/enlist', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(json => console.log(json));
}

export async function showEnlisted() {
   await fetch('/users/enlisted/')
   .then(data => data.json())
   .then(json => console.log(json));
}