import DirectoryItem from '../directory-item/directory-item.component';
import './directory.component.scss'


const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: 'https://images.pexels.com/photos/13020506/pexels-photo-13020506.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/hats'
  },
  {
    id: 2,
    title: 'Jackets',
    imageUrl: 'https://images.pexels.com/photos/19958157/pexels-photo-19958157/free-photo-of-portrait-of-woman-posing-in-pink-background.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/jackets'

  },
  {
    id: 3,
    title: 'Sneakers',
    imageUrl: 'https://images.pexels.com/photos/8310728/pexels-photo-8310728.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/sneakers'

  },
  {
    id: 4,
    title: 'Womens',
    imageUrl: 'https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/womens'

  },
  {
    id: 5,
    title: 'Mens',
    imageUrl: 'https://images.pexels.com/photos/1923109/pexels-photo-1923109.jpeg?auto=compress&cs=tinysrgb&w=600',
    route: 'shop/mens'

  },
];





const Directory = () => {

  return (

   < div className="directory-container">
  {categories.map((category) => (
  <DirectoryItem key={category.id} category={category}/>
  ))}

  </div>

  
);
};
export default Directory;