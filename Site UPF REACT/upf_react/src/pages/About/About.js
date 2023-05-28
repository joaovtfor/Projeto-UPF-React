import styles from './About.module.css'
import mapaupf from '../../Assets/IMAGEM/mapaupf.jpg';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre a UPF - <span>Para programadores</span>
      </h2>
      <p>Este projeto consiste em um Blog, destidado à entusiastas da área de TI, voltado principalmente para a disseminação de códigos-fonte de templates, bem como estilizações que incluem o código HTML, CSS e JS (quando existente). </p>
      <p>A UPF completou, em 2022, 54 anos de história e tem suas ações norteadas e sustentadas por quatro pilares: ensino, pesquisa, extensão e inovação tecnológica. Nessas cinco décadas, formou mais de 84 mil profissionais.</p>
        <p>A  tradição da UPF e a qualidade do ensino oferecido tornam a Instituição referência em educação superior no Rio Grande do Sul e na região Sul do Brasil. O ranking internacional da Times Higher Education confirmou a Universidade de Passo Fundo(UPF) como uma das melhores universidades do mundo. A Instituição já havia sido reconhecida entre as melhores da América Latina e do Caribe por duas vezes consecutivas pela mesma publicação, e ingressou no ranking mundial neste ano.</p>
        <Link to="https://goo.gl/maps/NdF8HKW1U6zMXAWx8" target='_blank'><img src={mapaupf} alt="Mapa UPF"  className={styles.img1}/></Link>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  )
};

export default About;
