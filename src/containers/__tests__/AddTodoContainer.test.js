import {mapDispatchToProps} from '../AddTodoContainer';
// import { addTodoRequest } from 'store/actions';

// describe('AddTodoContainer tests', () => {
//   it('mapDispatchToProps test', () => {
//     expect(mapDispatchToProps).toEqual()
//   })
//   it('kek', () => {
//     console.log(kek)
//   })
// })

it('mapDispatchToProps test', () => {
    const text = 'test'
    const dispatchSpy = jest.fn()
    mapDispatchToProps(dispatchSpy).addTodoRequest(text)
    expect(dispatchSpy.mock.calls).toEqual( [ [ { type: 'DEFAULT_ADD_TODO_REQUEST' } ] ])
  })
