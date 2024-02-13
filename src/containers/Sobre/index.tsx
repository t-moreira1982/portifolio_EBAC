import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem iParagrafosum dolor sit, amet consectetur adipisicing elit.
      Molestiae iure, explicabo nisi cupiditate et eius, neque cum, doloremque
      maiores reprehenderit aspernatur iusto! Incidunt non beatae minima
      doloremque dolores dicta corrupti?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=t-moreira1982&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=t-moreira1982&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
