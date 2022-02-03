// import {EventObserver} from '../src/js/patterns'
//
// describe("event observer pattern", () => {
//     let instance;
//
//     beforeEach(() => {
//         instance = new EventObserver;
//     })
//
//     xit("should exist", () => {
//         expect(instance.subscribe).toBeDefined()
//     })
//
//     xit("should method subscribe has been pushed new el to observers", () => {
//         expect(instance.observers.length).toEqual(0)
//         instance.subscribe('some')
//         expect(instance.observers.length).toEqual(1)
//     })
//     xit("should method unsubscribe", () => {
//         expect(instance.observers.length).toEqual(0)
//         instance.subscribe('some')
//         instance.subscribe('some2')
//         expect(instance.observers.length).toEqual(2)
//         instance.unsubscribe('some2')
//         expect(instance.observers.length).toEqual(1)
//     })
//     it("should called function from observers", () => {
//         const myMock = jest.fn()
//         for (let i = 0; i < 200; i++) {
//             instance.subscribe(myMock)
//         }
//         expect(instance.observers.length).toEqual(200)
//         instance.broadcast('some')
//         expect(myMock.mock.calls.length).toBe(200);
//     })
//
// })

