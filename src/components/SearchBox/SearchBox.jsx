import css from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
    return (
        <div className={css.container}>
            <label className={css.label}>
                Find contacts by name
                <input
                    className={css.input}
                    type="text"
                    value={value}
                    onChange={evt => onChange(evt.target.value)}
                />
            </label>
        </div>
    );
}

export default SearchBox;
