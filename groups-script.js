


async function load(){
    const response = await fetch("data/fixtures.json");
    const data = await response.json();
    console.log(data.standings);
}

load();