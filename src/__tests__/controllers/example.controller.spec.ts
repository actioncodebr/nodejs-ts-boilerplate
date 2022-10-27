import { ExampleController } from '@src/controllers'

describe('Example test', () => {
  it('route toBe /examples', () => {
    const controller = new ExampleController()

    expect(controller.path).toBe('/examples')
  })
})
