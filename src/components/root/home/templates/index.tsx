
import { useEffect } from 'react'
import ServicesTemplates from '../../components/services/templates'
import BannerHomePage from './banner'
import FeaturedTemplate from './features'
import ListFieldTemPlates from './field-blog'
import TestimonialsTemplate from './testimonial'



const HomeTemplates = () => {
  useEffect(() => {
    document.title = 'Play Pitch'
  },[])
  return (
    <>
      <BannerHomePage />
      <ListFieldTemPlates />
      <FeaturedTemplate />
      <TestimonialsTemplate />
      {/* <ServicesTemplates /> */}
    </>
  )
}

export default HomeTemplates