import { mapDispatchToProps } from './AddTodoContainer';
import { addTodoRequest } from 'store/actions';

describe('AddTodoContainer tests', () => {
  it('mapDispatchToProps test', () => {
    expect(mapDispatchToProps).toEqual({addTodo: addTodoRequest})
  })
})
