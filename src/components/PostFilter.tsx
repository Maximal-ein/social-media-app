import MyInput from "./UI/input/MyInput.jsx";
import MySelect from './UI/select/MySelect';

interface PostFilterProps {
    filter: {
        query: string;
        sort: string;
    };
    setFilter: (filter: { query: string; sort: string }) => void;
}

const PostFilter = ({filter, setFilter}: PostFilterProps) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sort'
                options={[
                    {value: 'title', content: 'By name'},
                    {value: 'body', content: 'By desc'}
                ]}
            />
        </div>
    );
};

export default PostFilter;