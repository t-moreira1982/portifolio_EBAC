import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">Olá! Eu sou o Thiago Moreira!</Paragrafo>
    <Paragrafo tipo="principal">
      - 🌱 Software engineer | Back End | Golang
    </Paragrafo>
    <Paragrafo tipo="principal">- 😄 Pronouns: ele / dele</Paragrafo>
    <Paragrafo tipo="principal">
      - HTML, CSS, Java script, Java, Golang
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=t-moreira1982&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs?username=t-moreira1982&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
