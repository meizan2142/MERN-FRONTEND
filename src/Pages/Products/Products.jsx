import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
});
const Products = () => {
    return (
        <Autocomplete
        className='py-40 min-h-screen'
            options={top100Films}
            getOptionLabel={(option) => option.title}
            filterOptions={filterOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Custom filter" />}
        />
    )
}

export default Products

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 }
];