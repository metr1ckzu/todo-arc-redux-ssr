import todos from './reducer'



describe('todos reducer', () => {

  expect(todos(undefined, {})).toEqual([])
  it('should return default', () => {
    expect(
      todos([{
        text: 'Run the default tests'
      }], {
        type: 'KEK_TODO'
      })
    ).toEqual([
      {text: 'Run the default tests'}
    ])
  })

  it('should add todos', () => {
    expect(
      todos([], {
        type: 'ADD_TODO_SUCCESS',
        payload: {text: 'Run the add tests'}
      })
    ).toEqual([
      {text: 'Run the add tests'}
    ])
  })

  it('should delete todos', () => {
    expect(
      todos([{
        text: 'Run the delete tests',
        id: 1
      }], {
        type: 'DELETE_TODO_SUCCESS',
        payload: {id: 1},
      })
    ).toEqual([])
  })

  it('should fetch todos', () => {
    let fetchedData = {text: 'kek'}
    expect(
      todos([], {
        type: 'FETCH_TODOS_SUCCESS',
        payload: {fetchedData}
      })
    ).toEqual([{text: 'kek'}])
  })

})
