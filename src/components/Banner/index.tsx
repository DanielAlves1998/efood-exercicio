import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/suchi.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
      <Button type="link" to="/produto" title="Clique auq para pedir Agora">
        Peça Já o Seu!
      </Button>
    </div>
  </Imagem>
) //é para colocar a fóto do banner no site

export default Banner
