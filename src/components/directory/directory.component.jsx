import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map(( category )=> (   // categories.map(({ title, id, imageUrl }) 도 가능함(destructuring)
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;
