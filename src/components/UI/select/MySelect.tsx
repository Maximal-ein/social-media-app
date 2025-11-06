import {ChangeEvent, useMemo} from 'react';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    options: SelectOption<T>[];
    defaultValue: T;
    value: T;
    onChange: (value: T) => void;
}

const MySelect = <T extends string> (props: SelectProps<T>) => {

    const {options, defaultValue, value, onChange} = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as T)
    }

    const optionList = useMemo(
        () =>
            options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.content}
                </option>
            )),
            [options]
    )

    return (
        <select
            value={value}
            onChange={onChangeHandler}
        >
            <option disabled value="">{defaultValue}</option>
            {optionList}
        </select>
    );
};

export default MySelect;