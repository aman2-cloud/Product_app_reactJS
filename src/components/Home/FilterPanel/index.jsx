import { Checkbox, Slide } from '@material-ui/core';
import React from 'react'
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton/ndex';
import './styles.css'
const FilterPanel = ({selectedCategory,selectToggle,selectedRating,selectRating,cusines,changeChecked,changedPrice,selectedPrice,}) => {
  return (
    <div>
        {/* category */}
        <div className='input_group'>

            <p className='label'>
                Category
            </p>
            <FilterListToggle options={categoryList} value={selectedCategory} selectToggle={selectToggle}/>

        </div>
        {/* cusines */}
        <div className="input-group">
        <p className='label'>cusines</p>
        {cusines.map(cusine=><CheckboxProton key={cusine.id} cusine={cusine} changeChecked={changeChecked} />)}
        </div>
        {/* price range */}
        <div className="input-group">
        <p className='label-range'>Price Range</p>
                <SliderProton value={selectedPrice} changedPrice={changedPrice} />
        </div>
        {/* star rating */}
        <div className="input-group">

        <p className='label'>
               Star Rating
            </p>
            <FilterListToggle 
            options={ratingList} 
            value={selectedRating} 
            selectToggle={selectRating}/>

        </div>
    </div>

  );
};

export default FilterPanel;