async function getPokemon(type) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/type/' + type)
    if (res.ok) {
      const data = await res.json()
      const pkms = data.pokemon
      for (let pkm of pkms) console.log(pkm.pokemon.name)
    } else throw new Error('Erro na requisição')
  } catch (err) {
    console.error(err)
  }
}

getPokemon('ice')