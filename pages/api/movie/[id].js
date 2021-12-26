import {apiBase, apiKey} from '../../../lib/tmdb'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    let q = req.query.q;
    let id = req.query.id

    const result = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json()

    res.status(200).json({
        info: json
    })
  }
  