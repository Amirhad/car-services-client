import React, { useState } from 'react'
import styles from './linksStyles/faq.module.css'
import car2 from '../../../assets/car2.png'

const Faq = () => {
  const [offset, setOffset] = useState()
  const handleScroll = () => setOffset(window.pageYOffset)
  window.addEventListener('scroll', handleScroll)
  return (
    <div className={styles.App}>
      <div className={styles.zoom}>
        <img src={car2} style={{ width: (100 + offset * 0.3) + '%'}} className={styles.car2} alt="" />
      </div>

      <div className={styles.content}>
        <h2>Какую проблему решает этот сайт?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia nesciunt dolorum illum non labore, sapiente eaque aut autem obcaecati ipsa architecto recusandae, excepturi repellendus impedit totam officiis sequi fugiat, animi accusamus dolorem magni nostrum similique! Quidem quae esse nihil amet sapiente beatae laudantium minus quasi, quo voluptates eos dolorum explicabo fuga officia animi deserunt? Laudantium exercitationem optio aut rem, sapiente voluptate ad in placeat ullam, beatae error impedit vitae minus illo asperiores officiis facere, quo incidunt! Reiciendis, veniam, quod sunt qui et maxime iure repellat architecto quos excepturi aut aperiam labore nesciunt, non porro nostrum nihil officia ipsa quia assumenda ducimus voluptatum? Odit, modi molestiae? Porro, quos animi vel iusto deserunt iste ratione cum sed labore minus quam, ipsa, necessitatibus perferendis voluptas natus dignissimos nostrum neque cumque. Necessitatibus eaque amet deserunt distinctio magnam consequuntur, voluptate earum, optio fugit hic praesentium ex quasi totam ipsum, quidem cupiditate consectetur! Non totam molestiae quod beatae temporibus quam sit deserunt earum dolor quas deleniti repellendus, libero molestias, ad placeat perferendis soluta aspernatur optio expedita. Non, neque corrupti? Facere, nobis saepe. Excepturi suscipit necessitatibus ipsa ad soluta cumque enim ea dolor, aut, atque at aspernatur distinctio maiores odio deserunt, dolore praesentium modi explicabo rerum.
        </p>
        <button className={styles.faqBtn}><a href="/">На главную</a></button>
      </div>
    </div>
  )
}

export default Faq
