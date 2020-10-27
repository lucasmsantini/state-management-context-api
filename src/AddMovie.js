import React, {useState} from 'react';

const AddMovie = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    
const updateName = (e) => {
    setName(e.target.value);
}

    return(
        <form>
            <input type="text" name="name"value={name} onChange={updateName}/>
            <input type="text" name="price" />
            <button>Submit</button>
        </form>
    )
};
export default AddMovie;