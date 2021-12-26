import {apiBase, apiKey} from '../../lib/tmdb'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const response = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
    const json = await response.json()

    res.status(200).json({
        list: json.results
    })
  }
  