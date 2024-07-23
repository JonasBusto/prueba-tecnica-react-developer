export function FormFilter({
  handleChangeFilterSearch,
  handleChangeOrderTitle,
}: {
  handleChangeFilterSearch: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleChangeOrderTitle: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <form className='row d-flex justify-content-between align-items-center w-100 form-filter'>
      <div className='col-12 col-md-8 mb-3'>
        <label htmlFor='search'>Buscar</label>
        <input
          name='search'
          className='form-control'
          placeholder='Buscar por titulo, año'
          type='text'
          onChange={handleChangeFilterSearch}
        />
      </div>
      <div className='col-12 col-md-4 mb-3 d-flex flex-column'>
        <label htmlFor='order-title'>Ordenar</label>
        <select
          className='form-select'
          name='order-title'
          onChange={handleChangeOrderTitle}
        >
          <option value=''>Defecto</option>
          <option value='title-asc'>Titulo ascendente</option>
          <option value='title-desc'>Titulo descendente</option>
        </select>
      </div>
    </form>
  );
}
