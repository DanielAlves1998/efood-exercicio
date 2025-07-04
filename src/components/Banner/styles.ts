import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover; //é para ocupar toda a alargura disponivel

  .container {
    position: relative;
    padding-top: 480px;
    display: flex;
    justify-content: space-between; //joga cada elemento para cantos opóstos
    align-items: flex-end; //sem isso o botão fica do tamanho total da div
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`
