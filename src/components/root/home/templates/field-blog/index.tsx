
import SidebarFieldBlog from '../../components/sidebar-field-blog'
import ContentFieldBlog from '../../components/content-field-blog'
import ActionsFieldBlog from '../../components/actions-field-blog'

const ListFieldBlogTemPlates = () => {
  return (
    <div className='container'>
        <div className='grid grid-cols-12 gap-8 auto-rows-max'>
            <SidebarFieldBlog />
           <ContentFieldBlog />
            <ActionsFieldBlog />
        </div>
    </div>
  )
}

export default ListFieldBlogTemPlates